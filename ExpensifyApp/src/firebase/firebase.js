import * as firebase from 'firebase';

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

const database = firebase.database();

database.ref().set({
    name: 'Camha Nguyen',
    age: 28,
    isSingle: false,
    location: {
        city: 'San Jose',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed,', e);
});

// database.ref().set('This is my data.');

// database.ref('age').set(29);
// database.ref('location/city').set('Austin');

database.ref('attributes').set({
    height: 152,
    weight: 105
}).then(() => {
    console.log('Second set call worked.');
}).catch((e) => {
    console.log('Things didnt work for the second error', e);
});

console.log('I made a request to change the data.');
