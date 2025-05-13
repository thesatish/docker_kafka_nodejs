const { Kafka } = require("kafkajs");
const Inventory = require("./models/Inventory");

const kafka = new Kafka({
  clientId: "inventory-service",
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: "inventory-group" });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "order_created", fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const order = JSON.parse(message.value.toString());

      // Decrement inventory quantity
      const item = await Inventory.findOne({ product: order.product });
      if (item) {
        item.quantity -= order.quantity;
        await item.save();
        console.log("Inventory updated based on order:", order);
      }
    },
  });
};

module.exports = startConsumer;
