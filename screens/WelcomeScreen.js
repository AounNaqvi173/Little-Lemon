import * as React from 'react';
import { SafeAreaView, View, Text, Image, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/little-lemon-logo.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to Little Lemon, Your Local Bistro!</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageContainer: {

    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',

  },
  textContainer: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: "80%",
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

});




export default WelcomeScreen;
