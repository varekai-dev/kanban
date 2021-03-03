import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWtTRMcxO8mfYn3KRnoI2-JrrQ-3TTB0k",
  authDomain: "kanban-7db22.firebaseapp.com",
  databaseURL: "https://kanban-7db22-default-rtdb.firebaseio.com",
  projectId: "kanban-7db22",
  storageBucket: "kanban-7db22.appspot.com",
  messagingSenderId: "389426149415",
  appId: "1:389426149415:web:fb5fa5150a5dbb4fee7602",
  measurementId: "G-6B4SJ3EFNQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
