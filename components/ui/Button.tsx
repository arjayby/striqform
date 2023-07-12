import { cva, VariantProps } from "class-variance-authority";
import { Pressable, PressableProps, Text } from "react-native";

import cn from "../../lib/cn";

const buttonStyles = cva(
  "p-3 rounded-md border focus:opacity-80 active:opacity-80",
  {
    variants: {
      variant: {
        primary: "bg-primary border-primary",
        secondary: "bg-secondary border-gray-200",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const textStyles = cva("text-center font-semibold", {
  variants: {
    variant: {
      primary: "text-secondary",
      secondary: "text-primary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonStyles> {
  title?: string;
}

export default function Button({
  className,
  variant,
  fullWidth,
  title,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={cn(buttonStyles({ variant, fullWidth, className }))}
      {...props}
    >
      <Text className={cn(textStyles({ variant }))}>{title}</Text>
    </Pressable>
  );
}
