import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import Auth from "../components/Auth";

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <>
      <Auth />
      <Slot />
      <StatusBar style="dark" />
    </>
  );
}
