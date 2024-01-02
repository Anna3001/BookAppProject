// GetAllMovies.js
import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { getAll } from '../viewModels/getAllMoviesViewModel.js';
import * as Font from 'expo-font';
import { ThemeContext } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import translations from '../translations'; // Import translations
import { commonStyles, darkModeStyles } from '../styles/style';

const GetAllMovies = () => {
  const start = 0;
  const theme = React.useContext(ThemeContext);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    Font.loadAsync({
      LatoRegular: require('../assets/fonts/LatoRegular400.ttf'),
    });
  }, []);

  const handleSubmit = () => {
    getAll(start);
    console.log('GetAllMovies');
  };

  return (
    <View contentContainerStyle={[commonStyles.container, theme.isDarkMode && darkModeStyles.darkModeContainer]}>
      <Text style={[commonStyles.title, theme.isDarkMode && darkModeStyles.darkModeText]}>
        {translations[currentLanguage].getAllMovies}
      </Text>

      {/* <TouchableOpacity onPress={handleSubmit} style={[commonStyles.styleBtn, theme.isDarkMode && darkModeStyles.darkModeButton]}>
        <Text style={[commonStyles.buttonText, theme.isDarkMode && darkModeStyles.darkModeText]}>
          {translations[currentLanguage].submitButton}
        </Text>
      </TouchableOpacity> */}

    </View>
  );
};

export default GetAllMovies;
