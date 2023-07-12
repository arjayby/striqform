import { StyleSheet, View } from "react-native";

import Text from "./Text";

type SeparatorProps = {
  centerText?: string;
};

export default function Separator({ centerText }: SeparatorProps) {
  if (centerText) {
    return (
      <View className="flex-row items-center gap-3">
        <View style={styles.line} />
        <Text variant="muted" className="text-xs">
          {centerText}
        </Text>
        <View style={styles.line} />
      </View>
    );
  }

  return <View style={styles.line} />;
}

// import error when using hairlineWidth from nativewind
const styles = StyleSheet.create({
  line: {
    flex: 1,
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
