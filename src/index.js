const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const moduleRoutes = require('./routes/moduleRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const BASE_URL = '/api/v1';
app.use(`${BASE_URL}`, authRoutes);
app.use(`${BASE_URL}`, userRoutes);
app.use(`${BASE_URL}`, moduleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));