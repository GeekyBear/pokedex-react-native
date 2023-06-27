import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Colors from "../../constants/Colors";
import LinearGradient from "react-native-linear-gradient";

export default function Detail({ navigation: { goBack }, route }) {
  const { pokemonId } = route.params;
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonType, setPokemonType] = useState([]);
  const [flavorTextEntries, setFlavorTextEntries] = useState("");

  const language = "en";
  const version = "red";

  useEffect(() => {
    async function fetchData() {
      try {
        const fulldata = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        if (fulldata) {
          console.log(fulldata.data.species.url);
          setPokemonData(fulldata);
          setPokemonType(fulldata.data.types.map(({ type }) => type.name));
        }

        try {
          const { data } = await axios.get(fulldata.data.species.url);

          if (data) {
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

  return (
    <View
      style={[
        pokemonType
          ? { backgroundColor: Colors[pokemonType[0]] }
          : { backgroundColor: "grey" },
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
            <View style={styles.titleContainer}>
              <TouchableOpacity onPress={() => goBack()}>
                <Text style={styles.title}>{"< "}</Text>
              </TouchableOpacity>
              <Text style={styles.title}>{pokemonData.data.name}</Text>
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
              {pokemonData.data.types.map(({ slot, type, url }, index) => (
                <TouchableOpacity
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
                  <Text key={index} style={styles.textType}>
                    {type.name}
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
              <View style={{ width: "30%", alignItems: "center" }}>
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
              <Text>|</Text>
              <View style={{ width: "30%", alignItems: "center" }}>
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
              <Text>|</Text>
              <View style={{ width: "30%", alignItems: "center" }}>
                <View>
                  {pokemonData.data.abilities.map(({ ability }) => {
                    let abilityName = ability.name;
                    return (
                      <Text>
                        {abilityName.charAt(0).toUpperCase() +
                          abilityName.slice(1)}
                      </Text>
                    );
                  })}
                </View>
                <Text>Abilities</Text>
              </View>
            </View>
            <Text style={styles.description}>
              {flavorTextEntries &&
                flavorTextEntries
                  .find(
                    ({ language, version }) =>
                      language.name === "en" && version.name === "black"
                  )
                  .flavor_text.replace(/(\r\n|\n|\r)/gm, " ")}
            </Text>
            <Text
              style={[styles.sectionTitle, { color: Colors[pokemonType[0]] }]}
            >
              Base Stats
            </Text>
            <View>
              {pokemonData.data.stats.map(({ stat, base_stat }) => (
                <View
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
                  <View style={{ flex: 1 }}>
                    <Text>{base_stat}</Text>
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
                        width: base_stat < 110 ? `${base_stat - 15}%` : `100%`,
                        height: 10,
                        backgroundColor: Colors[pokemonType[0]],
                      }}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
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
    justifyContent: "space-around",
    width: screenWidth,
    height: "10%",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
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
