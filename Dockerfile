# Dockerfile

FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Instala Nodemon globalmente para recarga en caliente
RUN npm install -g nodemon

# Exponer el puerto que va a usar la API
EXPOSE ${PORT}

# Comando por defecto para iniciar la aplicación con nodemon
CMD ["nodemon", "src/index.ts"]
