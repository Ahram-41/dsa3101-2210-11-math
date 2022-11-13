# Build Back End
FROM python:3.8
RUN apt-get update && apt-get install -y vim texlive-latex-base texlive
WORKDIR /app
# need to reorgnize the path name
ENV FLASK_APP=./tmp/server.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN pip install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
# to use bttr model
COPY model ./model
RUN pip install -e ./model

# docker build -t flask-app .
# docker run --name team11 -v ${PWD}:/app/tmp flask-app
copy . .
CMD [ "python", "-u", "-m", "flask", "run", "--host=0.0.0.0"]