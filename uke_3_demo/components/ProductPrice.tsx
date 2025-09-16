import { Text } from "react-native";
import { productStyles } from "./styles";
import { Product } from "../types";

<<<<<<< HEAD
export default function ProductPrice({ price }: Pick<Product, "price">) {
  return <Text style={productStyles.price}>{price} kr</Text>;
=======
export default function ProductPrice({ price }: { price: number }) {
  return <Text style={productStyles.price}>Produktpris: {price} NOK</Text>;
>>>>>>> 5176cd1894dc574a2ac14be090341cf9fb56f2b5
}
