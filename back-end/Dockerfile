FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY . ./
EXPOSE 8080
RUN npm install
CMD ["node", "server.js"]
