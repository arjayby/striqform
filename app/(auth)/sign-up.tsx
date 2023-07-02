import { Link } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Button,
  Header,
  Separator,
  Space,
  Text,
  TextInput,
} from "../../components/ui";
import { supabase } from "../../lib/supabase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithEmail = async () => {
    const { error, data } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (data.user) Alert.alert(data.user.id);
    if (error) Alert.alert(error.message);
  };

  const handleSetEmail = (text: string) => {
    setEmail(text);
  };

  const handleSetPassword = (text: string) => {
    setPassword(text);
  };

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.logo} />
        <Space height={32} />
        <Header>Create Your Account</Header>
        <Space height={64} />
        <View style={styles.form}>
          <Text>Enter your email and password to create your account</Text>
          <TextInput
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            value={email}
            onChangeText={handleSetEmail}
          />
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            textContentType="newPassword"
            value={password}
            onChangeText={handleSetPassword}
          />
          <Button
            title="Sign Up with Email"
            pressable={{ onPress: signUpWithEmail }}
          />
          <Separator centerText="OR CONTINUE WITH" />
          <Button secondary title="Sign Up with Apple" />
        </View>
        <Space height={64} />
        <Link href="/sign-in">
          <Text
            style={{ textAlign: "center", textDecorationLine: "underline" }}
          >
            Already have an account? Sign In
          </Text>
        </Link>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 80,
    backgroundColor: "#0f172a",
    borderRadius: 6,
  },
  form: {
    gap: 20,
    width: Dimensions.get("screen").width,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
