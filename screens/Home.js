import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, Alert, Image, Pressable, StyleSheet } from 'react-native';
import { validateEmail } from '../utils';
const Home = ({ navigation }) => {


  const [email, setEmail] = React.useState('');
  const [validEmail, setValidEmail] = React.useState(false);
  const onsubmit = () => {
    if (validateEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  return (<SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Subscribe to our newsletter for the latest delicious recipes!</Text>
      <TextInput style={styles.textInput} placeholder="Enter your email address"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (validateEmail(text)) {
            setValidEmail(true);
          }
          else {
            setValidEmail(false);
          }
        }}
        autoCapitalize="none" autoCorrect={false}
        placeholderTextColor="grey"
        returnKeyType="done"
        keyboardType="email-address"
      />
    </View>
    <Pressable
      style={styles.button(validEmail)}
      disabled={!validEmail}
      onPress={() => Alert.alert('Thank you for subscribing to our newsletter. Stay tuned!')}>
      <Text style={styles.buttonText}>Subscribe</Text>
    </Pressable>


  </SafeAreaView>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',

  },
  textContainer: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: 'grey',
  },
  textInput: {

    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',

  },
  button: (validEmail) => ({
    backgroundColor: validEmail ? 'green' : 'grey',
    borderRadius: 10,
    width: "80%",
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0
  }),
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Home;
