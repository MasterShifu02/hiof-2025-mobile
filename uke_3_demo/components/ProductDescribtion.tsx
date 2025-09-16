import { Text } from "react-native";
import type { Product } from "../types";

export default function ProductDescription({ description }: Pick<Product, "description">) {
  return <Text>{description}</Text>;
}