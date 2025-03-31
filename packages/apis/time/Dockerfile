##FROM NODE
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
##APENAS UM COMENTARIO
RUN npm install
COPY . .
EXPOSE 3002
CMD ["node", "src/index.js"]
