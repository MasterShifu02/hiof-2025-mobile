import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const horizontalPadding = 24;
const cardWidth = width - horizontalPadding * 2;

const palette = {
  background: "#f5f5f7",
  card: "#ffffff",
  muted: "#6e6e73",
  accent: "#0a84ff",
  border: "rgba(60, 60, 67, 0.1)",
} as const;

export const layoutStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  placeholderTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1c1c1e",
    letterSpacing: 0.3,
  },
  placeholderSubtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    color: palette.muted,
  },
});

export const productStyles = StyleSheet.create({
  listContent: {
    paddingVertical: 32,
    paddingHorizontal: horizontalPadding,
  },
  card: {
    width: cardWidth,
    borderRadius: 28,
    padding: 24,
    backgroundColor: palette.card,
    marginBottom: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1c1c1e",
    letterSpacing: 0.3,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  description: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 22,
    color: palette.muted,
  },
  imageWrapper: {
    marginTop: 24,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f0f0f5",
  },
  heroImage: {
    width: "100%",
    height: cardWidth * 0.6,
  },
  buyButton: {
    marginTop: 24,
    alignSelf: "flex-start",
    paddingHorizontal: 28,
    paddingVertical: 14,
    backgroundColor: palette.accent,
    borderRadius: 999,
  },
  buyButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  buyButtonPressed: {
    opacity: 0.8,
  },
});

export const navigationStyles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalPadding,
    paddingBottom: 16,
    paddingTop: 12,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 36,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  tabButton: {
    flex: 1,
    borderRadius: 28,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButtonActive: {
    backgroundColor: "rgba(10, 132, 255, 0.12)",
  },
  tabButtonPressed: {
    opacity: 0.75,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#3a3a3c",
    letterSpacing: 0.2,
  },
  tabLabelActive: {
    color: palette.accent,
  },
});
