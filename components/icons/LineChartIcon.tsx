import { Path, SvgProps } from "react-native-svg";

import SvgIcon from "./SvgIcon";

export default function LineChartIcon(props: SvgProps) {
  return (
    <SvgIcon {...props}>
      <Path d="M3 3V21H21" />
      <Path d="M19 9L14 14L10 10L7 13" />
    </SvgIcon>
  );
}
