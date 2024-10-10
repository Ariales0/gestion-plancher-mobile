import { Button, View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext'; // Importez AuthContext

type RootStackParamList = {
  Thermostats: { username: string };
};

type ThermostatsScreenRouteProp = RouteProp<RootStackParamList, 'Thermostats'>;

const Thermostats = () => {
  const route = useRoute<ThermostatsScreenRouteProp>();
  const navigation = useNavigation();
  const { handleLogout } = useContext(AuthContext);

  const { username } = route.params || { username: 'utilisateur inconnu' };
  
  const thermostatId = '1392250';
  const thermostatName = 'bain';

  const handlePress = () => {
    Alert.alert(
      'Confirmer la suppression',
      `Êtes-vous certain de vouloir supprimer le thermostat ${thermostatName} avec l'ID: ${thermostatId}?`,
      [
        {
          text: 'Annuler',
          onPress: () => console.log(`Suppression du ${thermostatName} avec l'ID: ${thermostatId} Annulé`),
          style: 'cancel',
        },
        {
          text: 'Supprimer',
          onPress: () => {
            console.log('Supprimé');
            // Placez ici la logique de suppression
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleLogoutPress = async () => {
    await handleLogout();
    navigation.navigate('Login');
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
          <TouchableOpacity onPress={() => navigation.navigate('Thermostats')}>
            <Text style={styles.headerThermostats}>THERMOSTATS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Réglages')}>
            <Text style={styles.headerReglage}>| RÉGLAGES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerBienvenue}>Bienvenue, {username}</Text>
          <TouchableOpacity onPress={handleLogoutPress}>
            <Text style={styles.headerDeconnection}>| Se déconnecter</Text>
          </TouchableOpacity>
        </View>
        {/* Barre horizontale sous le header */}
        <View style={styles.headerBar1} />
        <View style={styles.headerBar2} />
      </View>
      <View style={styles.thermostatsContainer}>
        <Image source={require('../assets/images/Thermostats-23.5.png')} />
        <View style={styles.infoThermostats}>
          <View style={styles.nomDelete}>
            <Text style={styles.text}>{thermostatName}</Text>
            <TouchableOpacity onPress={handlePress}>
              <Icon name="trash" size={30} color="#bababa" />
            </TouchableOpacity>
          </View>
          <View style={styles.barre} />
          <View style={styles.nomDelete}>
            <Text style={styles.text}>
              ID Thermostat: <Text>{thermostatId}</Text>
            </Text>
          </View>
        </View>
      </View>
      
      {/* Footer */}
      <View style={styles.footer}>
          <View style={styles.topbar}/>
        <Text style={styles.footerText} >Version: 1.01</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
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
    color: '#F78D1F',
    fontSize: 10,
    fontWeight: 'bold',
  },
  headerReglage:{
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  headerRight:{
    flexDirection: 'row',
    marginTop: 10,
  },
  headerBienvenue:{
    marginRight: 5,
    fontSize: 10,
    fontWeight: 'bold',
  },
  headerDeconnection: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  headerBar1: {
    height: 4,
    backgroundColor: '#F78D1F',
    width: '82%',
    marginTop: 25,
    marginLeft: -365,
    marginRight: -10,
  },
  headerBar2: {
    height: 6,
    backgroundColor: '#F78D1F',
    width: '100%',
    marginTop: 50,
    marginLeft: -440,
  },
  thermostatsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -800,
  },
  infoThermostats: {
    width: '100%',
    marginLeft: '35%',
    alignItems: 'flex-start',
  },
  nomDelete: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
  },
  text: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  barre: {
    alignItems: 'center',
    width: '60%',
    height: 2,
    backgroundColor: '#bababa',
    marginBottom: 5,
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

export default Thermostats