// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVqAuzk57WfMKRLwOWslzsTIdXejtjIvg",
  authDomain: "blog-3d910.firebaseapp.com",
  projectId: "blog-3d910",
  storageBucket: "blog-3d910.appspot.com",
  messagingSenderId: "767818777600",
  appId: "1:767818777600:web:55ec59c7e97f495f4404e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);