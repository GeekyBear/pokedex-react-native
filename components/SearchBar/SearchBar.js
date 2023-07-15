import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";

export default function SearchBar({
  handleTextChange,
  setModalVisible,
  modalVisible,
}) {
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
            source={require("../../assets/images/icons/lupa.png")}
          />
        </TouchableOpacity>
        <TextInput
          style={{ paddingLeft: 8, width: "90%" }}
          onSubmitEditing={(value) => handleTextChange(value.nativeEvent.text)}
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
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{ color: "#DC0A2D", fontSize: 16 }}>A</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
