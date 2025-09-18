import { Pressable, Text, View } from "react-native";

import { navigationStyles } from "./styles";
import type { TabItem, TabKey } from "../types/navigation";

type Props = {
  activeTab: TabKey;
  tabs: TabItem[];
  onTabPress: (key: TabKey) => void;
};

export default function BottomTabBar({ activeTab, tabs, onTabPress }: Props) {
  return (
    <View style={navigationStyles.container}>
      <View style={navigationStyles.bar}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <Pressable
              key={tab.key}
              onPress={() => onTabPress(tab.key)}
              style={({ pressed }) => [
                navigationStyles.tabButton,
                isActive && navigationStyles.tabButtonActive,
                pressed && navigationStyles.tabButtonPressed,
              ]}
              android_ripple={{ color: "rgba(10, 132, 255, 0.1)", borderless: false }}
            >
              <Text
                style={[
                  navigationStyles.tabLabel,
                  isActive && navigationStyles.tabLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
