import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button, Link, Separator, Text, TextInput } from "../../components/ui";
import { supabase } from "../../lib/supabase";

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithEmail = async () => {
    const { error, data } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log({ error, data });

    if (data.user) {
      if (data.user.identities.length) {
        Alert.alert("Please confirm your email.");
      } else {
        Alert.alert("This email is already signed up. Sign in instead?");
      }
    }
    if (error) Alert.alert(error.message);
  };

  const handleSetEmail = (text: string) => {
    setEmail(text);
  };

  const handleSetPassword = (text: string) => {
    setPassword(text);
  };

  const handleGoToSignUp = () => {
    setEmail("");
    setPassword("");
    router.push("/sign-in");
  };

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <View className="items-center justify-center flex-1 h-screen">
        <View className="w-20 h-20 mb-8 rounded-md bg-primary" />
        <Text variant="header" className="mb-16">
          Create Your Account
        </Text>
        <View className="w-screen pl-5 pr-5 mb-16">
          <Text variant="muted" className="mb-4">
            Enter your email and password to create your account
          </Text>
          <TextInput
            className="mb-4"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            value={email}
            onChangeText={handleSetEmail}
          />
          <TextInput
            isPassword
            className="mb-4"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="visible-password"
            placeholder="Password"
            textContentType="password"
            value={password}
            onChangeText={handleSetPassword}
          />
          <Button className="mb-4" fullWidth title="Sign Up with Email" />
          <Separator centerText="OR CONTINUE WITH" />
          <Button
            className="mt-4"
            fullWidth
            variant="secondary"
            title="Sign Up with Apple"
          />
        </View>
        <Link
          title="Already have an account? Sign in"
          onPress={handleGoToSignUp}
        />
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
