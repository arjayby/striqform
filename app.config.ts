import "dotenv/config";

export interface AppConfig {
  SUPABASE_KEY: string;
}

export default {
  scheme: "acme",
  web: {
    bundler: "metro",
  },
  ios: {
    config: {
      usesNonExemptEncryption: false,
    },
  },
  name: "striqform",
  slug: "striqform",
  extra: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
};
