import { AccountDTO } from "@/dtos/create-account-dto";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { config } from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const authentication = {
  createAccount: async (accountDTO: AccountDTO) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        accountDTO.email,
        accountDTO.password
      );
      const user = userCredential.user;

      if (user) {
        await firestore().collection("users").doc(user.uid).set({
          name: accountDTO.name,
          email: accountDTO.email,
        });
      }

      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  },
  login: (accountDTO: AccountDTO) =>
    auth().signInWithEmailAndPassword(accountDTO.email, accountDTO.password),
  resetPassword: (email: string) => auth().sendPasswordResetEmail(email),
};

export { authentication };
