import { styles } from "./styles";
import React from "react";
import { Button, View } from "react-native";

const ButtonSubmit = () => {
  return (
    <View style={styles.btnContainer}>
      <Button title="Entrar" onPress={() => null} />
    </View>
  );
};
export default ButtonSubmit;