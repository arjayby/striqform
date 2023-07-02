import { ReactNode } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

import Text from "./Text";

type LinkProps = {
  children: ReactNode;
};

export default function Link(props: LinkProps & PressableProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      {...props}
    >
      <Text style={styles.link}>{props.children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
