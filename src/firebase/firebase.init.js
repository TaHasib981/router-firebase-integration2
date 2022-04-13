import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMNKhgdbaJADQlvF150JopSa_C_zV5CKk",
  authDomain: "router-firebase-integrat-2d633.firebaseapp.com",
  projectId: "router-firebase-integrat-2d633",
  storageBucket: "router-firebase-integrat-2d633.appspot.com",
  messagingSenderId: "663861230703",
  appId: "1:663861230703:web:cfb54adb6fe207d572e19a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;