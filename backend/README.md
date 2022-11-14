# Backend functions
- *model* folder contains the bttr model we used for MHER
    - *modelLatex.py* contains functions to invoke trained model to recognize MHER
- *node_model* folder contains node models for flask server
- *venv* folder is used by Front-end team to test server.py
- *uploads* folder will save the uploaded file recieved by flask-server

- *latex2pdf.py* is used to generate PDF by TEX file

- *convert_latex.py* was build by Mathpix API. 

    Please be careful when you are using its function, since it is *paid* and its pricing is

    - $0.02/request (0-1K requests)
    - $0.004/request (1K-100K requests)

- *enhance_contrast,py* is used for image preprocessing 

    To use its function:
    
    - img = cv2.imread(r"/Users/yixuangao/dsa3101-2210/test.png")
    - new_img = normalise(img,"img.jpg")




