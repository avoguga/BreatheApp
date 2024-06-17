import { AccountDTO } from "@/dtos/create-account-dto";
import { authentication } from "@/infra/firebase";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const accountDTO: AccountDTO = { email, password };
    try {
      await authentication.login(accountDTO);
      navigate("HomeTabs" as never);
    } catch (error) {
      let errorMessage =
        "Não foi possível realizar o login. Verifique suas credenciais e tente novamente.";

      if (error instanceof Error) {
        if ((error as any).code === "auth/invalid-email") {
          errorMessage = "O formato do e-mail é inválido.";
        } else if ((error as any).code === "auth/wrong-password") {
          errorMessage = "Senha incorreta. Verifique suas credenciais.";
        }
      }

      Alert.alert("Erro", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/imgs/login-car.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Logue na sua conta</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#7D7D7D"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#7D7D7D"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => {
          /* implementar lógica de recuperação de senha */
        }}
        style={styles.anchors}
      >
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.anchors}
        onPress={() => {
          navigate("Register" as never);
        }}
      >
        <Text style={styles.register}>
          Ainda não tem uma conta? Registre-se.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5BE00",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 10,
  },
  anchors: {
    width: "100%",
    alignItems: "flex-start",
  },
  forgotPassword: {
    color: "#FFF",
    textAlign: "left",
    width: "100%",
    marginBottom: 20,
  },
  register: {
    color: "#FFF",
    textAlign: "left",
    width: "100%",
    marginBottom: 40,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { Login };
