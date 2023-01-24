FROM node:16.18-bullseye-slim

COPY ./source /app
WORKDIR /app

RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]