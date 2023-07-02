import { StyleSheet, TextInput as TI, TextInputProps } from "react-native";

export default function TextInput(props: TextInputProps) {
  return <TI style={styles.input} placeholderTextColor="#64748b" {...props} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#E5E7EB",
    fontSize: 14,
    color: "#64748B",
  },
});
