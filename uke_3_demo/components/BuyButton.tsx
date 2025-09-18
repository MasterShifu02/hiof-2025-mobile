import { Pressable, Text, type GestureResponderEvent } from "react-native";
import { productStyles } from "./styles";

export default function BuyButton() {
  const handlePress = (event: GestureResponderEvent) => {
    console.log("Kjøp knapp trykket", event.currentTarget);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        productStyles.buyButton,
        pressed && productStyles.buyButtonPressed,
      ]}
      android_ripple={{ color: "rgba(10, 132, 255, 0.2)", borderless: false }}
    >
      <Text style={productStyles.buyButtonText}>Legg i handlekurv</Text>
    </Pressable>
  );
}
