import { cva, VariantProps } from "class-variance-authority";
import { Text as T, TextProps } from "react-native";

import cn from "../../lib/cn";

const textStyles = cva("", {
  variants: {
    variant: {
      default: "text-sm",
      muted: "text-sm text-gray-500",
      header: "text-primary text-2xl font-extrabold tracking-tight",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props extends TextProps, VariantProps<typeof textStyles> {}

export default function Text({
  className,
  variant,
  children,
  ...props
}: Props) {
  return (
    <T className={cn(textStyles({ variant, className }))} {...props}>
      {children}
    </T>
  );
}
