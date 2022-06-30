# This is the base image which you'll build your custom image on
FROM node:alpine

# Tell your container where your app's source code will live
WORKDIR /app

# What code do you what to copy, and where to put it?
COPY package.json ./
COPY package-lock.json ./

# Does your app have any dependencies that should be installed?
RUN npm install

COPY . ./

# Container's port
# EXPOSE 8080

# How do you start your app?
CMD ["npm", "start"]