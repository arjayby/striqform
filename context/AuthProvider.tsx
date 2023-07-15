import { useRouter, useSegments } from "expo-router";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { Session } from "@supabase/supabase-js";

import { supabase } from "../lib/supabase";

const AuthContext = createContext<Session>(null);

export const useAuth = () => useContext(AuthContext);

const useProtectedRoute = (session: Session, isInitiliazed: boolean) => {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!isInitiliazed) {
      // Display Init component temporarily while still loading
      router.replace("/init");
    } else if (!session && !inAuthGroup) {
      router.replace("/sign-in");
    } else if (session && inAuthGroup) {
      router.replace("/home");
    }
  }, [session, segments, isInitiliazed]);
};

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session>(null);
  const [isInitiliazed, setIsInitialized] = useState(false);

  useProtectedRoute(session, isInitiliazed);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsInitialized(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsInitialized(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}
