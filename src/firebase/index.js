
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAtjJw1yYHvGVG5IA35V3brTBhfn2KkoBY",
  authDomain: "entrance-777.firebaseapp.com",
  databaseURL: "https://entrance-777-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "entrance-777",
  storageBucket: "entrance-777.appspot.com",
  messagingSenderId: "562718169521",
  appId: "1:562718169521:web:45e3f529999c7db367c590"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
