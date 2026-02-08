FROM node:20-alpine

WORKDIR /app

RUN apk update
RUN apk add git
COPY . .

RUN npm install
RUN npm i -g serve
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]