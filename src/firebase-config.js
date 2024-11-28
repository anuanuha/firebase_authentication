import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCGOF00siIrOoyc1CtTMPYIUWSAn9Xm2Rg",
    authDomain: "fir-authentication-108c8.firebaseapp.com",
    projectId: "fir-authentication-108c8",
    storageBucket: "fir-authentication-108c8.appspot.com",
    messagingSenderId: "9854679443",
    appId: "1:9854679443:web:7ca8bc9779e6c030291066",
    measurementId: "G-P4LNTJ63BQ"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);