FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src ./
EXPOSE 4200
CMD ["npm", "run", "start-docker"]
