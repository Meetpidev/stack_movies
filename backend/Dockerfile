FROM node:22.10.0-alpine.3.19
LABEL maintainer="your_email@example.com"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "index.js"]
