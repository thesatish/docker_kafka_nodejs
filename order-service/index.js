const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT
const { initProducer } = require("./producer");


const connectDB = require("./db");
connectDB();

const orderRoutes = require("./routes/order.route");

app.use("/order", orderRoutes);


app.get('/test', (req, res) => {
  res.send('Order Service is up and listening to Kafka events');
});


initProducer().then(() => {
  console.log("✅ Kafka Producer connected");
});

app.listen(PORT, () => console.log(`✅ Order service running on port ${PORT}`));
