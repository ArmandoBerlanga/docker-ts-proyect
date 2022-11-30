FROM node:14.17.0-alpine3.13

RUN mkdir -p /home/backend
WORKDIR /home/backend

COPY package.json /home/backend

RUN npm install --only=production

COPY ./build /home/backend

EXPOSE 5001

CMD ["npm", "start"]
