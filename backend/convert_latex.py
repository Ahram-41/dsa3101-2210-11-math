#!/usr/bin/env python
import os
import requests
import json
from zipfile import ZipFile
from latex2pdf import createPDF


image_formats = [".png", ".jpg"]

# use MathPix API to convert image to latex
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
    return r.json().get("text")


# add pdf format info in tex file
s1="\\pdfminorversion=4\n"
s1+="\\documentclass[]{article}\n"
s1+="\\usepackage[utf8]{inputenc}\n"
s1+="\\usepackage{amssymb,latexsym,amsmath}\n"
s1+="\\usepackage[a4paper,top=3cm,bottom=2cm,left=3cm,right=3cm,marginparwidth=1.75cm]{geometry}\n"
s1+="\\usepackage{graphicx}\n"
s1+="\\usepackage[colorlinks=true, allcolors=blue]{hyperref}\n"
s1+="\\begin{document}\n\n"
# can add if condition to specify
s1+="\\begin{math}\n"

s2="\\end{math}\n" 
s2+="\n\n\\end{document}" 

def amendLatex(str):
	str = s1+str+s2



def open_file(dir):
    # unzip the uploaded file
    pic_directory = dir[:-4]
    os.mkdir(pic_directory)
    latex_directory = pic_directory+"_latex"
    os.mkdir(latex_directory)
    
    with ZipFile(dir, 'r') as zip:
        zip.extractall(pic_directory)
            

    # convert all image in the dir to latex
    for filename in os.listdir(pic_directory):
        # if is image file
        if any(x in filename for x in image_formats):
            pic=os.path.join(pic_directory, filename)
            tex = f"{os.path.join(latex_directory, filename)[:-4]}.tex"

            # write .tex file
            f = open(f"{os.path.join(latex_directory, filename)[:-4]}.tex","w+")
            r = request_body(pic)
            # add pdf format info in tex file
            f.write(amendLatex(str(r)))

            createPDF(tex)

    return latex_directory

