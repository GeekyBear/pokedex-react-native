import { StyleSheet, StatusBar, View, Text } from 'react-native';
import Title from './components/Title/Title';
import Pokelist from './components/PokeList/PokeList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Detail from './components/Detail/Detail';

export default function App() {
  const [pokeData, setPokeData] = useState({})

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => setPokeData(response.data))
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <View style={styles.container}>
      {/* <Title />
      <Text>BARRA DE BUSQUEDA</Text>
      {pokeData ? <Pokelist pokeData={pokeData} /> : null} */}
      <Detail />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC0A2D',
    alignItems: 'center',
  }
});
