import { Button, View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Thermostats = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.item}>Login</Text>
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
    flexDirection: 'row', // Aligner les éléments horizontalement
    marginTop: 10, // Ajouter un espace en bas pour séparer du bouton
  },
  item: {
    fontSize: 24, // Taille de la police
    marginHorizontal: 10, // Espace vertical entre les éléments
    color: 'blue',
  },
});

export default Thermostats