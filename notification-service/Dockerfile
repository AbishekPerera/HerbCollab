FROM node:alpine
WORKDIR /herbcollab/notification-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8079
CMD ["npm","run", "dev"]