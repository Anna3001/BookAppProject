// GetByTDForm.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { getByTD } from '../viewModels/getByTDViewModel';
import * as Font from 'expo-font';
import { useFonts } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { ThemeContext } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import translations from '../translations'; // Import translations
import { commonStyles, darkModeStyles, movieDetailsStyles } from '../styles/style';

const GetByTDForm = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);
  const theme = React.useContext(ThemeContext);
  const { currentLanguage } = useLanguage();

  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/LatoRegular400.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  const handleSubmit = async () => {
    const moviesContainer = await getByTD(title, director);

    if (moviesContainer && moviesContainer.length > 0) {
      setMovieDetails(moviesContainer[0]);
    } else {
      setMovieDetails(null);
    }
  };

  return (
    <View contentContainerStyle={[commonStyles.container, theme.isDarkMode && darkModeStyles.darkModeContainer]}>
      <Text style={[commonStyles.title, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].getByTDForm}
      </Text>

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].getTitle}
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].getDirector}
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        value={director}
        onChangeText={(text) => setDirector(text)}
      />

      <TouchableOpacity onPress={handleSubmit} style={[commonStyles.styleBtn, theme.isDarkMode && darkModeStyles.darkModeButton]}>
        <Text style={[commonStyles.buttonText, theme.isDarkMode && darkModeStyles.darkModeText]}>
          {translations[currentLanguage].getButton}
        </Text>
      </TouchableOpacity>

      {movieDetails && (
        <View style={[movieDetailsStyles.movieDetailsContainer, theme.isDarkMode && movieDetailsStyles.darkModeMovieDetails]}>
          <Text style={[movieDetailsStyles.movieDetail, theme.isDarkMode && movieDetailsStyles.darkModeText]}>
            {`${translations[currentLanguage].country}: ${movieDetails.country}`}
          </Text>
          <Text style={[movieDetailsStyles.movieDetail, theme.isDarkMode && movieDetailsStyles.darkModeText]}>
            {`${translations[currentLanguage].date}: ${movieDetails.date}`}
          </Text>
        </View>
      )}
    </View>
  );
};

export default GetByTDForm;
