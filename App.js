import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  Animated,
} from "react-native";
import Title from "./components/Title/Title";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detail from "./components/Detail/Detail";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Easing } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const numColumns = 3;
const gap = 10;

const availableSpace = screenWidth - (numColumns - 1) * gap - 24;
const itemSize = availableSpace / numColumns;

export default function App() {
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
        setPokemonsData(pokemonsData.concat(pokemons));
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

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Title />
        <Text>BARRA DE BUSQUEDA</Text>
        <FlatList
          style={{
            marginHorizontal: 12,
            backgroundColor: "#fff",
            marginTop: 24,
            marginBottom: 12,
            borderRadius: 8,
          }}
          contentContainerStyle={{ gap }}
          columnWrapperStyle={{ gap }}
          numColumns={numColumns}
          data={pokemonsData}
          renderItem={(item) => renderItem(item, navigation)}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItems}
          navigation={navigation}
          scrollsToTop={true}
        />
        <StatusBar style="auto" />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC0A2D",
    alignItems: "center",
  },
  itemWrapperStyle: {
    height: itemSize,
    width: itemSize,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 6,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapperStyle: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 4,
  },
  itemImageStyle: {
    width: "70%",
    height: "70%",
    zIndex: 2,
  },
  touchableStyle: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  txtIdStyle: {
    position: "absolute",
    right: 12,
    top: 4,
  },
  txtNameStyle: {},
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
