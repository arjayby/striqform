import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  title: string;
  pressable?: PressableProps;
};

export default function Button({
  primary = true,
  secondary,
  title,
  pressable,
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
        primary && styles.primaryButton,
        secondary && styles.secondaryButton,
      ]}
      {...pressable}
    >
      <Text
        style={[
          styles.text,
          primary && styles.primaryText,
          secondary && styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  text: {
    fontWeight: "600",
  },
  primaryButton: {
    backgroundColor: "#0F172A",
  },
  primaryText: {
    color: "#F8FAFC",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  secondaryText: {
    color: "#0F172A",
  },
});
