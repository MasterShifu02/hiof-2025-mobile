import { Text, View } from "react-native";

import { layoutStyles } from "../components/styles";

type Props = {
  title: string;
  subtitle: string;
};

export default function PlaceholderScreen({ title, subtitle }: Props) {
  return (
    <View style={layoutStyles.placeholder}>
      <Text style={layoutStyles.placeholderTitle}>{title}</Text>
      <Text style={layoutStyles.placeholderSubtitle}>{subtitle}</Text>
    </View>
  );
}
