FROM python:3.8

WORKDIR /app
ENV FLASK_APP=server.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN pip install --upgrade pip
# RUN apt install texlive-latex-base
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
EXPOSE 5000
COPY . .

# docker build -t flask-app .
# docker run -v ${PWD}:/app/tmp flask-app

ENTRYPOINT [ "python", "-u", "-m", "flask", "run", "--host=0.0.0.0"]


