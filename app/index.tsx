import { useRootNavigationState, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { supabase } from "../lib/supabase";
import { useAuthStore } from "../store";

export default function Index() {
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  const isInitialized = useAuthStore((state) => state.isInitialized);
  const session = useAuthStore((state) => state.session);
  const completeInitialization = useAuthStore(
    (state) => state.completeInitialization
  );
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    if (!navigationState?.key || !isInitialized) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!session && !inAuthGroup) {
      router.replace("/sign-in");
    } else if (session) {
      router.replace("/home");
    }
  }, [session, navigationState?.key, segments, isInitialized]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      completeInitialization();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      completeInitialization();
    });

    return () => subscription.unsubscribe();
  }, []);

  return <ActivityIndicator />;
}
