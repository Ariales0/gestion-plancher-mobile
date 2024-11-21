import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchUserData } from '../services/api'; // Fonction pour récupérer les données utilisateur
import AsyncStorage from '@react-native-async-storage/async-storage'; // Stockage des données utilisateur

const Réglages = () => {
  const navigation = useNavigation();

  // État pour les données utilisateur
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(true); // État de chargement

  // Charger les données utilisateur au démarrage
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const email = await AsyncStorage.getItem('username');
        if (!email) {
          Alert.alert('Erreur', 'Utilisateur non connecté.');
          setLoading(false);
          return;
        }
        const user = await fetchUserData(email); // Appel API
        setUserData({
          firstName: user.first_name || '',
          lastName: user.last_name || '',
          street: user.address || '',
          city: user.city || '',
          state: user.state || '',
          postalCode: user.zip || '',
          email: user.email || '',
          password: '', // Ne pas manipuler le mot de passe ici
        });
      } catch (error) {
        Alert.alert('Erreur', error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Gérer les changements dans les champs de texte
  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo-noBg.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <View style={styles.headerText}>
          <TouchableOpacity onPress={() => navigation.navigate('Thermostat')}>
            <Text style={styles.headerThermostats}>THERMOSTATS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Reglages')}>
            <Text style={styles.headerReglage}>| RÉGLAGES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerBar1} />
      </View>

      {/* Formulaire */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Données d'Utilisateur</Text>
        {!loading ? (
          <>
            <View style={styles.inputContainer}>
              <View style={styles.inputEspacement}>
                <TextInput
                  style={styles.input}
                  placeholder="Prénom"
                  value={userData.firstName}
                  onChangeText={(text) => handleInputChange('firstName', text)}
                />
                <Text style={styles.textUnderInput}>Prénom</Text>
              </View>
              <View style={styles.inputEspacement}>
                <TextInput
                  style={styles.input}
                  placeholder="Nom de famille"
                  value={userData.lastName}
                  onChangeText={(text) => handleInputChange('lastName', text)}
                />
                <Text style={styles.textUnderInput}>Nom de famille</Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputEspacement}>
                <TextInput
                  style={styles.input}
                  placeholder="Rue"
                  value={userData.street}
                  onChangeText={(text) => handleInputChange('street', text)}
                />
                <Text style={styles.textUnderInput}>Rue</Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputEspacement}>
                <TextInput
                  style={styles.input}
                  placeholder="Ville"
                  value={userData.city}
                  onChangeText={(text) => handleInputChange('city', text)}
                />
                <Text style={styles.textUnderInput}>Ville</Text>
              </View>
              <View style={styles.inputEspacement}>
                <TextInput
                  style={styles.input}
                  placeholder="État/Province"
                  value={userData.state}
                  onChangeText={(text) => handleInputChange('state', text)}
                />
                <Text style={styles.textUnderInput}>État/Province</Text>
              </View>
              <View style={styles.inputEspacement}>
                <TextInput
                  style={styles.input}
                  placeholder="Code postal"
                  value={userData.postalCode}
                  onChangeText={(text) => handleInputChange('postalCode', text)}
                />
                <Text style={styles.textUnderInput}>Code postal/Zip</Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputEspacement}>
                <TextInput
                  style={styles.input}
                  placeholder="Courriel"
                  value={userData.email}
                  editable={false} // Empêcher la modification
                />
                <Text style={styles.textUnderInput}>Courriel</Text>
              </View>
              <View style={styles.inputEspacement}>
                <TextInput
                  style={styles.input}
                  placeholder="Mot de passe"
                  value={userData.password}
                  secureTextEntry
                  onChangeText={(text) => handleInputChange('password', text)}
                />
                <Text style={styles.textUnderInput}>Mot de passe</Text>
              </View>
            </View>
            <View style={styles.boutonChoix}>
              <TouchableOpacity
                style={[styles.button, { marginRight: 10 }]}
                onPress={() => {
                  Alert.alert(
                    'Succès',
                    'Les données ont été sauvegardées !',
                    [
                      {
                        text: 'OK',
                        onPress: () => navigation.navigate('Thermostat'),
                      },
                    ],
                    { cancelable: false } // Empêche la fermeture sans interaction
                  );
                }}
              >
                <Text style={styles.buttonText}>Sauvegarder</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonGris}
                onPress={() => navigation.navigate('Thermostat')}
              >
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>Chargement des données...</Text>
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.topbar} />
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
    fontSize: 10,
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
    marginTop: 30
  },
  buttonGris: {
    backgroundColor: '#c8c8c8', 
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    marginTop: 30
  },

  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
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

export default Réglages