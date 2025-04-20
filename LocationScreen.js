import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon back

export default function LocationScreen() {
  const [zone, setZone] = useState('Banasree');
  const [area, setArea] = useState('');
  const navigation = useNavigation(); // Lấy navigation để điều hướng

  return (
    <SafeAreaView style={styles.container}>
      {/* Nút back ở góc trái */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('VerificationScreen')}
>
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what's happening in your area
      </Text>

      <Image
        source={require('./assets/illustration.png')} // Đường dẫn ảnh của bạn
        style={styles.image}
      />

      <Text style={styles.label}>Your Zone</Text>
      <RNPickerSelect
        onValueChange={value => setZone(value)}
        value={zone}
        placeholder={{ label: 'Select your zone', value: null }}
        items={[
          { label: 'Banasree', value: 'Banasree' },
          { label: 'Dhanmondi', value: 'Dhanmondi' },
        ]}
        style={pickerSelectStyles}
      />

      <Text style={styles.label}>Your Area</Text>
      <RNPickerSelect
        onValueChange={value => setArea(value)}
        value={area}
        placeholder={{ label: 'Types of your area', value: null }}
        items={[
          { label: 'Residential', value: 'Residential' },
          { label: 'Commercial', value: 'Commercial' },
        ]}
        style={pickerSelectStyles}
      />

  );
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
  <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 20,
    zIndex: 10,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
    marginTop: 16,
  },
  button: {
    marginTop: 32,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
  },
});
