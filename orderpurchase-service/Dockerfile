FROM node:alpine
WORKDIR /herbcollab/orderpurchase-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8082
CMD [ "npm", "run", "dev" ]