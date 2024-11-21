import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../services/api'; // Importer la fonction registerUser

const Register = () => {
  const navigation = useNavigation();
  
  // États pour stocker les valeurs des champs de formulaire
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer l'enregistrement de l'utilisateur
  const handleRegister = async () => {
    const userData = {
      FirstName: firstName,
      LastName: lastName,
      Address: address,
      City: city,
      State: state,
      Zip: zip,
      Country: country,
      Email: email,
      Password: password,
    };

    try {
      const response = await registerUser(userData);
      Alert.alert('Succès', response.message);
      navigation.navigate('Thermostats');
    } catch (error) {
      console.error('Erreur d\'enregistrement:', error);
      // Vérifie si error.response existe pour extraire le message d'erreur
      const errorMessage = error.response && error.response.data && error.response.data.error
        ? error.response.data.error
        : 'Erreur lors de l\'enregistrement.';
      
      Alert.alert('Erreur', errorMessage); // Affiche le message d'erreur
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/logo-noBg.png')}
          style={styles.headerImage}
          resizeMode='contain'
        />
        <View style={styles.headerText}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.headerThermostats}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.headerReglage}>| </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerBar1}/>
      </View>

      {/* Formulaire */}
      <View style={styles.formContainer}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 20, marginLeft: 10}}>Veuillez remplir ces champs</Text>
        
        {/* Champ Prénom */}
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput 
              style={styles.input} 
              placeholder="Prénom" 
              value={firstName} // Lier l'état
              onChangeText={setFirstName} // Mettre à jour l'état
            />
            <Text style={styles.textUnderInput}>Prénom</Text>
          </View>
          <View style={styles.inputEspacement}>
            <TextInput 
              style={[styles.input]} 
              placeholder="Nom de famille" 
              value={lastName} // Lier l'état
              onChangeText={setLastName} // Mettre à jour l'état
            />
            <Text style={styles.textUnderInput}>Nom de famille</Text>
          </View>
        </View>

        {/* Champ Adresse */}
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput 
              style={styles.input} 
              placeholder="Rue" 
              value={address} // Lier l'état
              onChangeText={setAddress} // Mettre à jour l'état
            />
            <Text style={styles.textUnderInput}>Rue</Text>
          </View>
        </View>

        {/* Champ Ville, État et Code Postal */}
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput 
              style={styles.input} 
              placeholder="Ville" 
              value={city} // Lier l'état
              onChangeText={setCity} // Mettre à jour l'état
            />
            <Text style={styles.textUnderInput}>Ville</Text>
          </View>
          <View style={styles.inputEspacement}>
            <TextInput 
              style={[styles.input]} 
              placeholder="État/Province" 
              value={state} // Lier l'état
              onChangeText={setState} // Mettre à jour l'état
            />
            <Text style={styles.textUnderInput}>État/Province</Text>
          </View>
          <View style={styles.inputEspacement}>
            <TextInput 
              style={[styles.input]} 
              placeholder="Z2X 1Y3" 
              value={zip} // Lier l'état
              onChangeText={setZip} // Mettre à jour l'état
            />
            <Text style={styles.textUnderInput}>Code postal/Zip</Text>
          </View>
        </View>



        {/* Champ Courriel et Mot de passe */}
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput 
              style={styles.input} 
              placeholder="Courriel" 
              value={email} // Lier l'état
              onChangeText={setEmail} // Mettre à jour l'état
            />
            <Text style={styles.textUnderInput}>Courriel</Text>
          </View>
          <View style={styles.inputEspacement}>
            <TextInput 
              style={[styles.input]} 
              placeholder="Mot de passe" 
              secureTextEntry // Ajoutez secureTextEntry pour cacher le mot de passe
              value={password} // Lier l'état
              onChangeText={setPassword} // Mettre à jour l'état
            />
            <Text style={styles.textUnderInput}>Mot de passe</Text>
          </View>
        </View>

      {/* Boutons */}
      <View style={styles.boutonChoix}>
        <TouchableOpacity 
          style={[styles.button, { marginRight: 10 }]} 
          onPress={handleRegister} // Appeler handleRegister lors de l'appui
        >
          <Text style={styles.buttonText}>Créer</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonGris} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Annuler</Text>
        </TouchableOpacity>
      </View>

      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.topbar}/>
        <Text style={styles.footerText}>Version: 1.01</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start', 
  },
  headerImage: {
    width: 80, 
    height: 80, 
    marginTop: -15,
  },
  headerText: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  headerThermostats: {
    marginRight: 5,
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  headerReglage:{
    color: '#F78D1F',
    fontSize: 10,
    fontWeight: 'bold',
  },
  headerBar1: {
    height: 4,
    backgroundColor: '#F78D1F',
    width: '84%',
    marginTop: 25,
    marginLeft: -365,
    marginRight: -10,
  },
  formContainer: {
    width: '80%',
    marginTop: 10,
    },
  inputContainer:{
    flexDirection: 'row',
    width: '100%',
  },
  inputEspacement:{
    flex: 1, 
    marginLeft: 10 , 
    marginBottom: 40
  },
  input: {
    flex: 1,
    fontSize: 12,
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#a0a0a0',
    padding: 5,
    paddingLeft: 10,
    minHeight: 40,
    marginBottom: 10,
  },
  inputSpacing:{
    marginLeft: 10,
  },
  textUnderInput: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginTop: -12, 
  },
  boutonChoix: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#F78D1F',
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    marginLeft: 10,
    marginTop: 0
  },
  buttonGris: {
    backgroundColor: '#c8c8c8', 
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    width: '50%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    height: 22,
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

export default Register