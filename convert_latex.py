#!/usr/bin/env python
import requests
import json


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
      latex = r.json().get("text")
      return latex 
