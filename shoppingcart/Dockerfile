FROM node:24
WORKDIR /usr/src/app
ENV REACT_APP_BACKEND=http://localhost:8080/api/products
COPY . .
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-n", "-l", "3000", "build"]