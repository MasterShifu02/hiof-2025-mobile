import { Text } from "react-native";
import { productStyles } from "./styles";

export default function ProductPrice({ price }: { price: number }) {
  const formattedPrice =
    typeof Intl !== "undefined"
      ? new Intl.NumberFormat("no-NO", {
          style: "currency",
          currency: "NOK",
          maximumFractionDigits: 0,
        }).format(price)
      : `NOK ${price}`;

  return <Text style={productStyles.price}>{formattedPrice}</Text>;
}
