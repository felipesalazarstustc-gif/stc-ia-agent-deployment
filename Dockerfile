FROM node:18-alpine

# Carpeta de la app
WORKDIR /usr/app

COPY index.js .

CMD ["node", "index.js"]
