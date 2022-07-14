import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'; 

const firebaseConfig = {
    // apiKey: "AIzaSyCp19HHhya-wbsQ87IMNPVAkHTVAseTod4",
    // authDomain: "login-test-6d572.firebaseapp.com",
    // projectId: "login-test-6d572",
    // storageBucket: "login-test-6d572.appspot.com",
    // messagingSenderId: "751034160108",
    // appId: "1:751034160108:web:8006717006f1b0ee0da6c9",
    // measurementId: "G-QH6D2CY83C"
    apiKey: "AIzaSyCghu_My8yfVjmtsiXUJshVvtxzjk3zQ94",
    authDomain: "bit-art-gallery.firebaseapp.com",
    projectId: "bit-art-gallery",
    storageBucket: "bit-art-gallery.appspot.com",
    messagingSenderId: "839621438660",
    appId: "1:839621438660:web:c3607180af1a3dee24ad91",
    measurementId: "G-N0V603SYDH"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)
  