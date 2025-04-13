FROM node:22-alpine

WORKDIR /app

COPY ./package.json .


RUN npm install --legacy-peer-deps
RUN npm install uid
RUN npm install react-redux
RUN npm install @reduxjs/toolkit


COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]