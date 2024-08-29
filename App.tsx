import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Page1" component={Page1} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Page2" component={Page2} options={{ title: 'Page 2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

