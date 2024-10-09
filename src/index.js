const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const moduleRoutes = require("./routes/moduleRoutes");

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(bodyParser.json());

const BASE_URL = "/api/v1";
app.use(`${BASE_URL}/auth`, authRoutes);
app.use(`${BASE_URL}/modules`, moduleRoutes);
app.use(`${BASE_URL}/users`, userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
