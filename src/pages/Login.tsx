import { Button, View, Text , TextInput, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image source={require('../assets/images/Banner.png')} 
        style={styles.bannerImage}
        resizeMode='contain'/>
      </View>
      <View style={styles.loginContainer}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 4}}>Veuillez vous connecter avec votre compte.</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Saissisez votre nom d'utilisateur" />
          <TextInput style={styles.input} placeholder="Saissisez votre mot de passe"
          secureTextEntry/>
        </View>
        {/* <button title="Identifiant" onPress={() => navigation.navigate('Thermostats')} />
         */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Thermostats')}>
          <Text style={styles.buttonText}>Identifiant</Text>
        </TouchableOpacity>
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
    // padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  banner: {
    width: '100%', 
    height: Dimensions.get('window').height *0.3,
    position: 'absolute',
    top: 0,
    marginTop: -55,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajuste l'image pour couvrir toute la bannière
  },
  loginContainer: {
    height: 800,
    width: '75%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
  },
  input: {
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e2e2e2',
    padding: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F78D1F',
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    marginTop: 30
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
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
    height: 4,
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