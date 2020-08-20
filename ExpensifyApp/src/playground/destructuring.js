//
// Object destructuring
//
// const person = {
//   name: 'Camha',
//   age: 28,
//   location: {
//       city: 'San Jose',
//       temp: 102
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { title, author } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`The book ${title} is published by ${publisherName}`);

//
// Array destructuring
//

// const address = ['1060 Marsh Road', 'Menlo Park', 'California', '94025'];
// const [, city, state = 'Texas'] = address;
// console.log(`You are in ${city}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
