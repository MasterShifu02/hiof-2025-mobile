import { View } from "react-native";
import { productStyles } from "./styles";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import BuyButton from "./BuyButton";
import { Image } from "expo-image";

import MyImage from "../assets/img.jpg";
<<<<<<< Updated upstream
import type { Product } from "../types";

type Props = {
  product: Product;
};

export default function ProductCard(props: Props) {
  const { product } = props;

=======
import { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
>>>>>>> Stashed changes
  return (
    <View style={productStyles.card}>
      <ProductName name={product.name} />
      <ProductPrice price={product.price} />
      <Image source={MyImage} style={{ width: 200, height: 200 }} />
      <BuyButton />
    </View>
  );
}
