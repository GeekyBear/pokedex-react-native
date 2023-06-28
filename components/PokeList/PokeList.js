import { FlatList } from "react-native";

const gap = 10;
const numColumns = 3;
export default function PokeList(props) {
  return (
    <FlatList
      style={{
        marginHorizontal: 12,
        backgroundColor: "#fff",
        marginTop: 24,
        marginBottom: 12,
        borderRadius: 8,
      }}
      contentContainerStyle={{
        gap,
      }}
      columnWrapperStyle={{
        gap,
      }}
      numColumns={numColumns}
      data={props.pokemonsData}
      renderItem={(item) => props.renderItem(item, props.navigation)}
      keyExtractor={(item) => item.id}
      ListFooterComponent={props.LoadMore} // onEndReached={loadMoreItems}
      navigation={props.navigation}
      scrollsToTop={true}
      onEndReachedThreshold={0}
    />
  );
}
