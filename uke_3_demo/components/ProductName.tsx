import { Text } from "react-native";
import type { Product } from "../types";
import { productStyles } from "./styles";

export default function ProductName({ name }: Pick<Product, "name">) {
  return <Text style={productStyles.name}>{name}</Text>;
}
