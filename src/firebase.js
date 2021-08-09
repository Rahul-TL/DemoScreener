import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMKduEbzOXeKRkbeMA0xc6e--vUceLaqc",
    authDomain: "stock-app-d1be2.firebaseapp.com",
    projectId: "stock-app-d1be2",
    storageBucket: "stock-app-d1be2.appspot.com",
    messagingSenderId: "414857159857",
    appId: "1:414857159857:web:9eb42feccb024e4799ee90",
    measurementId: "G-6YBHYVKCQ5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;