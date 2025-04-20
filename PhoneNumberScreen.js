import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const PhoneNumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Enter your mobile number</Text>
      <View style={styles.inputContainer}>
        <Image source={require('./assets/nuoc.png')} style={styles.flag} />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => {
          if (text.length <= 10) setPhoneNumber(text); // Giới hạn 10 số
          }}
          onFocus={() => setKeyboardVisible(true)}
          onBlur={() => setKeyboardVisible(false)}
        />
      </View>
      <TouchableOpacity 
      style={[styles.nextButton, isKeyboardVisible ? styles.nextButtonKeyboardVisible : null]}
      onPress={() => {
      if (phoneNumber.length === 10) {
      navigation.navigate('VerificationScreen', { phone: phoneNumber });
      } else {
      alert("Please enter a valid 10-digit phone number.");
      }
      }}
      >
  <Text style={styles.nextButtonText}>{'>'}</Text>
</TouchableOpacity>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  flag: {
    width: 28,
    height: 18,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    position: 'absolute',
    bottom: 30,
  },
  nextButtonKeyboardVisible: {
    position: 'absolute',
    bottom: '10%',
    right: 10,
  },
  nextButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PhoneNumberScreen;
