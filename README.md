## Integrantes API

Este proyecto es una API REST básica construida con Express.js, que expone información sobre un grupo de integrantes. La API permite consultar información de cada integrante según su ID.
### Tabla de Contenidos

    Instalación
    Uso
    Endpoints
    Ejemplos de Uso
    Tecnologías

### Instalación

Para ejecutar este proyecto, sigue estos pasos:

    Clona el repositorio:
```bash
git clone https://github.com/SolarSpectre/laboratorio8-9.git
```
Navega al directorio del proyecto:

cd nombre-del-directorio

Instala las dependencias:
```bash
npm install
```
Inicia el servidor:
```
    node index.js

    El servidor estará activo en http://localhost:3030 o en el puerto especificado en la variable de entorno PORT.
```
### Uso

Esta API permite consultar la información de un integrante especificando su ID en la URL.
Iniciar el Servidor

Ejecuta el siguiente comando para iniciar el servidor:
```bash
node index.js
```
    Asegúrate de que el puerto 3030 esté disponible o configura el valor de PORT en las variables de entorno para utilizar otro puerto.

### Endpoints
GET /integrantes/:id

Obtiene la información de un integrante según su id.
```
    URL: /integrantes/:id
    Método HTTP: GET
    Parámetro:
        id (Número entero): ID del integrante.
    Respuesta Exitosa:
        Código: 200 OK
        Contenido: Información del integrante en formato JSON.
    Respuesta de Error:
        Código: 404 Not Found
        Contenido: { "error": "Integrante not found" }
```
### Ejemplos de Uso
Ejemplo 1: Solicitud Exitosa
Solicitud
```bash
curl http://localhost:3030/integrantes/1
```
Respuesta
```json
{
  "id": 1,
  "nombre": "Joseph",
  "apellido": "Caza",
  "edad": 19,
  "email": "joseph.caza@epn.edu.ec"
}
```
Ejemplo 2: Integrante No Encontrado
Solicitud
```bash
  curl http://localhost:3030/integrantes/10
```
Respuesta
```json
{
  "error": "Integrante not found"
}
```
Tecnologías

    Node.js
    Express.js

Notas

    Esta es una API básica solo para fines de prueba y demostración.
    Puedes modificar los datos de ejemplo en el arreglo integrantes dentro del archivo de código.
