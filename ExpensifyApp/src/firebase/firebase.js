// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAW8UsuyZimeD9nJD3pNYQUfE-Y1M0s4sI",
    authDomain: "expensify-c49be.firebaseapp.com",
    databaseURL: "https://expensify-c49be.firebaseio.com",
    projectId: "expensify-c49be",
    storageBucket: "expensify-c49be.appspot.com",
    messagingSenderId: "155869674948",
    appId: "1:155869674948:web:672aee258303e3d1a57891",
    measurementId: "G-9DPBNDPVMY"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Camha Nguyen'
});
