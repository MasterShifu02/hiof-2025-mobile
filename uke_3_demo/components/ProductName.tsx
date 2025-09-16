import { Text } from "react-native";
<<<<<<< Updated upstream
import type { Product } from "../types";

export default function ProductName({ name }: Pick<Product, "name">) {
=======
import { Product } from "../types";

export default function ProductName({name }: Pick<Product, 'name'>) {
>>>>>>> Stashed changes
  return <Text>{name}</Text>;
}
