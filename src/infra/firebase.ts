import { CreateAccountDTO } from '@/dtos/create-account-dto';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { config } from './firebase.config';

const app = firebase.initializeApp(config);

const authentication = {
  createAccount: (accountDTO: CreateAccountDTO) =>
    auth().createUserWithEmailAndPassword(
      accountDTO.email,
      accountDTO.password
    ),
  login: (accountDTO: CreateAccountDTO) =>
    auth().signInWithEmailAndPassword(accountDTO.email, accountDTO.password),
};

export { app, authentication };
