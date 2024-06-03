import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseInitialization = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInitialization;
