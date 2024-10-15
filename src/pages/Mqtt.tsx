import * as Paho from 'paho-mqtt';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// Définir le type des messages reçus
interface MessagePayload {
  timestamp: string;
  temperature: number;
  humidity: number;
}

export default function App() {
  // Le state avec des messages de type MessagePayload
  const [messages, setMessages] = useState<MessagePayload[]>([]);

  useEffect(() => {
    const client = new Paho.Client('172.16.5.201', 1883, 'applicationNative');
    
    client.connect({
      onSuccess() {
        client.subscribe('temp/objectif');
      },
    });

    client.onMessageArrived = (message: Paho.Message) => {
      try {
        const payload: MessagePayload = JSON.parse(message.payloadString);
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages, payload];
          return newMessages.length > 10 ? newMessages.slice(1) : newMessages;
        });
      } catch (error) {
        console.error('Invalid message payload:', error);
      }
    };

    return () => {
      client.disconnect();
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      {messages.map((message, index) => (
        <View key={index} style={styles.messageContainer}>
          <Text style={styles.timestamp}>
            Time: {new Date(message.timestamp).toLocaleString()}
          </Text>
          <View style={styles.dataContainer}>
            <Text style={styles.data}>
              Temperature: {message.temperature.toFixed(2)}°C
            </Text>
            <Text style={styles.data}>
              Humidity: {message.humidity.toFixed(2)}%
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
});
