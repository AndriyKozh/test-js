//task 9/41
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//   // Change code above this line
// };
// console.log(credentials);
// console.log(emailInputName);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// // Change code below this line
// for (let key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// const keys = [];

// const values = [];

//task 11/41
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

//task 12/41
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (let key in object) {
//     console.log(object.hasOwnProperty(key));
//     propCount += object.hasOwnProperty(key);
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//task 14/41

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   let a = Object.keys(object);
//   console.log(a.length);
//   propCount = a.length;
//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//task 15/41

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let resultArray = Object.values(salaries);
//   // Change code below this line
//   for (const salarie of resultArray) {
//     totalSalary += salarie;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

//task 17/41

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//task 18/41

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// let addPrice;
// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       addPrice = product.price;
//     }
//   }

//   // Change code above this line
//   return addPrice;
// }

// console.log(getProductPrice('Droid'));

//task 19/41

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let result = [];
//   let resTwo;

//   for (const product of products) {
//     if ('name' === propName) {
//       result.push(product.name);
//     } else if ('quantity' === propName) {
//       result.push(product.quantity);
//     } else if ('price' === propName) {
//       result.push(product.price);
//     }
//   }

//   return result;
// }

// console.log(getAllPropValues('name')); //["Radar", "Scanner", "Droid", "Grip"]

// Task 20/ 41

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalCost = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalCost = product.price * product.quantity;
//     }
//   }
//   return totalCost;
//   // Change code above this line
// }
// console.log(calculateTotalPrice('Radar'));

//task 23/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(icon);
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
// ];

// for (const { title, author, rating } of books) {
//   console.log(`${title} and ${author} and ${rating}`);
// }

//25/41

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     low: lowToday,
//     high: highToday,
//   },
//   tomorrow: {
//     tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     highTomorrow,
//     lowTomorrow,
//   },
// } = forecast;

// console.log(lowTomorrow);

//26/41
// function calculateMeanTemperature(forecast) {
//   // Change code above this line
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } })
// );

//28/41
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];

// const a = Math.max(...allScores);
// const b = Math.min(...allScores);
// console.log(`max number: ${a} and min number ${b}`);

//29/41

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

//30/41

// function makeTask(date) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   let text = date;
//   const solution = { category, priority, ...text, completed };

//   // Change code above this line
//   return solution;
// }

// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));

//32/41

// Change code below this line
// function addOverNum(rest, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (rest < arg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

//33/41

// Change code below this linere
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (const result of args) {
//     if (array.includes(result)) {
//       matches.push(result);
//     }
//   }
//   return matches;
//   // Change code above this line
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// 34/41

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// console.log(bookShelf.removeBook('Haze'));
// console.log(bookShelf.getBooks());
// bookShelf.getBooks();

//35/41

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     console.log(newName);
//     const bookIndex = this.books.indexOf(oldName);
//     console.log(bookIndex);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books;
//   },
// };

// console.log(bookShelf.updateBook('The last kingdom', 'Dune'));

//41/41

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let remuveName of this.potions) {
//       console.log(remuveName.name);
//       let a = this.potions.indexOf(remuveName);
//       console.log(a);
//       if (remuveName.name === potionName) {
//         this.potions.splice(a, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let updateResult of this.potions) {
//       if (oldName === updateResult.name) {
//         updateResult.name = newName;
//       }
//     }
//   },
// };

// console.table(atTheOldToad.addPotion({ name: 'Stone skin', price: 520 }));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// // console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
// console.table(atTheOldToad);
