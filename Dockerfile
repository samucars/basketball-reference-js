FROM node:10.15.3
RUN mkdir -p /app
WORKDIR /app
COPY index.js .
COPY .npmrc .
COPY package.json .
COPY ./src ./src/
RUN rm -rf node_modules
RUN npm cache clean --force
RUN npm install --production --loglevel verbose
CMD ["sh", "-c", "npm start"]
