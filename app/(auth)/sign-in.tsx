import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button, Link, Separator, Text, TextInput } from "../../components/ui";
import { supabase } from "../../lib/supabase";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
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

  const handleGoToSignUp = () => {
    setEmail("");
    setPassword("");
    router.push("/sign-up");
  };

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <View className="items-center justify-center flex-1 h-screen">
        <View className="w-20 h-20 mb-8 rounded-md bg-primary" />
        <Text variant="header" className="mb-16">
          Welcome Back
        </Text>
        <View className="w-screen pl-5 pr-5 mb-16">
          <Text variant="muted" className="mb-4">
            Enter your email and password to sign in your account
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
          <Button className="mb-4" fullWidth title="Sign In with Email" />
          <Separator centerText="OR CONTINUE WITH" />
          <Button
            className="mt-4"
            fullWidth
            variant="secondary"
            title="Sign In with Apple"
          />
        </View>
        <Link
          title="Don't have an account? Sign up"
          onPress={handleGoToSignUp}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
