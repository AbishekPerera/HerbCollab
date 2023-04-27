FROM node:alpine
WORKDIR /herbcollab/ratereview-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8073
CMD ["npm","run", "dev"]