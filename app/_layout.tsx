import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <>
      <Slot />
      <StatusBar style="dark" />
    </>
  );
}
