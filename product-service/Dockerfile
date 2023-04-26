FROM node:alpine
WORKDIR /herbcollab/product-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8071
CMD ["npm","run", "dev"]