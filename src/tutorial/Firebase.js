import firebase from "firebase"

const config = {
  apiKey: "AIzaSyDmWPin8oBUnooEuk5HgWaV-kPl2pWs0Hw",
  authDomain: "zodongo-foods.firebaseapp.com",
  databaseURL: "https://zodongo-foods.firebaseio.com",
  projectId: "zodongo-foods",
  storageBucket: "zodongo-foods.appspot.com",
  messagingSenderId: "284397086378",
  appId: "1:284397086378:web:15bad9975f464f8b6952d3",
  measurementId: "G-CJ4L5Y4FVJ"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();


export default firebase