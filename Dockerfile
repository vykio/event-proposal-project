FROM node:22-alpine as builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Define the command to start your application in development mode
ENTRYPOINT ["/bin/sh", "-c", "npm run dev"]