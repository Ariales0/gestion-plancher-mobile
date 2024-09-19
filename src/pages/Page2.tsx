import { Button, View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Page2 = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Je deviens un pro =D </Text>
      <Button 
        title="Précédent" 
        onPress={() => navigation.navigate('Page1')} // Navigue vers Page1
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Page2