// Init component should be inside (auth) folder to make (tabs) navigation work

import React from "react";
import { View } from "react-native";

import { Text } from "../../components/ui";

export default function Init() {
  return (
    <View className="items-center justify-center h-screen">
      <View className="w-20 h-20 mb-8 rounded-md bg-primary" />
      <Text variant="header">striqform</Text>
    </View>
  );
}
