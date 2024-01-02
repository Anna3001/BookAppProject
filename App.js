import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Authorization from './.shared/loginAPI';
import AuthForm from './views/AuthForm';
import Home from './Home';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(Authorization.isToken());

  useEffect(() => {
    console.log('App component mounted');
  }, []);

  useEffect(() => {
    console.log('Token changed:', token);
  }, [token]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent token={token} setToken={setToken} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function AppContent({ token, setToken }) {
  const theme = React.useContext(ThemeContext);
  const language = useLanguage();

  return (
    <View style={[styles.container, theme.isDarkMode && styles.darkModeContainer]}>
      {token ? (
        <Home />
      ) : (
        <AuthForm setToken={setToken} theme={theme} language={language} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf3f3', // Default background color for light mode
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkModeContainer: {
    backgroundColor: '#342056', // Dark mode background color
  },
});