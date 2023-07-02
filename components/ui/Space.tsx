import { View } from "react-native";

type SpaceProps = {
  height: number;
};

export default function Space({ height }: SpaceProps) {
  return <View style={{ height }}></View>;
}
