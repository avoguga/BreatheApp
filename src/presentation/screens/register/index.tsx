import { AccountDTO } from "@/dtos/create-account-dto";
import { authentication } from "@/infra/firebase";
import { useLanguageStore } from "@/infra/language";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import strings from "./utils";

const Register = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const language = useLanguageStore((state) => state.language);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", strings[language].passwordsDontMatch);
      return;
    }

    const accountDTO: AccountDTO = { email, password, name };
    setLoading(true);
    try {
      await authentication.createAccount(accountDTO);
      Alert.alert("Sucesso", strings[language].registrationSuccess);
      navigate("Login" as never);
    } catch (error) {
      Alert.alert("Erro", strings[language].registrationError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings[language].registerTitle}</Text>
      <TextInput
        style={styles.input}
        placeholder={strings[language].namePlaceholder}
        placeholderTextColor="#7D7D7D"
        value={name}
        onChangeText={setName}
      />
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
      <TextInput
        style={styles.input}
        placeholder={strings[language].confirmPasswordPlaceholder}
        placeholderTextColor="#7D7D7D"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        onPress={() => navigate("Login" as never)}
        style={styles.anchors}
      >
        <Text style={styles.register}>
          {strings[language].alreadyHaveAccount}{" "}
          <Text style={styles.loginLink}>{strings[language].loginLink}</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <Text style={styles.buttonText}>
              {strings[language].registerButton}
            </Text>
          )}
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },
  register: {
    color: "#FFF",
    textAlign: "left",
    width: "100%",
    marginBottom: 10,
  },
  loginLink: {
    textDecorationLine: "underline",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
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

export { Register };
