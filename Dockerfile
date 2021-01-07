FROM node:14.15.3
WORKDIR /backend/app
RUN npm install
COPY ./ ./
EXPOSE 6001
CMD [ "node", "app.js" ]