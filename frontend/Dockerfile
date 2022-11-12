# get the base node image
FROM node:alpine as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY package.json /frontend

# install npm dependencies
RUN npm install

# copy other project files
COPY ./ /frontend/

# build the folder
RUN npm run build

# Handle Nginx
FROM nginx
COPY --from=builder /frontend/build/ /usr/share/nginx/html
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf

# EXPOSE 8080

# CMD ["npm", "run", "start"]

# docker build -t my-app .
# docker run -p 3000:3000 --name team11_frontend -d my-app


