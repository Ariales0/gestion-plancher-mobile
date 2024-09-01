import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Routes from './src/route';

function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
};

export default App;

