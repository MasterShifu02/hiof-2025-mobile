import { View } from "react-native";
import { Image } from "expo-image";

import MyImage from "../assets/img.jpg";
import type { Product } from "../types";
import ProductDescription from "./ProductDescribtion";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import BuyButton from "./BuyButton";
import { productStyles } from "./styles";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <View style={productStyles.card}>
      <View style={productStyles.topRow}>
        <ProductName name={product.name} />
        <ProductPrice price={product.price} />
      </View>
      <ProductDescription description={product.description} />
      <View style={productStyles.imageWrapper}>
        <Image source={MyImage} style={productStyles.heroImage} contentFit="contain" />
      </View>
      <BuyButton />
    </View>
  );
}
