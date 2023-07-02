import { SafeAreaView, Text } from "react-native";

import { Button } from "../components/ui";
import { supabase } from "../lib/supabase";

export default function Home() {
  const handleSignOut = () => {
    supabase.auth.signOut();
  };
  return (
    <SafeAreaView>
      <Text>test test test test test test </Text>
      <Button title="Logout" pressable={{ onPress: handleSignOut }} />
    </SafeAreaView>
  );
}
