import { Animated, Easing } from "react-native";

export default function AnimatedLoader() {
  spinValue = new Animated.Value(0);

  // First set up animation
  Animated.timing(this.spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }).start();

  return (spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  }));
}
