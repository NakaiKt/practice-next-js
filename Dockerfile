
FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

EXPOSE 3333

ENTRYPOINT [""]
CMD ["/bin/sh"]
