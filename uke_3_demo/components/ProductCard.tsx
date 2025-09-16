import { View } from "react-native";
import { productStyles } from "./styles";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import BuyButton from "./BuyButton";
import { Image } from "expo-image";

import MyImage from "../assets/img.jpg";
import type { Product } from "../types";
import ProductDescription from "./ProductDescribtion";

type Props = {
  product: Product;
};

export default function ProductCard(props: Props) {
  const { product } = props;

  return (
    <View style={productStyles.card}>
      <ProductName name={product.name} />
      <ProductPrice price={product.price} />
<<<<<<< HEAD
      <ProductDescription description={product.description} />
=======
>>>>>>> 5176cd1894dc574a2ac14be090341cf9fb56f2b5
      <Image source={MyImage} style={{ width: 200, height: 200 }} />
      <BuyButton />
    </View>
  );
}
