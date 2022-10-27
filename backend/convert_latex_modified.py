#!/usr/bin/env python
import os
import requests
import json
from zipfile import ZipFile


def request_body(file_path):
    r = requests.post("https://api.mathpix.com/v3/text",
        files={"file": open(file_path,"rb")},
        data={
            "options_json": json.dumps({
                "math_inline_delimiters": ["$", "$"],
                "rm_spaces": False,
                "formats":["text","latex_styled"]
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



def get_convert_from_zip(filename):
    with ZipFile(filename, 'r') as zip:
        zip.extractall()
        dir = filename[:-4]

        dic = {}
        for file in os.listdir(dir):
            filename = os.fsdecode(file)
            for file in os.listdir(dir + "/" + filename):
                filename_1 = os.fsdecode(file)
                for file in os.listdir(dir + "/" + filename + "/" + filename_1):
                    filename_2 = os.fsdecode(file)
                    if filename_2.endswith(".png"):
                        str_ = request_body(dir + "/" + filename + "/" + filename_1 +"/"+ filename_2)
                        dic[filename_2]=str_
    return dic

