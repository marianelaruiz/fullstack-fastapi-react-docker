# set base image
FROM node:17-alpine

# set the working directory in the container
WORKDIR /app

# copy the dependencies file to the working directory
COPY package*.json /app

# install dependencies
RUN npm i --silent
RUN npm i -g react-scripts@5.0.1

# copy the content of the local src directory to the working directory
COPY . /app

# command to run on container start
CMD [ "npm", "start"]