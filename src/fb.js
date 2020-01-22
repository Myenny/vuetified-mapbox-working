import firebase from 'firebase/app'
import 'firebase/firestore'
require('firebase/auth')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCLyusIISZ2SEhcK7g_Qi5EN2p9qZavADc",
  authDomain: "idfk-happy.firebaseapp.com",
  databaseURL: "https://idfk-happy.firebaseio.com",
  projectId: "idfk-happy",
  storageBucket: "idfk-happy.appspot.com",
  messagingSenderId: "134563355927",
  appId: "1:134563355927:web:6bcad8ae7d235d0bdbab52",
  measurementId: "G-377VN8HHDE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default db;