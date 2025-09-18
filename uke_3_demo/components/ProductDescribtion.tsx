import { Text } from "react-native";
import type { Product } from "../types";
import { productStyles } from "./styles";

export default function ProductDescription({ description }: Pick<Product, "description">) {
  return <Text style={productStyles.description}>{description}</Text>;
}
