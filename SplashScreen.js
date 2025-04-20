import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingScreen'); // Chuyển sang màn hình chính
    }, 2000); // Hiển thị trong 2 giây
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/carot.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ABF4B', // Màu nền xanh lá
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Điều chỉnh kích thước logo
    height: 50,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
