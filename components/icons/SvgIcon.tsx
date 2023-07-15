import { PropsWithChildren } from "react";
import Svg, { SvgProps } from "react-native-svg";

interface Props extends SvgProps, PropsWithChildren {}

export default function SvgIcon({ children, ...props }: Props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </Svg>
  );
}
