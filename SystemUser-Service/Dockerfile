FROM node:alpine
WORKDIR /herbcollab/systemuser-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8074
CMD ["npm","run", "dev"]