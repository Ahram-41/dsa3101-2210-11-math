import os
from flask import Flask, request, session
from werkzeug.utils import secure_filename
from flask_cors import CORS
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('HELLO ! ')

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads'
CORS(app, expose_headers='Authorization')


@app.route('/upload', methods=['POST'])
def fileUpload():
    target = os.path.join(app.config['UPLOAD_FOLDER'])
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload")
    file = request.files['file']
    filename = secure_filename(file.filename)
    destination = "/".join([target, filename])
    file.save(destination)
    session['uploadFilePath'] = destination
    response = "Uploaded"
    return response


if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True, port=5000)