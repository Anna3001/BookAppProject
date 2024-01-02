// UpdateMovieForm.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MovieModel } from '../models/movieModel.js';
import { updateMovie } from '../viewModels/updateMovieViewModel.js';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ThemeContext } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import translations from '../translations'; // Import translations
import { commonStyles, darkModeStyles } from '../styles/style';

const UpdateMovieForm = () => {
  const movie = new MovieModel({});
  const theme = React.useContext(ThemeContext);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    Font.loadAsync({
      LatoRegular: require('../assets/fonts/LatoRegular400.ttf'),
    });
  }, []);

  const [fontsLoaded] = useFonts({
    'LatoRegular': require('../assets/fonts/LatoRegular400.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleSubmit = () => {
    console.log(movie);
    updateMovie(movie);
  };

  return (
    <View contentContainerStyle={[commonStyles.container, theme.isDarkMode && darkModeStyles.darkModeContainer]}>
      <Text style={[commonStyles.title, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].updateMovieForm}
      </Text>

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].getID}:
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setID(text)}
      />

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].title}:
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setTitle(text)}
      />

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].director}:
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setDirector(text)}
      />

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].country}:
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setCountry(text)}
      />

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].date}:
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setDate(text)}
      />

      <TouchableOpacity onPress={handleSubmit} style={[commonStyles.styleBtn, theme.isDarkMode && darkModeStyles.darkModeButton]}>
        <Text style={[commonStyles.buttonText, theme.isDarkMode && darkModeStyles.darkModeText]}>
          {translations[currentLanguage].updateButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateMovieForm;
