// components/Input/index.tsx
import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export function Input({
  icon,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.inputContainer}>
      <View>
        <Feather name={icon} size={24} color={"black"} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
