import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Routes from './src/route/index.tsx';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
        <StatusBar style="auto" />
      </AuthProvider>
    </>
  );
};

export default App;

