# API de Usuarios y Productos

Descripción:

- API REST sencilla para manejar usuarios y productos. Incluye autenticación con JWT y documentación OpenAPI/Swagger.

Requisitos:

- Node.js v16+ y npm
- MongoDB (local o Atlas)

Variables de entorno (.env):

- `PORT` - puerto donde corre la app (por defecto 3000)
- `MONGO_URI` - cadena de conexión a MongoDB
- `SECRET` - clave para firmar JWT

Instalación:

```bash
npm install
```

Ejecución en desarrollo:

```bash
npm run dev
```

Rutas principales:

- Usuarios:

  - `POST /users/register` — registrar usuario (body: `username`, `email`, `password`).
  - `POST /users/login` — login (body: `email`, `password`) devuelve `token`.
  - `GET /users/verify-user` — obtener datos del usuario autenticado (Bearer token requerido).
  - `PUT /users/update` — actualizar usuario autenticado (Bearer token requerido; body: `username`, `email`, `password`).

- Productos:

  - `GET /products` — listar productos.
  - `POST /products` — crear producto (body: `name`, `price`, `description`).
  - `GET /products/{id}` — obtener producto por ID.
  - `PUT /products/{id}` — actualizar producto por ID.
  - `DELETE /products/{id}` — eliminar producto por ID.

Documentación (Swagger / OpenAPI):

- La documentación está disponible en:

  http://localhost:3000/api-docs

- Utiliza autenticación Bearer (JWT) para los endpoints protegidos. En la UI de Swagger, pulsa "Authorize" e introduce `Bearer <tu_token>`.

Notas y siguientes pasos sugeridos:

- Asegúrate de crear el archivo `.env` con `MONGO_URI` y `SECRET` antes de arrancar.
- Ejecutar pruebas y añadir validación adicional si se necesita.
