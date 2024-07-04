FROM node:16 as base

WORKDIR /app

RUN npm install -g concurrently

COPY website/package.json ./website/package.json
COPY back-end/package.json ./back-end/package.json

RUN cd website && npm install
RUN cd back-end && npm install

COPY website/ ./website/
COPY back-end/ ./back-end/

EXPOSE 8000 3000

CMD concurrently "cd website && npm run dev" "cd back-end && npm run start:dev"
