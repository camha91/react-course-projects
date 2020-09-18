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

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: '15000',
//     createdAt: 578942754375
// });


// database.ref('notes/-MHO5G3I2EZvkTiKQyRH').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

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
