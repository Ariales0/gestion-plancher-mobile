import { Button, View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <View style={styles.horizontalContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Thermostats')}>
        <Text style={styles.item}>Thermostats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Réglages')}>
        <Text style={styles.item}>Réglages</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  horizontalContainer: {
    flexDirection: 'row', 
    marginTop: 10, 
  },
  item: {
    fontSize: 24, 
    marginHorizontal: 10, 
    color: 'blue',
  },
});

export default Login