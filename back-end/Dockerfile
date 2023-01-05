FROM node:16

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . .

ENV NODE_ENV=
ENV port=
ENV MONGO_URL=
ENV JWT_SECRET=

EXPOSE 8080

CMD ["node", "server.js"]
