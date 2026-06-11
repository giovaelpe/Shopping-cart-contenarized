FROM node:24
WORKDIR /usr/app/src
COPY . .
RUN npm ci
RUN npm install --save-dev nodemon
CMD ["npm", "run", "dev"]