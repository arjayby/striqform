import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text as T, TextStyle } from "react-native";

type SubtleProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export default function Text(props: SubtleProps) {
  return <T style={[styles.text, props.style]}>{props.children}</T>;
}

const styles = StyleSheet.create({
  text: {
    color: "#64748b",
  },
});
