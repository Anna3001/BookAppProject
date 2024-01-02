// GetById.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getById } from '../viewModels/getByIdViewModel';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ThemeContext } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import translations from '../translations'; // Import translations
import { commonStyles, darkModeStyles } from '../styles/style';

const GetById = () => {
  const [id, setId] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);
  const theme = React.useContext(ThemeContext);
  const { currentLanguage, changeLanguage } = useLanguage();

  const [fontsLoaded] = useFonts({
    'LatoRegular': require('../assets/fonts/LatoRegular400.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleSubmit = async () => {
    const moviesContainer = await getById(id);

    if (moviesContainer && moviesContainer.length > 0) {
      setMovieDetails(moviesContainer[0]);
    } else {
      setMovieDetails(null);
    }
  };

  return (
    <View contentContainerStyle={[commonStyles.container, theme.isDarkMode && darkModeStyles.darkModeContainer]}>
      <Text style={[commonStyles.title, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].getById}
      </Text>

      <Text style={[commonStyles.label, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].getID}:
      </Text>
      <TextInput
        style={[commonStyles.input, theme.isDarkMode && darkModeStyles.darkModeInput]}
        value={id}
        onChangeText={(text) => setId(text)}
      />

      <TouchableOpacity onPress={handleSubmit} style={[commonStyles.styleBtn, theme.isDarkMode && darkModeStyles.darkModeButton]}>
        <Text style={[commonStyles.buttonText, theme.isDarkMode && darkModeStyles.darkModeText]}>
          {translations[currentLanguage].getButton}
        </Text>
      </TouchableOpacity>

      {movieDetails && (
        <View style={[styles2.movieDetailsContainer, theme.isDarkMode && styles2.darkModeDetailsContainer]}>
          <Text style={[styles2.movieDetail, theme.isDarkMode && styles2.darkModeText]}>
            {`${translations[currentLanguage].getTitle}: ${movieDetails.title}`}
          </Text>
          <Text style={[styles2.movieDetail, theme.isDarkMode && styles2.darkModeText]}>
            {`${translations[currentLanguage].getDirector}: ${movieDetails.director}`}
          </Text>
          <Text style={[styles2.movieDetail, theme.isDarkMode && styles2.darkModeText]}>
            {`${translations[currentLanguage].getCountry}: ${movieDetails.country}`}
          </Text>
          <Text style={[styles2.movieDetail, theme.isDarkMode && styles2.darkModeText]}>
            {`${translations[currentLanguage].getDate}: ${movieDetails.date}`}
          </Text>
        </View>
      )}
    </View>
  );
};

export default GetById;
