import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import axios from "axios";
import Colors from "../../constants/Colors";

export default function Detail({ navigation: { goBack }, route }) {
  const { pokemonId } = route.params;
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonType, setPokemonType] = useState([]);
  const [flavorTextEntries, setFlavorTextEntries] = useState("");

  // ----------- ANIMATION --------------- //
  spinValue = new Animated.Value(0);

  // First set up animation
  Animated.timing(this.spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  // ----------- END ANIMATION ------------ //
  // const language = "en";
  // const version = "red";

  useEffect(() => {
    async function fetchData() {
      try {
        const fulldata = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        if (fulldata) {
          // console.log(fulldata.data.species.url);
          setPokemonData(fulldata);
          setPokemonType(fulldata.data.types.map(({ type }) => type.name));
        }

        try {
          const { data } = await axios.get(fulldata.data.species.url);

          if (data) {
            // console.log(data.flavor_text_entries);
            setFlavorTextEntries(data.flavor_text_entries);
          }
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
          source={require("../../assets/images/pokeball-loader.png")}
        />
      </View>
    );
  }

  return (
    <View
      style={[
        pokemonType
          ? { backgroundColor: Colors[pokemonType[0]] }
          : { backgroundColor: "#DC0A2D" },
        styles.container,
      ]}
    >
      {pokemonData.data !== undefined ? (
        <View>
          <Image
            style={styles.pokeball}
            source={require("../../assets/images/pokeball.png")}
          />
          <View style={styles.returnBar}>
            <View style={{ width: "50%" }}>
              <TouchableOpacity
                onPress={() => goBack()}
                style={styles.titleContainer}
              >
                <Image
                  source={require("../../assets/images/arrow.png")}
                  style={{ top: 2 }}
                />
                <Text style={styles.title}>
                  {pokemonData.data.name.charAt(0).toUpperCase() +
                    pokemonData.data.name.slice(1)}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>#{pokemonData.data.id}</Text>
          </View>
          <View style={styles.empty}>
            <Image
              style={styles.pokeImage}
              source={{
                uri: pokemonData.data.sprites.other["official-artwork"]
                  .front_default,
              }}
            />
          </View>
          <View style={styles.info}>
            <View style={styles.types}>
              {pokemonData.data.types.map(({ slot, type, url }, index, []) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    pokemonType
                      ? {
                          backgroundColor:
                            Colors[
                              pokemonType.find((name) => name === type.name)
                            ],
                        }
                      : { backgroundColor: "grey" },
                    styles.types,
                  ]}
                >
                  <Text style={styles.textType}>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text
              style={[styles.sectionTitle, { color: Colors[pokemonType[0]] }]}
            >
              About
            </Text>
            <View style={styles.about}>
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Image
                    source={require("../../assets/images/vectors/weight.png")}
                  />
                  <Text>{pokemonData.data.weight}</Text>
                </View>
                <Text>Weight</Text>
              </View>
              <View
                style={{
                  backgroundColor: "lightgray",
                  width: 2,
                  marginLeft: 2,
                  marginRight: 6,
                }}
              />
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Image
                    source={require("../../assets/images/vectors/height.png")}
                  />
                  <Text>{pokemonData.data.height}</Text>
                </View>
                <Text>Height</Text>
              </View>
              <View
                style={{
                  backgroundColor: "lightgray",
                  width: 2,
                  marginLeft: 2,
                  marginRight: 6,
                }}
              />
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ gap: 4 }}>
                  <Text>Abilities</Text>
                  {pokemonData.data.abilities.map(({ ability }, index) => {
                    let abilityName = ability.name;
                    return (
                      <Text key={index}>
                        <Text style={{ color: Colors[pokemonType[0]] }}>■</Text>{" "}
                        {abilityName.charAt(0).toUpperCase() +
                          abilityName.slice(1)}
                      </Text>
                    );
                  })}
                </View>
              </View>
            </View>
            <Text style={styles.description}>
              {flavorTextEntries
                ? flavorTextEntries
                    .find(({ language, version }) => language.name === "en")
                    .flavor_text.replace(/(\r\n|\n|\r)/gm, " ")
                : null}
            </Text>
            <Text
              style={
                pokemonType.length > 1
                  ? [styles.sectionTitle, { color: Colors[pokemonType[1]] }]
                  : [styles.sectionTitle, { color: Colors[pokemonType[0]] }]
              }
            >
              Base Stats
            </Text>
            <View>
              {pokemonData.data.stats.map(({ stat, base_stat }, index) => (
                <View
                  key={index}
                  style={{
                    width: screenWidth * 0.85,
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text>{statNameFormatter(stat.name)}</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "lightgray",
                      width: 2,
                      marginLeft: 2,
                      marginRight: 6,
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text>{base_stat < 100 ? "0" + base_stat : base_stat}</Text>
                  </View>
                  <View
                    style={{
                      flex: 6,
                      justifyContent: "center",
                      backgroundColor: "ddd",
                    }}
                  >
                    <View
                      style={{
                        width:
                          base_stat <= 15
                            ? `10%`
                            : base_stat < 110
                            ? `${base_stat - 15}%`
                            : `100%`,
                        height: 10,
                        backgroundColor:
                          pokemonType.length > 1
                            ? Colors[pokemonType[1]]
                            : Colors[pokemonType[0]],
                        borderRadius: 100,
                      }}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      ) : (
        <Loader spin={spin}></Loader>
      )}
    </View>
  );
}

const statNameFormatter = (statname) => {
  switch (statname) {
    case "hp":
      return "HP";
    case "attack":
      return "ATK";
    case "defense":
      return "DEF";
    case "special-attack":
      return "SATK";
    case "special-defense":
      return "SDEF";
    case "speed":
      return "SPD";
  }
};

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: screenWidth,
  },
  pokeball: {
    position: "absolute",
    width: screenWidth * 0.6,
    height: screenWidth * 0.6,
    right: 8,
    top: 8,
  },
  returnBar: {
    flexDirection: "row",
    width: screenWidth,
    height: "10%",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "white",
    width: "50%",
    textAlign: "right",
    paddingRight: 20,
  },
  empty: {
    width: screenWidth,
    height: "20%",
    alignItems: "center",
    zIndex: 2,
  },
  pokeImage: {
    position: "absolute",
    width: screenWidth * 0.56,
    height: screenWidth * 0.56,
  },
  info: {
    width: screenWidth * 0.96,
    height: "69%",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingTop: 56,
    alignItems: "center",
    gap: 16,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  types: {
    flexDirection: "row",
    gap: 12,
    borderRadius: 100,
  },
  textType: {
    color: "white",
    padding: 8,
    marginHorizontal: 12,
  },
  about: {
    flexDirection: "row",
  },
  sectionTitle: {
    fontWeight: 700,
    fontSize: 16,
  },
  description: {
    minHeight: 60,
    textAlignVertical: "center",
  },
});
