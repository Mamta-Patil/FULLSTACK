// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyA97pDzAclNGLHQL6uXagfFw4idvPXwBa4
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=auth-7960f
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=auth-7960f
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=auth-7960f
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1011185700142
// NEXT_PUBLIC_FIREBASE_APP_ID=1:1011185700142:web:f370d56976b712f45b7ebf


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyA85CoP_jHPecLbaih0aWKP15lAxV1UFcg",
  authDomain: "auth-fbd95.firebaseapp.com",
  projectId: "auth-fbd95",
  storageBucket: "auth-fbd95.firebasestorage.app",
  messagingSenderId: "1013242760265",
  appId: "1:1013242760265:web:6118752913b8909434c398",
  measurementId: "G-SCNRSGNF56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// const firebaseConfig = {
//   apiKey: "AIzaSyA97pDzAclNGLHQL6uXagfFw4idvPXwBa4",
//   authDomain: "my-otp-project-auth-7960f.firebaseapp.com",
//   projectId: "my-otp-project-33be0",
//   storageBucket: "my-otp-project-auth-7960f.firebasestorage.app",
//   messagingSenderId: "1011185700142",
//   appId: "1:1011185700142:web:f370d56976b712f45b7ebf",
//   measurementId: "G-E6Q1J7S51P"
// };  

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);