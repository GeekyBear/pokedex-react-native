import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
  Easing,
  FlatList,
} from "react-native";

//======== Imports ========== //
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "./constants/Constants";

//======== Components ========== //
import Title from "./components/Title/Title";
import Detail from "./components/Detail/Detail";
import PokeList from "./components/PokeList/PokeList";
import {
  loadFirstItems,
  loadLastItems,
  loadMoreItems,
  loadNextItems,
  loadPrevItems,
} from "./utils/Utils";
import { TextInput } from "react-native";

//======== Screen constants ========== //
const screenWidth = Dimensions.get("screen").width;
const availableSpace =
  screenWidth - (Constants.numColumns - 1) * Constants.gap - 24;
const itemSize = availableSpace / Constants.numColumns - 4;

//======== Animation ========= //
const animatePokeball = () => {
  spinValue = new Animated.Value(0);

  // First set up animation
  Animated.timing(this.spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }).start();

  return (spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  }));
};
//======== APP Component ========== //
export default function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokeName, setPokeName] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [count, setCount] = useState(0);

  // Function to make get petition
  const getPokemons = async (pokeName) => {
    animatePokeball();
    setLoading(true);
    if (pokeName) {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
        .then((res) => {
          setPokemonsData([res.data]);
        })
        .catch((err) => setPokemonsData([]));

      setRefresh(!refresh);
      setLoading(false);
    } else {
      await axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=${currentPage}&limit=21",`
        )
        .then((res) => {
          // setCount(
          //   res.data.count % 20 === 0
          //     ? res.data.count / 20
          //     : Math.floor(res.data.count / 20) * 20
          // );
          getPokemonsData(res.data.results);
        })
        .catch((err) => console.log(err));
      setRefresh(!refresh);
    }
  };

  // Function that makes multiple petitions from the URLs returned from getPokemons.
  const getPokemonsData = async (data) => {
    let endpoints = data.map((pokemon) => pokemon.url);
    try {
      const pokemonData = await axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((data) => data);

      if (pokemonData) {
        const pokemons = pokemonData.map(({ data }) => data);
        setPokemonsData(pokemons);
      }
      setLoading(false);
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
          {item.sprites.other["official-artwork"] ? (
            <Image
              style={styles.itemImageStyle}
              source={{
                uri: item.sprites.other["official-artwork"].front_default,
              }}
            />
          ) : null}

          <View style={styles.contentWrapperStyle}>
            <Text style={styles.txtNameStyle}>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }, []);

  useEffect(() => {
    getPokemons(pokeName);
  }, [currentPage, pokeName]);

  function Loader(props) {
    return (
      <View
        style={{
          flex: 1,
          width: Dimensions.get("screen").width - 24,
          backgroundColor: "#EFEFEF",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 24,
          marginBottom: 12,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: Dimensions.get("screen").width / 14,
            fontWeight: 800,
            color: "#434a54",
          }}
        >
          Loading Pokemons
        </Text>

        <Text
          style={{
            fontSize: Dimensions.get("screen").width / 20,
            fontWeight: 600,
            color: "#434a54",
            marginBottom: 12,
          }}
        >
          Please wait...
        </Text>
        <Animated.Image
          style={{
            width: Dimensions.get("screen").width / 2,
            height: Dimensions.get("screen").width / 2,
            transform: [
              {
                rotate: props.spin,
              },
            ],
          }}
          source={require("./assets/images/pokeball-loader.png")}
        />
      </View>
    );
  }

  const LoadHandler = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginBottom: 24,
          marginTop: 12,
          justifyContent: "center",
        }}
      >
        {pokeName ? (
          <View>
            <TouchableOpacity
              style={styles.resetSearch}
              onPress={() => setPokeName("")}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Reset search</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <TouchableOpacity
              disabled={currentPage === 0 ? true : false}
              style={
                currentPage === 0 ? styles.disabled : styles.loadMoreTextButton
              }
              onPress={() => setCurrentPage(loadPrevItems(currentPage))}
            >
              <Text style={{ color: "white" }}>Prev</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loadMoreTextButton}
              onPress={() => setCurrentPage(loadNextItems(currentPage))}
            >
              <Text style={{ color: "white" }}>Next</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  const handleTextChange = (pokemonName) => {
    setPokeName(pokemonName);
  };

  const SearchBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            flex: 3,
            backgroundColor: "white",
            paddingVertical: 8,
            paddingHorizontal: 16,
            marginLeft: 12,
            borderRadius: 100,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => console.log(pokeName)}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./assets/images/icons/lupa.png")}
            />
          </TouchableOpacity>
          <TextInput
            style={{ paddingLeft: 8, width: "90%" }}
            onSubmitEditing={(value) =>
              handleTextChange(value.nativeEvent.text)
            }
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 40,
              height: 40,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#DC0A2D", fontSize: 16 }}>A</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Title />
        <SearchBar />
        {!loading ? (
          <PokeList
            refresh={refresh}
            navigation={navigation}
            pokemonsData={pokemonsData}
            setPokeName={setPokeName}
            renderItem={renderItem}
            LoadHandler={LoadHandler}
          ></PokeList>
        ) : (
          <Loader spin={spin}></Loader>
        )}

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
  txtNameStyle: {
    fontWeight: 600,
    fontSize: 16,
    color: "#000a0a",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
  loadMoreButton: {
    backgroundColor: "#DC0A2D",
    borderRadius: 100,
    marginHorizontal: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  loadMoreTextButton: {
    backgroundColor: "#DC0A2D",
    borderRadius: 100,
    marginHorizontal: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "#c5c6d0",
    borderRadius: 100,
    marginHorizontal: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  resetSearch: {
    alignSelf: "center",
    backgroundColor: "#DC0A2D",
    borderRadius: 100,
    marginHorizontal: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
