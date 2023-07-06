import { View } from "react-native";

type SpaceProps = {
  height?: number;
  width?: number;
};

export default function Space({ height = 0, width = 0 }: SpaceProps) {
  return <View style={{ height, width }}></View>;
}
