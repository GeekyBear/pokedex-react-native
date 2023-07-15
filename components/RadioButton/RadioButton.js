import { Text } from "react-native";
import { View } from "react-native";

export default function RadioButton({ props }) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#DC0A2D",
            alignItems: "center",
            justifyContent: "center",
          },
          props.style,
        ]}
      >
        {props.selected ? (
          <>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#DC0A2D",
              }}
            />
          </>
        ) : null}
      </View>
      <Text style={{ textAlignVertical: "center", paddingLeft: 8 }}>
        {props.name}
      </Text>
    </View>
  );
}
