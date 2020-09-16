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

database.ref().on('value', (snapshot) => {
   const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });
//
// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Camha Nguyen',
//     age: 28,
//     stressLevel: 5,
//     job: {
//         title: 'Clinical Lab Technologist',
//         company: 'CCRM SF'
//     },
//     location: {
//         city: 'San Jose',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed,', e);
// });
//
// database.ref().update({
//    stressLevel: 8,
//    job: {
//        title: 'Software developer',
//        company: 'Google'
//    },
//     'location/city': 'Mountain View'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });
