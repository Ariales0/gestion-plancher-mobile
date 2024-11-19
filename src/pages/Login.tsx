import React, { useState, useEffect, useContext  } from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../services/api'; // Importez la fonction loginUser
import { AuthContext } from '../context/AuthContext'; // Importez votre AuthContext


const Login = () => {
  const navigation = useNavigation();
  const { authState } = useContext(AuthContext); // Récupérez l'état d'authentification depuis le contexte

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Réinitialiser les champs si l'utilisateur se déconnecte
  useEffect(() => {
    if (!authState) {
      setUsername('');
      setPassword('');
    }
  }, [authState]);


  // Fonction pour vérifier les informations de connexion
  const handleLogin = async () => {
    try {
      const response = await loginUser({ Email: username, Password: password }); // Appel à la fonction loginUser

      // Console logs pour vérifier la réponse de l'API et les informations de connexion
      //console.log('Login response:', response);
      //console.log('Tentative de connexion avec:', { username, password });
      //console.log('Réponse de l\'API:', response);

      if (response.token) { // Assurez-vous que la réponse contient le token
        // Stocker le jeton d'authentification dans le stockage sécurisé
        await AsyncStorage.setItem('token', response.token);
        await AsyncStorage.setItem('username', username);
        navigation.navigate('Thermostats', { username });
      } else {
        Alert.alert('Erreur', response.msg || 'Identifiants incorrects.');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue, vérifier vos données saisies.');
      console.error(error); 
    }
  };

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image source={require('../assets/images/Banner.png')} 
          style={styles.bannerImage}
          resizeMode='contain' />
      </View>
      <View style={styles.loginContainer}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>Veuillez vous connecter avec votre compte.</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Saissisez votre nom d'utilisateur" value={username} onChangeText={setUsername} />
          <TextInput style={styles.input} placeholder="Saissisez votre mot de passe" secureTextEntry value={password} onChangeText={setPassword} />
        </View>
        <View style={styles.boutonChoix}>
          <TouchableOpacity 
            style={[styles.button, {marginRight: 10}]}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Identifiant</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Créer un compte</Text>
          </TouchableOpacity>
        </View>

      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.topbar} />
        <Text style={styles.footerText}>Version: 1.01</Text>
      </View>
    </View>
  );
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
    height: 600,
    width: '75%',
    alignContent: 'center',
    justifyContent: 'center',
  },

  boutonChoix: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  inputContainer:{
  },
  input: {
    fontSize: 15,
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
  buttonRegister: {
    backgroundColor: '#c8c8c8', 
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    marginTop: 30
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 13,
    height: 22,
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

export default Login;