From node:14
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
RUN npm ci --only=production
COPY ..
EXPOSE 8080
CMD ["node","server.js"]