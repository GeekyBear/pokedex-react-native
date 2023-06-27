// VERSION 1
// const [count, setCount] = useState(0);
// const [next, setNext] = useState('');
// const [prev, setPrev] = useState('');
// const [pokeData, setPokeData] = useState({});

// useEffect(() => {
//   axios.get('https://pokeapi.co/api/v2/pokemon')
//     .then(response => {
//       setCount(response.data.count);
//       setNext(response.data.next);
//       setPrev(response.data.prev);
//       setPokeData(response.data.results);
//     })
//     .catch((e) => {
//       console.log(e)
//     })
// }, [])

// const handleLoadMore = async () => {
//   await axios.get(next)
//     .then(response => {
//       setPokeData([...pokeData, ...response.data.results]);
//       setNext(response.data.next);
//       setPrev(response.data.prev);
//     })
//     .catch((e) => {
//       console.log(e)
//     })
// };

// const Stack = createNativeStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Title />
//       <Text>BARRA DE BUSQUEDA</Text>
//       {pokeData ? <Pokelist handleLoadMore={handleLoadMore} pokeData={pokeData} navigation={navigation} /> : null}
//       {/* <Detail /> */}
//       <StatusBar style="auto" />
//     </View>
//   )
// }

// return (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName="Home"  screenOptions={{
//   headerShown: false
// }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Detail" component={Detail} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#DC0A2D',
//   alignItems: 'center',
// }
// });

//VERSION 2
const [pokemons, setPokemons] = useState([]);
const [pokemonsData, setPokemonsData] = useState([]);
const [currentPage, setCurrentPage] = useState(0);

// ----------- ANIMATION --------------- //
spinValue = new Animated.Value(0);

// First set up animation
Animated.timing(this.spinValue, {
  toValue: 1,
  duration: 3000,
  asing: Easing.linear, // Easing is an additional import from react-native
  useNativeDriver: true, // To make use of native driver for performance
}).start();

// Next, interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "360deg"],
});
// ----------- END ANIMATION ------------ //

const getPokemons = async () => {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=${currentPage}`)
    .then((res) => {
      console.log(currentPage);
      setPokemons(res.data.results);
      getPokemonsData(res.data.results);
    })
    .catch((err) => console.log(err));
};

const getPokemonsData = async (data) => {
  let endpoints = data.map((pokemon) => pokemon.url);
  // console.log(endpoints);
  try {
    const pokemonData = await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => data);

    if (pokemonData) {
      const pokemons = pokemonData.map(({ data }) => data);
      setPokemonsData([...pokemonsData, ...pokemons]);
    }
  } catch (error) {
    console.log(error);
  }
};

const renderItem = useCallback(({ item }, navigation) => {
  return (
    <View style={styles.itemWrapperStyle}>
      <Text style={styles.txtIdStyle}>#{item.id}</Text>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={() =>
          navigation.push("Detail", {
            pokemonId: item.id,
          })
        }
      >
        <Image
          style={styles.itemImageStyle}
          source={{
            uri: item.sprites.other["official-artwork"].front_default,
          }}
        />
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.txtNameStyle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}, []);

const renderLoader = () => {
  return (
    <View style={styles.loaderStyle}>
      <Animated.Image
        style={{
          width: 40,
          height: 40,
          transform: [{ rotate: spin }],
        }}
        source={require("../pokedex/assets/images/pokeball-loader.png")}
      />
    </View>
  );
};

const loadMoreItems = () => {
  setCurrentPage(currentPage + 20);
};

useEffect(() => {
  getPokemons();
}, [currentPage]);
