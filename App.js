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
import SearchBar from "./components/SearchBar/SearchBar";
import LoadHandler from "./components/LoadHandler/LoadHandler";
import Loader from "./components/Loader/Loader";
import AnimatedLoader from "./components/AnimatedLoader/AnimatedLoader";
import { Modal } from "react-native";
import { Pressable } from "react-native";
import RadioButton from "./components/RadioButton/RadioButton";

//======== Screen constants ========== //
const screenWidth = Dimensions.get("screen").width;
const availableSpace =
  screenWidth - (Constants.numColumns - 1) * Constants.gap - 24;
const itemSize = availableSpace / Constants.numColumns - 4;

//======== APP Component ========== //
export default function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokeName, setPokeName] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [count, setCount] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const [selected, setSelected] = useState(true);

  // Function to make get petition
  const getPokemons = async (pokeName) => {
    AnimatedLoader();
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
    } else if (!selected) {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=200",`) // In order to save resources, only are fetch 200 pokemons but it can be modified.
        .then((res) => {
          setCount(
            res.data.count % 21 === 0
              ? (res.data.count / 21) * 21 - 21
              : Math.floor(res.data.count / 21) * 21
          );

          getPokemonsData(
            res.data.results.sort((a, b) => a.name.localeCompare(b.name))
          );
        })
        .catch((err) => console.log(err));
      setRefresh(!refresh);
    } else {
      await axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=${currentPage}&limit=21",`
        )
        .then((res) => {
          setCount(
            res.data.count % 21 === 0
              ? (res.data.count / 21) * 21 - 21
              : Math.floor(res.data.count / 21) * 21
          );
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
          {item.sprites.other["official-artwork"].front_default ? (
            <Image
              style={styles.itemImageStyle}
              source={{
                uri: item.sprites.other["official-artwork"].front_default,
              }}
            />
          ) : (
            <Image
              style={styles.missingImageStyle}
              source={require("./assets/images/question.png")}
            />
          )}

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
  }, [currentPage, pokeName, selected]);

  const handleTextChange = (pokemonName) => {
    setPokeName(pokemonName);
  };

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Title />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: "100%",
              paddingHorizontal: 16,
              paddingTop: 150,
              alignItems: "flex-end",
              elevation: 4,
            }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View
              style={{
                width: 120,
                height: 150,
                backgroundColor: "#DC0A2D",
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                elevation: 10,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 16,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: 700, color: "white" }}>
                  Sort By:
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 4,
                  marginBottom: 4,
                  paddingLeft: 8,
                  paddingVertical: 16,
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: 8,
                  gap: 16,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setSelected(true);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <RadioButton props={{ name: "Number", selected: selected }} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSelected(false);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <RadioButton props={{ name: "Name", selected: !selected }} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        <SearchBar
          handleTextChange={handleTextChange}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        {!loading ? (
          <PokeList
            refresh={refresh}
            navigation={navigation}
            pokemonsData={pokemonsData}
            setPokeName={setPokeName}
            renderItem={renderItem}
            LoadHandler={() => (
              <LoadHandler
                pokeName={pokeName}
                currentPage={currentPage}
                lastPage={lastPage}
                setCurrentPage={setCurrentPage}
                setLastPage={setLastPage}
                loadNextItems={loadNextItems}
                loadPrevItems={loadPrevItems}
                loadFirstItems={loadFirstItems}
                loadLastItems={loadLastItems}
                count={count}
                setPokeName={setPokeName}
              />
            )}
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
  missingImageStyle: {
    width: "35%",
    height: "35%",
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
});
