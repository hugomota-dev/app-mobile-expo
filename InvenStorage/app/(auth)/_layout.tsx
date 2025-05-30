import { Redirect, Slot } from "expo-router";
import { useAuth } from "../../src/context/AuthContext";

export default function ProtectedLayout() {
  const { token } = useAuth();

  // Se não estiver logado, volta pro login
  if (!token) {
    return <Redirect href="/" />;
  }

  // Se estiver logado, renderiza as rotas protegidas
  return <Slot />;
}
