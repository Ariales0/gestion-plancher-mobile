import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from '../context/AuthContext';  
import Login from '../pages/Login';
import Register from '../pages/Register';
import Thermostats from '../pages/Thermostats';
import Réglages from '../pages/Réglages';
import Mqtt from '../pages/Mqtt';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator /*screenOptions={{headerShown: false}}*/ initialRouteName="Mqtt">
          <Stack.Screen name="Mqtt" component={Mqtt} options={{ title: 'Mqtt' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Créer un compte' }} />
          <Stack.Screen name="Thermostats" component={Thermostats} options={{ title: 'Thermostats' }} />
          <Stack.Screen name="Réglages" component={Réglages} options={{ title: 'Réglages' }} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Routes;
