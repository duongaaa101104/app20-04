import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="_ _ _ _"
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={setCode}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
<TouchableOpacity 
  style={styles.nextButton}
  onPress={() => {
    if (code.length === 4) {
      navigation.navigate('LocationScreen'); // ✅ Chuyển tiếp khi đủ 4 số
    } else {
      alert('Please enter a 4-digit code');  // ⚠️ Thông báo nếu chưa đủ
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
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 10,
  },
  resendText: {
    fontSize: 16,
    color: 'green',
    marginBottom: 30,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  nextButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default VerificationScreen;