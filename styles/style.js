// styles.js
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdf3f3', // Default background color for light mode
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontFamily: 'LatoRegular',
    color: 'black', // Default text color for light mode
  },
  input: {
    height: 40,
    width: 320,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: 'black', // Default text color for light mode
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'LatoRegular',
    color: 'black', // Default text color for light mode
  },
  styleBtn: {
    marginTop: 40,
    width: 320,
    height: 40,
    backgroundColor: '#c96868',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'LatoRegular',
    fontSize: 18,
    color: 'white', // Default text color for light mode
  },
});

export const darkModeStyles = StyleSheet.create({
  darkModeContainer: {
    backgroundColor: '#303030', // Dark mode background color
  },
  darkModeText: {
    color: 'white', // Dark mode text color
  },
  // darkModeInput: {
  //   color: 'white', // Dark mode text color
  // },
  darkModeButton: {
    backgroundColor: '#5454c5', // Dark mode button color
  },
});

export const movieDetailsStyles = StyleSheet.create({
  movieDetailsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#724060',
    borderRadius: 8,
  },
  darkModeMovieDetails: {
    backgroundColor: '#303030', // Dark mode movie details background color
  },
  movieDetail: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white',
    fontFamily: 'LatoRegular',
  },
});