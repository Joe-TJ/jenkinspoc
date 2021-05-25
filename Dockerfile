FROM node:7
ADD app.js /app.js
EXPOSE 80
ENTRYPOINT ["node", "app.js"]
