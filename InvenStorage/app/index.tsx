import {
  Text,
  KeyboardAvoidingView,
  View,
  Platform,
  Image,
} from "react-native";
import { styles } from "./styles";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../src/context/AuthContext"; // Ajuste esse caminho se necessário
import { useState } from "react";

const asset = require("../assets/images/logo.png");

export default function Login() {
  const { signIn } = useAuth(); // hook do contexto
  const [username, setUsername] = useState(""); // estado para o campo usuário
  const [password, setPassword] = useState(""); // estado para o campo senha

  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      style={styles.container}
    >
      <Image style={[styles.logo, { resizeMode: "contain" }]} source={asset} />
      <View style={styles.loginBox}>
        <Text style={styles.textTitle}>Faça seu Login</Text>

        {/* Input do usuário */}
        <Input
          icon="user"
          placeholder="Usuário *"
          value={username}
          onChangeText={setUsername}
        />

        {/* Input da senha */}
        <Input
          icon="key"
          placeholder="Senha *"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Botão de login */}
        <Button title="Entrar" onPress={() => signIn(username, password)} />
      </View>
    </KeyboardAvoidingView>
  );
}
