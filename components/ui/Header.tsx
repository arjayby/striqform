import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export default function Header({ children }: PropsWithChildren) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: -0.4,
    color: "#0F172A",
  },
});
