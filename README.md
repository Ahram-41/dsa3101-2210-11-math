# dsa3101-2210-11-math
The Github repository for NUS DSA3101 11-Math Handwriting Recognition project team

Our Idea now is to develop an platform that shortens the time consumed by Grading students' submissions.

1. Using Mathpix as a starting step for converting student submission file (preferred .png) to LaTex form. By using this API we make the recognition part easier for Professors (No bother of bad handwirtting! YEAH!).(Conversion correctness?)

2. [Idea for now] try to take in some key steps by prof and flag out common mistakes.(How to Realize, Sorting?)

3. [Idea for now] Using the SymPy package to evaluate the first place correctness.

4. Suggest the question grading by highlitting the flagged mistakes? -1/-all

5. Adding up and gives the results.

6. Using RNN to predict all expressions of the standard solutions and help to grade.

7. Using WolframAlpha as a new API to get help functions.

```
.
├── backend(flask-server)
│   ├── model
│   ├── uploads
│   ├── node_modules
│   ├── server.py
│   ├── convert_latex.py
│   ├── latex2pdf.py
│   ├── calculator.py
│   ├── convert_latex.py
│   ├── enhance_contrast.py
│   ├── Dockerfile
│   ├── requirement.txt
│   └── README.md
├── dataset
├── docker-compose.yml
├── Front-end(my-app)
│   ├── src
│   ├── public
│   ├── package.json
│   ├── nginx.default.conf
│   └── Dockerfile
└── README.md
```



