import React from "react";
import { useEffect, useState } from "react";
import { View, Pressable, Text, StyleSheet, Button } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { getAll } from "../viewModels/getAllMoviesViewModel";
import * as Font from 'expo-font';

export default function TableView({ movies, setMovies}) {
  const tableHead = ["ID", "Title", "Director"];
  const widthArray = [60, 130, 130];

  const [startPoint, setStartPoint] = useState(0);
  const [pageNumber, setPageNumber] = useState(0); 

  useEffect(() => {
    Font.loadAsync({
      LatoRegular: require('../assets/fonts/LatoRegular400.ttf'),
      LatoLight: require('../assets/fonts/LatoLight300.ttf'),
    });
  }, []);

  useEffect(() => {
    getAll([startPoint], [pageNumber]).then((movies) => { setMovies(movies); });
  });

  return (
    <View>
      <Table borderStyle={{ borderWidth: 1, borderColor: "gray" }}>
        <Row
          data={tableHead}
          widthArr={widthArray}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows 
          data={movies} 
          style={styles.row}
          widthArr={widthArray}
          textStyle={styles.text2} />
      </Table>
      <View>
        <Button title="<" color="#c96868" onPress={() => {setStartPoint(startPoint - 7), setPageNumber(pageNumber - 1)}} />
        <Button title=">" color="#c96868" onPress={() => {setStartPoint(startPoint + 7), setPageNumber(pageNumber + 1)}} />
      </View>

      <Text style={styles.marginUnderTable}></Text>
    </View>
  );
}

const styles = {
  head: { height: 60 ,backgroundColor: "white" },
  text: { textAlign: "center", fontWeight: "bold", color: "black", fontFamily: 'LatoRegular', paddingHorizontal: 10 },
  text2: { textAlign: "center", fontWeight: "bold", color: "black", fontFamily: 'LatoLight', paddingHorizontal: 10 },
  row: { height: 60, backgroundColor: "white", fontFamily: 'LatoRegular' },
  marginUnderTable: { paddingVertical: 30}
};
