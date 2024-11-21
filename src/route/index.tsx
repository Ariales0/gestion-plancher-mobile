import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from '../context/AuthContext';  
import Login from '../pages/Login';
import Register from '../pages/Register';
import Reglages from '../pages/Reglages';
import Mqtt from '../pages/Mqtt';
import Thermostat from '../pages/Thermostat';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator /*screenOptions={{headerShown: false}}*/ initialRouteName="Mqtt">
          <Stack.Screen name="Mqtt" component={Mqtt} options={{ title: 'Mqtt' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Créer un compte' }} />
          <Stack.Screen name="Reglages" component={Reglages} options={{ title: 'Reglages' }} />
          <Stack.Screen name="Thermostat" component={Thermostat} options={{ title: 'Thermostat' }} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Routes;
