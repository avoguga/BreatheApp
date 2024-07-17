import { AccountDTO } from "@/dtos/create-account-dto";
import { authentication } from "@/infra/firebase";
import { useLanguageStore } from "@/infra/language";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import strings from "./utils/strings";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const language = useLanguageStore((state) => state.language);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const accountDTO: AccountDTO = { email, password };
    setLoading(true);
    try {
      await authentication.login(accountDTO);
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeTabs" as never }],
      });
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/imgs/login-car.png")}
        style={styles.image}
      />
      <Text style={styles.title}>{strings[language].loginTitle}</Text>
      <TextInput
        style={styles.input}
        placeholder={strings[language].emailPlaceholder}
        placeholderTextColor="#7D7D7D"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder={strings[language].passwordPlaceholder}
        placeholderTextColor="#7D7D7D"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword" as never)}
        style={styles.anchors}
      >
        <Text style={styles.forgotPassword}>
          {strings[language].forgotPassword}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.anchors}
        onPress={() => {
          navigation.navigate("Register" as never);
        }}
      >
        <Text style={styles.register}>{strings[language].registerPrompt}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Text style={styles.buttonText}>{strings[language].loginButton}</Text>
        )}
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
