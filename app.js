const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const { verifyToken } = require('./middleware/auth.middleware');
const connectDB = require('./db');

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

// API Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/login', authRoutes);
app.use('/api/products', verifyToken, productRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});