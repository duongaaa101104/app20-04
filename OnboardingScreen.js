import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/bgr2.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Image source={require('./assets/carot1.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('SignInScreen')}>
          <Image source={require('./assets/button.png')} style={styles.buttonImage} />
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
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
  buttonImage: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
});

export default OnboardingScreen;
