import { Text } from "react-native";
import { productStyles } from "./styles";
import { Product } from "../types";

export default function ProductPrice({ price }: { price: number }) {
  return <Text style={productStyles.price}>Produktpris: {price} NOK</Text>;
}
