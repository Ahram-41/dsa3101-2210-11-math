#!/usr/bin/env python
import os
import requests
import json
from zipfile import ZipFile

image_formats = [".png", ".jpg"]


def request_body(file_path):
    r = requests.post("https://api.mathpix.com/v3/text",
        files={"file": open(file_path,"rb")},
        data={
            "options_json": json.dumps({
            "math_inline_delimiters": ["$", "$"],
            "rm_spaces": True
            })
       },
        headers={
            "app_id": "chenyichi41_gmail_com_d4e21c_7225fe",
            "app_key": "ddc6e8e904b4f7ffcedd76d87fbd010ba27f0269e026137e8899e00cc6bb93f9"
        }
    )
    if r.json().has_key("latex_styled"):
        return r.json().get("latex_styled")
    else:
        return r.json().get("text")
    


def open_file(dir):
    # unzip the uploaded file
    pic_directory = dir[:-4]
    os.mkdir(pic_directory)
    latex_directory = pic_directory+"_latex"
    os.mkdir(latex_directory)

    with ZipFile(dir, 'r') as zip:
        zip.extractall(pic_directory)
            

    # convert all image to latex
    for filename in os.listdir(pic_directory):
        # if is image file
        if any(x in filename for x in image_formats):
            pic=os.path.join(pic_directory, filename)
            # write .tex file
            f = open(f"{os.path.join(latex_directory, filename)[:-4]}.tex","w+")
            r = request_body(pic)
            f.write(str(r))
    return dir

