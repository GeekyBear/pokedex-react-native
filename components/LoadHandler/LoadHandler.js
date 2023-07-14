import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function LoadHandler({
  pokeName,
  currentPage,
  lastPage,
  setCurrentPage,
  setLastPage,
  loadNextItems,
  loadPrevItems,
  loadFirstItems,
  loadLastItems,
  count,
  setPokeName,
}) {
  return (
    <View style={styles.container}>
      {pokeName ? (
        <View>
          <TouchableOpacity
            style={styles.resetSearch}
            onPress={() => setPokeName("")}
          >
            <Text style={styles.resetText}>Reset search</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TouchableOpacity
            disabled={currentPage === 0 ? true : false}
            style={
              currentPage === 0 ? styles.disabled : styles.loadMoreTextButton
            }
            onPress={() => {
              setCurrentPage(loadFirstItems(0)), setLastPage(false);
            }}
          >
            <Text style={styles.first}>{"|<"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={currentPage === 0 ? true : false}
            style={
              currentPage === 0 ? styles.disabled : styles.loadMoreTextButton
            }
            onPress={() => {
              setCurrentPage(loadPrevItems(currentPage)), setLastPage(false);
            }}
          >
            <Text style={styles.prev}>Prev</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={lastPage ? true : false}
            style={lastPage ? styles.disabled : styles.loadMoreTextButton}
            onPress={() => setCurrentPage(loadNextItems(currentPage))}
          >
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={lastPage ? true : false}
            style={lastPage ? styles.disabled : styles.loadMoreTextButton}
            onPress={() => {
              setCurrentPage(loadLastItems(count)), setLastPage(true);
            }}
          >
            <Text style={styles.last}>{">|"}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 24,
    marginTop: 12,
    justifyContent: "center",
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
  resetText: {
    color: "white",
    fontSize: 20,
  },
  first: { color: "white" },
  prev: { color: "white" },
  next: { color: "white" },
  last: { color: "white" },
});
