import { create } from "zustand";

import { Session } from "@supabase/supabase-js";

type AuthStore = {
  isInitialized: boolean;
  session: Session | null;
  completeInitialization: () => void;
  setSession: (session: Session) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  isInitialized: false,
  session: null,
  completeInitialization: () => set(() => ({ isInitialized: true })),
  setSession: (session) => set(() => ({ session })),
}));

export default useAuthStore;
