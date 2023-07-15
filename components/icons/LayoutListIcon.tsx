import { Path, SvgProps } from "react-native-svg";

import SvgIcon from "./SvgIcon";

export default function LayoutListIcon(props: SvgProps) {
  return (
    <SvgIcon {...props}>
      <Path d="M10 14H3V21H10V14Z" />
      <Path d="M10 3H3V10H10V3Z" />
      <Path d="M14 4H21" />
      <Path d="M14 9H21" />
      <Path d="M14 15H21" />
      <Path d="M14 20H21" />
    </SvgIcon>
  );
}
