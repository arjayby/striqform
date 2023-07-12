import { Pressable, PressableProps } from "react-native";

import Text from "./Text";

interface Props extends PressableProps {
  title: string;
}

export default function Link({ title, ...props }: Props) {
  return (
    <Pressable {...props}>
      <Text variant="muted" className="text-center underline">
        {title}
      </Text>
    </Pressable>
  );
}
