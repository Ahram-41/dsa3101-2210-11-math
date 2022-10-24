import React from 'react'
import './Main.css'
import Navbar from '../Components/Navbar.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: "",
        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();
    
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
    
        fetch('http://localhost:5000/upload', { method: 'POST', body: data })
        .then((response) => { response.json().then((body) => { 
            this.setState({ imageURL: `http://localhost:5000/${body.file}` });
          });
        });
      }

    render() {
        return (
            <>
            <Navbar />
            <form onSubmit={this.handleUploadImage}>
            <div class = "content">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1> Please upload Zip folder </h1>
            <br />
            <p> Zip folder should contain a folder for each student number, and for each student folder, it should contain a folder for each question</p> 
            <br />
            <br />
            <br />
            <br />
              <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            </div>
            <br />
            <div class = "content">
              <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" class = "input" />
            </div>
            <br />
            <br />
            <div class = "content">
              <button class = "btn">Upload</button>
            </div>
          </form>
          </>
        );
      }
}

export default Main;