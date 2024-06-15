import { AccountDTO } from '@/dtos/create-account-dto';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { config } from './firebase.config';

const apps = firebase.apps;

if (!apps.length) {
  firebase.initializeApp(config);
}

const authentication = {
  createAccount: (accountDTO: AccountDTO) =>
    auth().createUserWithEmailAndPassword(
      accountDTO.email,
      accountDTO.password
    ),
  login: (accountDTO: AccountDTO) =>
    auth().signInWithEmailAndPassword(accountDTO.email, accountDTO.password),
};

export { authentication };
