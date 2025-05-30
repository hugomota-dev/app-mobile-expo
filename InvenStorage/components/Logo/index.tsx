import { Image } from "react-native";
import { styles } from "./styles";

export default function Login() {
  const asset = require("../assets/images/logo.png");

  return (
    <>
      <Image style={[styles.logo, { resizeMode: "contain" }]} source={asset} />
    </>
  );
}
