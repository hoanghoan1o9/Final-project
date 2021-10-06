import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUZOezRpuEcGTgprk6IPx8m-1LZbmFahk",
  authDomain: "final-113b8.firebaseapp.com",
  projectId: "final-113b8",
  storageBucket: "final-113b8.appspot.com",
  messagingSenderId: "899180420556",
  appId: "1:899180420556:web:156ee72c55d11206095169",
  measurementId: "G-PTSQ33YMEK",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
