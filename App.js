import { StyleSheet, StatusBar, View, Text } from 'react-native';
import Title from './components/Title/Title';
import Pokelist from './components/PokeList/PokeList';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Text>BARRA DE BUSQUEDA</Text>
      <Pokelist />
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
