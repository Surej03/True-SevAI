FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
# Install dependencies (prefer --omit=dev for production)
RUN npm install --omit=dev
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]