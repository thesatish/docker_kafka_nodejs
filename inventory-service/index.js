const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require("./db");
connectDB();
const PORT = process.env.PORT

const inventoryRoute = require("./routes/inventory.route");
app.use("/inventory", inventoryRoute);


// Optional: Health Check or Future API Endpoints
app.get('/', (req, res) => {
  res.send('Inventory Service is up and listening to Kafka events');
});

app.listen(PORT, () => {
  console.log(`✅ Inventory service running on port ${PORT}`);
});
