// mqttServices.ts

import { MqttClient, connect } from 'mqtt';

const brokerUrl = 'mqtt://172.16.5.201:1883';

const options = {
  // Vous pouvez ajouter des options ici, comme l'authentification, si nécessaire
};

// Connexion au broker MQTT
const client: MqttClient = connect(brokerUrl, options);

client.on('error', (error: Error) => {
  console.error("Can't connect:", error);
  // Dans React Native, on ne fait pas `process.exit()`
  // On peut gérer l'erreur d'une manière différente, peut-être avec un état ou une alerte.
});

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('temp/objectif', (err, granted) => {
    if (err) {
      console.error('Error subscribing:', err);
      return;
    }
    console.log('Subscribed to objectif topic:', granted);
    client.publish('temp/objectif', 'Hello mqtt');
  });
});


client.on('message', (topic: string, message: Buffer) => {
  console.log(`Received message on topic ${topic}:`, message.toString());
  // Traitez le message ici selon vos besoins
});

export default client;

