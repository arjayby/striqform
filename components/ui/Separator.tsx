import { StyleSheet, View } from "react-native";

import Text from "./Text";

type SeparatorProps = {
  centerText?: string;
};

export default function Separator({ centerText }: SeparatorProps) {
  if (centerText) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={styles.line} />
        <Text style={styles.centerText}>{centerText}</Text>
        <View style={styles.line} />
      </View>
    );
  }

  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  centerText: {
    fontSize: 12,
  },
});
