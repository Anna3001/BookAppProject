
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { registerUser, login } from "../viewModels/authFormViewModel.js"
import translations from '../translations'; 
import { commonStyles, darkModeStyles } from '../styles/style';
import { ThemeContext } from '../ThemeContext';
import { useLanguage } from '../LanguageContext'; 
import { useFonts } from '@expo-google-fonts/lato';
import lightmode from '../assets/lightmode.png';
import darkmode from '../assets/darkmode.png';
import poland from '../assets/poland.png';
import unitedkingdom from '../assets/unitedkingdom.png';

export const AuthForm = ({ setToken }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registrationData, setRegistrationData] = useState({ username: '', password: '' });
  const theme = React.useContext(ThemeContext);
  const { currentLanguage, changeLanguage } = useLanguage();

  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/LatoRegular400.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    console.log(loginData);
    const authStatus = await login(loginData);
    setToken(authStatus);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', registrationData);
    registerUser(registrationData);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={[styles.container, theme.isDarkMode && styles.darkModeContainer]}>
      <TouchableOpacity
            onPress={theme.toggleDarkMode}
           >
            <Image source={theme.isDarkMode ? darkmode : lightmode} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
           <TouchableOpacity
             onPress={changeLanguage}
          >
            <Image source={currentLanguage === 'en' ? unitedkingdom : poland}
              style={{ width: 50, height: 50 }}
            />
           </TouchableOpacity>
    <Text style={[commonStyles.title, theme.isDarkMode && darkModeStyles.darkModeText]}>
      {translations[currentLanguage].login}
    </Text>

    <TextInput
      style={[commonStyles.input2, theme.isDarkMode && darkModeStyles.darkModeInput]}
      placeholder={translations[currentLanguage].username}
      value={loginData.username}
      onChangeText={(text) => setLoginData({ ...loginData, username: text })}
    />

      <TextInput
        style={[commonStyles.input2, theme.isDarkMode && darkModeStyles.darkModeInput]}
        placeholder={translations[currentLanguage].password}
        value={loginData.password}
        secureTextEntry={true}
        onChangeText={(text) => setLoginData({ ...loginData, password: text })}
    />

    <TouchableOpacity onPress={handleLoginSubmit} style={[commonStyles.styleBtn, theme.isDarkMode && darkModeStyles.darkModeButton]}>
      <Text style={[commonStyles.buttonText, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].login}
      </Text>
    </TouchableOpacity>

    <Text style={[commonStyles.title, theme.isDarkMode && darkModeStyles.darkModeText]}>
      {translations[currentLanguage].register}
    </Text>

    <TextInput
      style={[commonStyles.input2, theme.isDarkMode && darkModeStyles.darkModeInput]}
      value={registrationData.username}
      placeholder={translations[currentLanguage].username}
      onChangeText={(text) => setRegistrationData({ ...registrationData, username: text })}
    />

    <TextInput
      style={[commonStyles.input2, theme.isDarkMode && darkModeStyles.darkModeInput]}
      value={registrationData.password}
      placeholder={translations[currentLanguage].password}
      onChangeText={(text) => setRegistrationData({ ...registrationData, password: text })}
    />

    <TouchableOpacity onPress={handleRegistrationSubmit} style={[commonStyles.styleBtn, theme.isDarkMode && darkModeStyles.darkModeButton]}>
      <Text style={[commonStyles.buttonText, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].register}
      </Text>
    </TouchableOpacity>
    <Text style={styles.marginUnderTable}></Text>
  </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  marginUnderTable: { paddingVertical: 30 },
  container: {
    flex: 1,
    backgroundColor: '#fdf3f3', // Default background color for light mode
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkModeContainer: {
    backgroundColor: '#342056', // Background color for dark mode
  },
  toggleButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginBottom: 10,
  },
  darkModeButton: {
    backgroundColor: '#777', // Color for dark mode
  },
  toggleButtonText: {
    color: '#fff',
  },
  languageButton: {
    padding: 10,
    backgroundColor: '#27ae60',
    borderRadius: 5,
    marginBottom: 10,
  },
  languageButtonText: {
    color: '#fff',
  },
});


export default AuthForm;