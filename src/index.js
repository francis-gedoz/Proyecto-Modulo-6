require('dotenv').config();
const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');

const connectDB = require('./config/db');

const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');
const swaggerSpec = require('./swagger');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'OK' });
});

app.use('/users', userRouter);
app.use('/products', productRouter);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log('El servidor está corriendo en el puerto', PORT);
    console.log(`Documentación Swagger: http://localhost:${PORT}/api-docs`);
});