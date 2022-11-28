FROM node:16

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . .

ENV NODE_ENV=development
ENV port=8080
ENV MONGO_URL=mongodb+srv://chaima3:cccccc@marhaba.1bfxnoc.mongodb.net/app_marhaba?retryWrites=true&w=majority
ENV JWT_SECRET=chaimae

EXPOSE 8080

CMD ["node", "server.js"]
