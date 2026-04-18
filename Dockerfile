# Usamos una versión "Alpine" que es súper ligera y muy profesional
FROM node:18-alpine

# Carpeta de la app
WORKDIR /usr/app

# Copiamos solo los archivos necesarios
COPY index.js .

# Node no necesita instalar nada si no usamos librerías externas
# Ejecutamos el agente
CMD ["node", "index.js"]