import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";
import {
  Pressable,
  Text,
  TextInput as TI,
  TextInputProps,
  View,
} from "react-native";

import cn from "../../lib/cn";

const textInputStyles = cva(
  "h-10 p-2 text-sm text-gray-500 border border-gray-200 rounded-md"
);

interface Props extends TextInputProps, VariantProps<typeof textInputStyles> {
  isPassword?: boolean;
}

export default function TextInput({
  className,
  isPassword = false,
  ...props
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleIsPasswordVisible = () => {
    setIsPasswordVisible((state) => !state);
  };

  if (isPassword) {
    return (
      <View className="flex-row items-center">
        <TI
          // gray-500
          placeholderTextColor="#6b7280"
          className={cn(
            textInputStyles({ className }),
            "flex-1 border-r-0 rounded-r-none"
          )}
          secureTextEntry={!isPasswordVisible}
          {...props}
        />
        <Pressable
          className={cn(
            textInputStyles({ className }),
            "items-center p-[10.5px] border border-l-0 border-gray-200 rounded-md rounded-l-none"
          )}
          onPress={handleToggleIsPasswordVisible}
        >
          <Text>{isPasswordVisible ? "👓" : "🕶️"}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <TI
      // gray-500
      placeholderTextColor="#6b7280"
      className={cn(textInputStyles({ className }))}
      {...props}
    />
  );
}
