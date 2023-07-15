import { Path, SvgProps } from "react-native-svg";

import SvgIcon from "./SvgIcon";

export default function DumbbellIcon(props: SvgProps) {
  return (
    <SvgIcon {...props}>
      <Path d="M6.5 6.5L17.5 17.5" />
      <Path d="M21 21L20 20" />
      <Path d="M3 3L4 4" />
      <Path d="M18 22L22 18" />
      <Path d="M2 6L6 2" />
      <Path d="M3 10L10 3" />
      <Path d="M14 21L21 14" />
    </SvgIcon>
  );
}
