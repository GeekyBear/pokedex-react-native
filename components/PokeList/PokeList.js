import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FlatList, View, Text } from "react-native";

const gap = 10;
const numColumns = 3;

const ListEmptyView = (setPokeName) => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Pokemon not found
      </Text>
      <TouchableOpacity onPress={() => setPokeName("")}>
        <Text>Reset search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function PokeList(props) {
  return (
    <FlatList
      style={{
        marginHorizontal: 12,
        backgroundColor: "#fff",
        marginTop: 24,
        marginBottom: 12,
        borderRadius: 8,
        width: Dimensions.get("screen").width - 20,
      }}
      contentContainerStyle={{
        gap,
      }}
      columnWrapperStyle={{
        gap,
      }}
      extraData={this.state}
      numColumns={numColumns}
      data={props.pokemonsData}
      renderItem={(item) => props.renderItem(item, props.navigation)}
      keyExtractor={(item) => item.id}
      ListFooterComponent={props.pokemonsData.length > 1 && props.LoadMore} // onEndReached={loadMoreItems}
      navigation={props.navigation}
      scrollsToTop={true}
      onEndReachedThreshold={0}
      ListEmptyComponent={ListEmptyView(props.setPokeName)}
    />
  );
}
