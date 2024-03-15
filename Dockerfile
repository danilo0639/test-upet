# Usa la imagen base de Node.js
FROM node:latest AS backend

WORKDIR /usr/src/app/Backend

COPY Backend .

WORKDIR /usr/src/app/Frontend

COPY Frontend .


WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "run", "server"]
