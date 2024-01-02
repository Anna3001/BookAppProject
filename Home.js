// App.js
import React, {useState} from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, StatusBar, Text, Image } from 'react-native';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { LanguageProvider, useLanguage } from './LanguageContext'; 

import AddMovieForm from './views/AddMovieForm';
import UpdateMovieForm from './views/UpdateMovieForm';
import DeleteMovieForm from './views/DeleteMovieForm';
import GetById from './views/GetById';
import GetByTDForm from './views/GetByTDForm';
import GetAllMovies from './views/GetAllMovies';
import TableView from './views/TableView';
import lightmode from './assets/lightmode.png';
import darkmode from './assets/darkmode.png';
import poland from './assets/poland.png';
import unitedkingdom from './assets/unitedkingdom.png';

const Home = () => {
  const theme = React.useContext(ThemeContext);
  const { currentLanguage, changeLanguage } = useLanguage();
  const [movies, setMovies] = useState([]);
  
  return (
  <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={[styles.container, theme.isDarkMode && styles.darkModeContainer]}>
           <StatusBar style="auto" />
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
  
          <AddMovieForm />
           <UpdateMovieForm />
          <DeleteMovieForm />
          <GetByTDForm />
           <GetById />
           <GetAllMovies />
           <TableView movies={movies} setMovies={setMovies}/>
        </View>
      </ScrollView>
     );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
      flexGrow: 1,
    },
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

export default Home;
















// export default function App() {
//   return (
//     <ThemeProvider>
//       <LanguageProvider>
//         <AppContent />
//       </LanguageProvider>
//     </ThemeProvider>
//   );
// }

// function AppContent() {
//   const theme = React.useContext(ThemeContext);
//   const { currentLanguage, changeLanguage } = useLanguage();

//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//       <View style={[styles.container, theme.isDarkMode && styles.darkModeContainer]}>
//         <StatusBar style="auto" />
//         <TouchableOpacity
//           onPress={theme.toggleDarkMode}
//           style={[styles.toggleButton, theme.isDarkMode && styles.darkModeButton]}
//         >
//           <Text style={styles.toggleButtonText}>
//             {theme.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={changeLanguage}
//           style={[styles.languageButton, theme.isDarkMode && styles.darkModeButton]}
//         >
//           <Text style={styles.languageButtonText}>
//             {currentLanguage === 'en' ? 'Switch to Polish' : 'Zmień na angielski'}
//           </Text>
//         </TouchableOpacity>

//         <AddMovieForm />
//         <UpdateMovieForm />
//         <DeleteMovieForm />
//         <GetByTDForm />
//         <GetById />
//         <GetAllMovies />
//         <TableView />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollViewContainer: {
//     flexGrow: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fdf3f3', // Default background color for light mode
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   darkModeContainer: {
//     backgroundColor: '#342056', // Background color for dark mode
//   },
//   toggleButton: {
//     padding: 10,
//     backgroundColor: '#3498db',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   darkModeButton: {
//     backgroundColor: '#777', // Color for dark mode
//   },
//   toggleButtonText: {
//     color: '#fff',
//   },
//   languageButton: {
//     padding: 10,
//     backgroundColor: '#27ae60',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   languageButtonText: {
//     color: '#fff',
//   },
// });
