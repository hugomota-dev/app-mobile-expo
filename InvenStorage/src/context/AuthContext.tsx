// context/AuthContext.tsx
import { createContext, useContext, useState } from "react";
import { useRouter } from "expo-router";

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  function signIn(username: string, password: string) {
    // Aqui vai a lógica real (API, validação, etc.)
    if (username === "admin" && password === "123") {
      setToken("fake-token-123");
      router.push("/(auth)/home");
    } else {
      alert("Usuário ou senha inválidos.");
    }
  }

  function signOut() {
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, setToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
