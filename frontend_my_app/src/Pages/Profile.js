import React from "react";
import { useNavigate} from "react-router-dom"; 
import "./Profile.css";

function Profile() {
    let navigate= useNavigate();
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        module: "st3131"
      },
      {
        module: "st3239"
      }
    ];
  
    const errors = {
      module: "module not in system"
    };
  
    const handleSubmit = (event) => {
      var { module } = document.forms[0];
  
      // Find module
      const modData = database.find((mod) => mod.module === module.value);
  
      // Compare user info
      if (modData) {
        if (modData.module !== module.value) {
          // Invalid module
          setErrorMessages({ name: "module", message: errors.module });
        } else {
          setIsSubmitted(true);
        }
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? navigate("/profile") : renderForm}
        </div>
      </div>
    );
  }

export default Profile;