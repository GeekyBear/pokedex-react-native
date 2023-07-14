import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";

export default function Loader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading Pokemons</Text>
      <Text style={styles.waitText}>Please wait...</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width - 24,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 12,
    borderRadius: 8,
  },
  loadingText: {
    fontSize: Dimensions.get("screen").width / 14,
    fontWeight: 800,
    color: "#434a54",
  },
  waitText: {
    fontSize: Dimensions.get("screen").width / 20,
    fontWeight: 600,
    color: "#434a54",
    marginBottom: 12,
  },
});
