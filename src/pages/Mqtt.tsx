import * as Paho from 'paho-mqtt'; // Importe le client MQTT
import React, { useEffect, useState } from 'react'; // Importe les hooks nécessaires
import { View, Text, ScrollView, StyleSheet, TextInput, Button, Alert } from 'react-native'; // Importe les composants nécessaires

// Définir le type des messages reçus
interface MessagePayload {
  timestamp: string;
  temperature: number;
}

export default function App() {
  const [messages, setMessages] = useState<MessagePayload[]>([]);
  const [temperature, setTemperature] = useState<string>(''); // Pour stocker la température entrée
  const [topic, setTopic] = useState<string>('temp/objectif'); // Pour stocker le topic d'envoi
  const [client, setClient] = useState<Paho.Client | null>(null); // Client MQTT

  useEffect(() => {
    //const newClient = new Paho.Client('172.16.5.201', 1883, 'applicationNative');
    const newClient = new Paho.Client('172.16.5.201', 9001, 'applicationNative');

    newClient.onConnectionLost = (responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.error("Connection lost:", responseObject.errorMessage);
      }
    };

    newClient.connect({
      onSuccess() {
        console.log('Connected to MQTT broker');
        newClient.subscribe('temp/actuelle');
      },
      onFailure(err) {
        console.error('Failed to connect to MQTT broker:', err.errorMessage);
      },
      useSSL: false,
    });

    newClient.onMessageArrived = (message: Paho.Message) => {
      try {
        // Traitement direct du texte brut
        const temperature = parseFloat(message.payloadString);
        const timestamp = new Date().toISOString();
        const payload: MessagePayload = { timestamp, temperature };

        setMessages((prevMessages) => {
          const newMessages = [...prevMessages, payload];
          return newMessages.length > 10 ? newMessages.slice(1) : newMessages;
        });
      } catch (error) {
        console.error('Invalid message payload:', error);
      }
    };

    setClient(newClient); // Stocke le client MQTT

    return () => {
      if (newClient.isConnected()) {
        newClient.disconnect();
      }
    };
  }, []);

  // Fonction pour envoyer la température
  const sendTemperature = () => {
    if (client && client.isConnected()) {
      if (topic.trim() === '') {
        Alert.alert('Erreur', 'Le topic ne peut pas être vide.');
        return;
      }

      // Envoi de la température en texte brut
      const message = new Paho.Message(temperature);
      message.destinationName = topic; // Utilise le topic spécifié par l'utilisateur
      client.send(message);
      Alert.alert("Température envoyée", `La température de ${temperature}°C a été envoyée au topic "${topic}".`);
      setTemperature(''); // Réinitialise l'entrée après l'envoi
    } else {
      Alert.alert('Erreur', "Impossible d'envoyer la température, le client MQTT n'est pas connecté.");
    }
  };

  return (
    <ScrollView style={styles.container}>
            {/* Champ d'entrée pour la température */}
            <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrer la température"
          keyboardType="numeric"
          value={temperature}
          onChangeText={setTemperature}
        />

        {/* Champ d'entrée pour le topic */}
        <TextInput
          style={styles.input}
          placeholder="Entrer le topic MQTT"
          value={topic}
          onChangeText={setTopic}
        />

        <Button title="Envoyer la température" onPress={sendTemperature} />
      </View>


      {/* Liste des messages */}
      {messages.map((message, index) => (
        <View key={index} style={styles.messageContainer}>
          <Text style={styles.timestamp}>
            Time: {new Date(message.timestamp).toLocaleString()}
          </Text>
          <View style={styles.dataContainer}>
            <Text style={styles.data}>
              Temperature: {message.temperature.toFixed(2)}°C
            </Text>
          </View>
        </View>
      ))}


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    padding: 10,
  },
  messageContainer: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  timestamp: {
    fontSize: 16,
    marginBottom: 5,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 20,
    padding: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
