import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { getAll } from '../viewModels/getAllMoviesViewModel';
import { useFonts } from '@expo-google-fonts/lato';
import translations from '../translations'; // Import translations
import { commonStyles, darkModeStyles } from '../styles/style';
import { ThemeContext } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import leftarrow from '../assets/leftarrow.png';
import rightarrow from '../assets/rightarrow.png';

const TableView = ({ movies, setMovies }) => {
  const [startPoint, setStartPoint] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  const theme = React.useContext(ThemeContext);
  const { currentLanguage } = useLanguage();

  const tableHead = ['ID', 'Title', 'Director'];
  const widthArray = [60, 130, 130];

  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/LatoRegular400.ttf'),
    'Lato-Light': require('../assets/fonts/LatoLight300.ttf'),
  });

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getAll([startPoint], [pageNumber]);
      setMovies(moviesData);
    };

    fetchData();
  }, [startPoint, pageNumber]);

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View>
      <Table borderStyle={{ borderWidth: 1, borderColor: 'gray' }}>
        <Row data={tableHead} widthArr={widthArray} style={styles.head} textStyle={styles.text} />
        <Rows data={movies} style={styles.row} widthArr={widthArray} textStyle={styles.text2} />
      </Table>

      <View style={styles2.arrowContainer}>
        <TouchableOpacity onPress={() => { setStartPoint(startPoint - 7); setPageNumber(pageNumber - 1); }} style={styles2.arrowButton}>
          <Image source={leftarrow} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setStartPoint(startPoint + 7); setPageNumber(pageNumber + 1); }} style={styles2.arrowButton}>
          <Image source={rightarrow} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>

      <Text style={styles.marginUnderTable}></Text>
    </View>
  );
};

const styles = {
  head: { height: 60, backgroundColor: 'white' },
  text: { textAlign: 'center', fontWeight: 'bold', color: 'black', fontFamily: 'Lato-Regular', paddingHorizontal: 10 },
  text2: { textAlign: 'center', fontWeight: 'bold', color: 'black', fontFamily: 'Lato-Light', paddingHorizontal: 10 },
  row: { height: 60, backgroundColor: 'white', fontFamily: 'Lato-Regular' },
  marginUnderTable: { paddingVertical: 30 },
};

const styles2 = {
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButton: {
    margin: 20,
  },
};

export default TableView;
