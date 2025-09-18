import { FlatList } from "react-native";

import ProductCard from "../components/ProductCard";
import { productStyles } from "../components/styles";
import type { Product } from "../types";

type Props = {
  products: Product[];
};

export default function HomeScreen({ products }: Props) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      contentContainerStyle={productStyles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
}
