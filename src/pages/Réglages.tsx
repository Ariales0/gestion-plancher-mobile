import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Réglages = ({ navigation }) => {
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
          {/* Barre horizontale sous le header */}
          <View style={styles.headerBar1}/>
      </View>
      {/* Formulaire */}
      <View style={styles.formContainer}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 20, marginLeft: 10}} >Données d'Utilisateur</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput style={styles.input} placeholder="Prénom" />
            <Text style={styles.textUnderInput}>Prénom</Text>
          </View>
          <View style={styles.inputEspacement}>
            <TextInput style={[styles.input]} placeholder="Nom de famille" />
            <Text style={styles.textUnderInput}>Nom de famille</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput style={styles.input} placeholder="Rue" />
            <Text style={styles.textUnderInput}>Rue</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput style={styles.input} placeholder="Ville" />
            <Text style={styles.textUnderInput}>Ville</Text>
          </View>
          <View style={styles.inputEspacement}>
            <TextInput style={[styles.input]} placeholder="État/Province" />
            <Text style={styles.textUnderInput}>État/Province</Text>
          </View>
          <View style={styles.inputEspacement}>
            <TextInput style={[styles.input]} placeholder="Z2X 1Y3" />
            <Text style={styles.textUnderInput}>Code postal/Zip</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput style={styles.input} placeholder="Pays" />
            <Text style={styles.textUnderInput}>Pays</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputEspacement}>
            <TextInput style={styles.input} placeholder="Courriel" />
            <Text style={styles.textUnderInput}>Courriel</Text>
          </View>
          <View style={styles.inputEspacement}>
            <TextInput style={[styles.input]} placeholder="Mot de passe" />
            <Text style={styles.textUnderInput}>Mot de passe</Text>
          </View>
        </View>
        <View style={styles.boutonChoix}>
          <TouchableOpacity 
            style={[styles.button, {marginRight: 10}]}
            onPress={() => navigation.navigate('Thermostats')}>
            <Text style={styles.buttonText}>Sauvegarder</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonGris}
            onPress={() => navigation.navigate('Thermostats')}>
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
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