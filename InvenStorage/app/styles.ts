import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap:20,
    backgroundColor: "#f0f4f8",
  },
  logo: {
    width: 200,
    height: 200,
  },
  textTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#111827",
  },
  button: {
    width:"80%",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#56b04c",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
