# dsa3101-2210-11-math
The Github repository for NUS DSA3101 11-Math Handwriting Recognition project team

We developed an platform that shortens the time consumed by Grading students' submissions.

- the platform used Mathpix as a starting step for converting student submission file (preferred .png) to LaTex form. By using this API we make the recognition part easier for Professors (No bother of bad handwirtting! YEAH!).

- Users can annotate and grading in the online system etc.

## Our vision for the future works

- try to take in some key steps by prof and flag out common mistakes.(How to Realize, Sorting?)

- Using the SymPy package to evaluate the first place correctness.

- Suggest the question grading by highlitting the flagged mistakes? -1/-all

- Adding up and gives the results.

- Using RNN to predict all expressions of the standard solutions and help to grade.

-  Using WolframAlpha as a new API to get help functions.

## repository structure
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
├── docker-compose.yml
├── Front-end(my-app)
│   ├── src
│   ├── public
│   ├── package.json
│   ├── nginx.default.conf
│   └── Dockerfile
└── README.md
```



