import os
from convert_latex import request_body

pic_directory = "/Users/wbik/dsa3101-2210-11-math/dataset/Pics"
latex_directory = "/Users/wbik/dsa3101-2210-11-math/dataset/Pics_to_latex"


image_formats = [".png", ".jpg"]

# convert all image to latex
for filename in os.listdir(pic_directory):
    # if is image file
    if any(x in filename for x in image_formats):
        pic=os.path.join(pic_directory, filename)
        # write .tex file
        f = open(f"{os.path.join(latex_directory, filename)[:-4]}.tex","w+")
        r = request_body(pic)
        f.write(str(r))







