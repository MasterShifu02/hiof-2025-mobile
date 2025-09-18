import { useCallback, useMemo, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import BottomTabBar from "./components/BottomTabBar";
import { layoutStyles } from "./components/styles";
import HomeScreen from "./screens/HomeScreen";
import PlaceholderScreen from "./screens/PlaceholderScreen";
import type { TabItem, TabKey } from "./types/navigation";
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

const TAB_ITEMS: TabItem[] = [
  { key: "home", label: "Home" },
  { key: "shoppingList", label: "Shopping List" },
  { key: "groups", label: "Groups" },
  { key: "profile", label: "Profile" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  const handleTabPress = useCallback((key: TabKey) => {
    setActiveTab(key);
  }, []);

  const content = useMemo(() => {
    switch (activeTab) {
      case "home":
        return <HomeScreen products={products} />;
      case "shoppingList":
        return (
          <PlaceholderScreen
            title="Shopping List"
            subtitle="Build curated collections of the items you want to remember."
          />
        );
      case "groups":
        return (
          <PlaceholderScreen
            title="Groups"
            subtitle="Bring friends together and share your favourite finds with ease."
          />
        );
      case "profile":
        return (
          <PlaceholderScreen
            title="Profile"
            subtitle="Personalise your experience and keep your preferences in sync."
          />
        );
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <SafeAreaView style={layoutStyles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={layoutStyles.content}>{content}</View>
      <BottomTabBar activeTab={activeTab} tabs={TAB_ITEMS} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}
