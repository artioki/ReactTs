FROM node:15-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 5000:5000 5555:5555
RUN npx prisma generate
CMD [ "npm", "run", "dev"]

