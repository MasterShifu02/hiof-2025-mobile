import { ScrollView, StyleSheet, View } from "react-native";
import ProductCard from "./components/ProductCard";
import { type Product } from "./types";


const products: Product[] = [
  {
    id: "1",
    name: "Iron Man",
    price: 299,
    description: "Marvel Legends Iron Man action figure.",
  },
  {
    id: "2",
    name: "Spider-Man",
    price: 249,
    description: "Marvel Legends Spider-Man action figure.",
  },
  {
    id: "3",
    name: "Captain America",
    price: 279,
    description: "Marvel Legends Captain America action figure.",
  },
  {
    id: "4",
    name: "Thor",
    price: 269,
    description: "Marvel Legends Thor action figure.",
  },
  {
    id: "5",
    name: "Hulk",
    price: 319,
    description: "Marvel Legends Hulk action figure.",
  },
  {
    id: "6",
    name: "Black Widow",
    price: 259,
    description: "Marvel Legends Black Widow action figure.",
  },
];

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
