import { StyleSheet, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FlatList, View, Text, Image } from "react-native";

const gap = 12;
const numColumns = 3;

const ListEmptyView = (setPokeName) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: Dimensions.get("screen").width / 3,
            fontWeight: 800,
            color: "#434a54",
          }}
        >
          4
        </Text>
        <Image
          style={{
            width: Dimensions.get("screen").width / 4,
            height: Dimensions.get("screen").width / 4,
            marginHorizontal: 12,
          }}
          source={require("../../assets/images/notFound.png")}
        />
        <Text
          style={{
            fontSize: Dimensions.get("screen").width / 3,
            fontWeight: 800,
            color: "#434a54",
          }}
        >
          4
        </Text>
      </View>
      <Text
        style={{
          fontSize: Dimensions.get("screen").width / 20,
          fontWeight: 800,
          color: "#434a54",
          marginBottom: 16,
        }}
      >
        Pokemon not found
      </Text>
      <TouchableOpacity
        style={styles.resetSearch}
        onPress={() => setPokeName("")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Reset search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function PokeList(props) {
  return (
    <FlatList
      style={{
        backgroundColor: "#f8f8f8",
        marginTop: 24,
        marginBottom: 12,
        borderRadius: 8,
        paddingTop: 8,
        width: Dimensions.get("screen").width - 20,
      }}
      contentContainerStyle={{
        gap,
      }}
      columnWrapperStyle={{
        justifyContent: "center",
        gap,
      }}
      extraData={this.state}
      numColumns={numColumns}
      data={props.pokemonsData}
      renderItem={(item) => props.renderItem(item, props.navigation)}
      keyExtractor={(item) => item.id}
      ListFooterComponent={props.pokemonsData.length >= 1 && props.LoadHandler} // onEndReached={loadMoreItems}
      navigation={props.navigation}
      scrollsToTop={true}
      onEndReachedThreshold={0}
      ListEmptyComponent={ListEmptyView(props.setPokeName)}
    />
  );
}
const styles = StyleSheet.create({
  resetSearch: {
    alignSelf: "center",
    backgroundColor: "#DC0A2D",
    borderRadius: 100,
    marginHorizontal: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
});
