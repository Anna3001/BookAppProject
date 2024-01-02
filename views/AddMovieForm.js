// AddMovieForm.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { addMovie } from '../viewModels/addMovieViewModel.js';
import { MovieModel } from '../models/movieModel.js';
import * as Font from 'expo-font';
import { ThemeContext } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import translations from '../translations'; // Import translations
import { commonStyles, darkModeStyles } from '../styles/style';

const AddMovieForm = () => {
  const movie = new MovieModel({});
  const theme = React.useContext(ThemeContext);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    Font.loadAsync({
      LatoRegular: require('../assets/fonts/LatoRegular400.ttf'),
    });
  }, []);

  const handleSubmit = () => {
    addMovie(movie);
    console.log(movie);
  };

  return (
    <View contentContainerStyle={[commonStyles.container, theme.isDarkMode && darkModeStyles.darkModeContainer]}>
      <Text style={[commonStyles.title, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].addMovie}
      </Text>

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].titleLabel}
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setTitle(text)}
      />

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].directorLabel}
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setDirector(text)}
      />

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].countryLabel}
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setCountry(text)}
      />

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].dateLabel}
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        onChangeText={(text) => movie.setDate(text)}
      />

      <TouchableOpacity onPress={handleSubmit} style={[commonStyles.styleBtn, theme.isDarkMode && darkModeStyles.darkModeButton]}>
        <Text style={[commonStyles.buttonText, theme.isDarkMode && darkModeStyles.darkModeText]}>
          {translations[currentLanguage].addButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMovieForm;
