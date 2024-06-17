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

const ForgotPassword = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert(
        "Erro",
        "Por favor, insira seu e-mail para recuperar a senha."
      );
      return;
    }

    try {
      await authentication.resetPassword(email);
      Alert.alert(
        "Sucesso",
        "Se o e-mail estiver cadastrado, um e-mail de redefinição de senha foi enviado."
      );
      navigate("Login" as never);
    } catch (error) {
      let errorMessage =
        "Não foi possível enviar o e-mail de redefinição de senha.";

      if (error instanceof Error) {
        if ((error as any).code === "auth/invalid-email") {
          errorMessage = "O formato do e-mail é inválido.";
        } else if ((error as any).code === "auth/user-not-found") {
          errorMessage = "Usuário não encontrado com este e-mail.";
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
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#7D7D7D"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Recuperar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.anchors}
        onPress={() => {
          navigate("Login" as never);
        }}
      >
        <Text style={styles.register}>
          Lembrou a senha? <Text style={styles.loginLink}>Faça login.</Text>
        </Text>
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
  register: {
    color: "#FFF",
    textAlign: "left",
    width: "100%",
    marginBottom: 20,
  },
  loginLink: {
    textDecorationLine: "underline",
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

export { ForgotPassword };
