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

      <View style={styles.horizontalContainer}>
      
      </View>
      {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.topbar}/>
        <Text style={styles.footerText} >Version: 1.01</Text>
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
  footer: {
    backgroundColor: '#C8C8C8',
    height: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,

  },
  topbar: {
    height: 5,
    backgroundColor: '#F78D1F',
    width: '120%',
    marginTop: -10,
    marginBottom: 10,
    marginRight: -20,
  },
  footerText: {
    color: '#FFF',
    fontSize: 18,
    marginTop: -5,
  },
});

export default Login