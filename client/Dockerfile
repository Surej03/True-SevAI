FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm build

COPY  . .

EXPOSE 3000

CMD [ "npm","start" ]