FROM python:3.8

WORKDIR /app
# need to reorgnize the path name
ENV FLASK_APP=./tmp/flask-server/server.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN pip install --upgrade pip
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
RUN ["apt", "install", "-y", "texlive-latex-base"]
RUN ["apt", "install", "-y", "texlive"]
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
# to use bttr model
COPY ./model ./model
RUN pip install -e ./model

EXPOSE 5000


# docker build -t flask-app .
# docker run --name team11 -v ${PWD}:/app/tmp flask-app

ENTRYPOINT [ "python", "-u", "-m", "flask", "run", "--host=0.0.0.0"]


