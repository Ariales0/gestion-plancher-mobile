import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';


const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ThermostatInterface = () => {
  const [temperature, setTemperature] = useState(22);
  const [activeRoom, setActiveRoom] = useState(roomData[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [username, setUsername] = useState('utilisateur inconnu');
  const navigation = useNavigation();
  const { handleLogout } = useContext(AuthContext);

  // Charger le username depuis AsyncStorage
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Erreur lors du chargement du username depuis AsyncStorage:', error);
      }
    };

    fetchUsername();
  }, []);


  const incrementTemperature = () => {
    setTemperature(prev => prev + 1);
  };

  const decrementTemperature = () => {
    setTemperature(prev => Math.max(10, prev - 1));
  };

  const handleLogoutPress = async () => {
    await handleLogout();
    navigation.navigate('Login');
  };


  const handleDeleteRoom = () => {
    Alert.alert(
      'Confirmer la suppression',
      `Êtes-vous certain de vouloir supprimer le thermostat ${activeRoom.name} avec l'ID: ${activeRoom.id}?`,
      [
        {
          text: 'Annuler',
          onPress: () => console.log(`Suppression du ${activeRoom.name} avec l'ID: ${activeRoom.id} Annulé`),
          style: 'cancel',
        },
        {
          text: 'Supprimer',
          onPress: () => {
            console.log(`Suppression du ${activeRoom.name} avec l'ID: ${activeRoom.id}`);
            // Logique de suppression à implémenter
          },
        },
      ],
      { cancelable: true }
    );
  };

  // Diviser les rooms en pages de 10 (2 lignes de 5)
  const roomPages = [];
  for (let i = 0; i < roomData.length; i += 10) {
    roomPages.push(roomData.slice(i, i + 10));
  }

  const renderRoomGrid = (rooms) => (
    <View style={styles.roomGrid}>
      {rooms.map((room) => (
        <TouchableOpacity 
          key={room.id}
          style={[
            styles.roomItem, 
            activeRoom.id === room.id && styles.activeRoomItem
          ]}
          onPress={() => setActiveRoom(room)}
        >
          <Text style={styles.roomIcon}>{room.icon}</Text>
          <Text style={[
            styles.roomName, 
            activeRoom.id === room.id && styles.activeRoomName
          ]}>
            {room.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );



  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/logo-noBg.png')}
          style={styles.headerImage}
          resizeMode='contain'
        />
        <View style={styles.headerText}>
          <TouchableOpacity onPress={() => navigation.navigate('Thermostat')}>
            <Text style={styles.headerThermostats}>THERMOSTATS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Reglages')}>
            <Text style={styles.headerReglage}>| RÉGLAGES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerText}>
          <TouchableOpacity onPress={handleLogoutPress}>
            <Text style={styles.headerDeconnection}>| Se déconnecter</Text>
          </TouchableOpacity>
        </View>
        
        {/* Barre horizontale sous le header */}
        <View style={styles.headerBar1} />
        <View style={styles.headerBar2} />
        <View>
          <View >
            <Text style={styles.headerBienvenue}>Bienvenue, {username}</Text>
          </View>
        </View>
      </View>
      {/* Fin Section Header */}



      {/* Liste des pièces */}
      <View style={styles.roomListContainer}>
        {renderRoomGrid(roomPages[currentPage])}
        
        {/* Indicateur de page */}
        {roomPages.length > 1 && (
          <View style={styles.pageIndicatorContainer}>
            {roomPages.map((_, index) => (
              <View 
                key={index} 
                style={[
                  styles.pageIndicator,
                  currentPage === index && styles.activePageIndicator
                ]}
              />
            ))}
          </View>
        )}
      </View>

      {/* Thermostat */}
      <View style={styles.thermostatContainer}>
        <TouchableOpacity 
          style={styles.temperatureButton} 
          onPress={incrementTemperature}
        >
          <View style={styles.triangleUp} />
        </TouchableOpacity>

        <View style={styles.temperatureDisplay}>
          <View style={styles.roomHeader}>
            <Text style={styles.temperatureText}>
              {temperature}°C
            </Text>
            <TouchableOpacity onPress={handleDeleteRoom}>
              <Icon name="trash" size={24} color="#bababa" />
            </TouchableOpacity>
          </View>
          <Text style={styles.roomDisplayText}>
            {activeRoom.name}
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.temperatureButton} 
          onPress={decrementTemperature}
        >
          <View style={styles.triangleDown} />
        </TouchableOpacity>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
          <View style={styles.topbar}/>
        <Text style={styles.footerText} >Version: 1.01</Text>
      </View>
    </View>
  );
};

// Données de la liste (exemple)
const roomData = [
  { id: '1', name: 'Salle de Bain', icon: '🚿' },
  { id: '2', name: 'Salon', icon: '🛋️' },
  { id: '3', name: 'Chambre', icon: '🛏️' },
  { id: '4', name: 'Cuisine', icon: '🍳' },
  { id: '5', name: 'Bureau', icon: '💻' },
  { id: '6', name: 'Garage', icon: '🚗' },
  { id: '7', name: 'Cave', icon: '🍷' },
  { id: '8', name: 'Grenier', icon: '📦' },
  { id: '9', name: 'Jardin', icon: '🌳' },
  { id: '10', name: 'Terrasse', icon: '☀️' },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: '13%',
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
    marginTop: 35,
    //marginRight: 155,
    marginLeft: -90,
  },
  headerBienvenue:{
    marginTop: 55,
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
    width: '100%',
    marginTop: 25,
    marginLeft: -265,

  },
  headerBar2: {
    height: 6,
    backgroundColor: '#F78D1F',
    width: '100%',
    marginTop: 50,
    marginLeft: -440,
    marginRight: -200,
  },
  thermostatsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -420,
  },
  thermostatImage: {
    width: 150, // Largeur désirée
    height: 250, // Hauteur désirée
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




  roomListContainer: {
    paddingVertical: 10,
  },
  roomGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  roomItem: {
    width: SCREEN_WIDTH / 5 - 10, // 5 rooms par ligne
    height: 100,
    backgroundColor: '#e0e0e0',
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  activeRoomItem: {
    backgroundColor: '#F78D1F',
  },
  roomIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  roomName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  activeRoomName: {
    color: 'white',
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  pageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#cccccc',
    marginHorizontal: 5,
  },
  activePageIndicator: {
    backgroundColor: '#4a4a4a',
  },
  thermostatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },
  temperatureButton: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperatureDisplay: {
    alignItems: 'center',
  },
  roomHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
    marginRight: 20,
  },
  roomDisplayText: {
    fontSize: 18,
    color: '#666',
  },
  triangleUp: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 25,
    borderBottomWidth: 40,
    borderLeftWidth: 25,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#4a4a4a',
    borderLeftColor: 'transparent',
  },
  triangleDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 40,
    borderRightWidth: 25,
    borderBottomWidth: 0,
    borderLeftWidth: 25,
    borderTopColor: '#4a4a4a',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
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

export default ThermostatInterface;