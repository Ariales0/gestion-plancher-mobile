import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Login from '../pages/Login';
import Thermostats from '../pages/Thermostats';
import Réglages from '../pages/Réglages';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator /*screenOptions={{headerShown: false}}*/ initialRouteName="Accueil">
        <Stack.Screen name="Page1" component={Page1} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Page2" component={Page2} options={{ title: 'Page 2' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Thermostats" component={Thermostats} options={{ title: 'Thermostats' }} />
        <Stack.Screen name="Réglages" component={Réglages} options={{ title: 'Réglages' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
