import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text as T, TextStyle } from "react-native";

type SubtleProps = {
  variant?: "subtle" | "small" | "large" | "lead" | "header";
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export default function Text({
  variant = "subtle",
  children,
  style,
}: SubtleProps) {
  return (
    <T
      style={[
        variant === "subtle" && styles.subtle,
        variant === "small" && styles.small,
        variant === "large" && styles.large,
        variant === "lead" && styles.lead,
        variant === "header" && styles.header,
        style,
      ]}
    >
      {children}
    </T>
  );
}

const styles = StyleSheet.create({
  subtle: {
    fontSize: 14,
    color: "#64748b",
  },
  small: {
    fontSize: 12,
    color: "#0F172A",
  },
  large: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },
  lead: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0F172A",
  },
  header: {
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: -0.4,
    color: "#0F172A",
  },
});
