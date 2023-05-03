FROM node:latest as node

WORKDIR /SaveNote

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node","index"]
