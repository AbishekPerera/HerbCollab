FROM node:alpine
WORKDIR /herbcollab/orderpurchase-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8072
CMD ["npm","run", "dev"]