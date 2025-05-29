import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Input } from "../components/Input"

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Text style={styles.textTitle}>Faça seu Login</Text>
      {/* <TextInput style={styles.input} placeholder="Usuário *" />
      <TextInput style={styles.input} placeholder="Senha *" secureTextEntry /> */}
      <Input icon="user" placeholder="Usuário *" />
      <Input icon="key" placeholder="Senha *" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
