import { StyleSheet, StatusBar, View, Text } from 'react-native';
import Title from './components/Title/Title';
import Pokelist from './components/PokeList/PokeList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from './components/Detail/Detail';

export default function App() {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setCount(response.data.count);
        setNext(response.data.next);
        setPrev(response.data.prev);
        setPokeData(response.data.results);
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const handleLoadMore = async () => {
    await axios.get(next)
      .then(response => {
        setPokeData([...pokeData, ...response.data.results]);
        setNext(response.data.next);
        setPrev(response.data.prev);
      })
      .catch((e) => {
        console.log(e)
      })
  };

  const Stack = createNativeStackNavigator();

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Title />
        <Text>BARRA DE BUSQUEDA</Text>
        {pokeData ? <Pokelist handleLoadMore={handleLoadMore} pokeData={pokeData} navigation={navigation} /> : null}
        {/* <Detail /> */}
        <StatusBar style="auto" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC0A2D',
    alignItems: 'center',
  }
});
