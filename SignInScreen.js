import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/bgr3.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>Get your groceries with nectar</Text>
        <TouchableOpacity style={styles.inputContainer} onPress={()=>navigation.navigate('PhoneNumberScreen')}>
          <Image source={require('./assets/nuoc.png')} style={styles.flag} />
          <Text style={styles.input}>+880</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or connect with social media</Text>
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('./assets/google.png')} style={styles.googleButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('./assets/facebook.png')} style={styles.googleButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    top: 0,
  },
  overlay: {
    width: '100%',
    padding: 20,
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    marginBottom: 20,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  orText: {
    marginVertical: 10,
  },
  googleButton: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default SignInScreen;
