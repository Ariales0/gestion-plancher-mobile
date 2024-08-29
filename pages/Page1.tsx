import { Button, View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Page1 = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text>J'ai fait ma première app react native !</Text>
      <Button
        title="Viens voir ce que j'ai réalisé"
        onPress={() => navigation.navigate('Page2')} // Navigue vers Page2
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

export default Page1