const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: 'order-service',
  brokers: [process.env.KAFKA_BROKER || 'kafka:9092'],
});

const producer = kafka.producer();

const initProducer = async () => {
  await producer.connect();
};

const sendOrderEvent = async (order) => {
  const snt = await producer.send({
    topic: "order_created",
    messages: [{ value: JSON.stringify(order) }],
  });
  console.log("Sending order event:", order, snt);
};

module.exports = { initProducer, sendOrderEvent };
