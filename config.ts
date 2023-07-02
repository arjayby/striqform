import Constants from "expo-constants";

import { AppConfig } from "./app.config";

export const { SUPABASE_KEY } = Constants.manifest?.extra as AppConfig;
