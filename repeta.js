// let element = '50.456'
// const result = Number.parseInt(element)
// console.log(result)

// let numbNext = 80.709
// const resulte = parseFloat(numbNext)
// console.log(resulte)

// let run = 5.38954
// const a = Number(run.toFixed(3))
// const b = Number.parseInt(run)
// 	console.log(b)
// console.log(a)

// const base = 3
// const power = 4
// console.log(Math.pow(base, power))

// let biz = prompt("давай число")
// biz = Number(biz)
// let goNumb = prompt("Давай степінь")
// goNumb = Number(goNumb)
// console.log(Math.pow(biz, goNumb))
// let max = prompt('Давай максимальне число число')
// max = Number(max)
// let min = prompt('Давай мінімальне число')
// min = Number(min)
// const result = (Math.random()*(max - min)+ min)
// console.log(Math.round(result) )

// const colors = ['red', 'green', 'orange', 'deeppink']
// const max = colors.length -1
// const min = 0
// const result = Math.round(Math.random() * (max- min) + min)
// const color = colors[result]
// console.log(color)
// document.body.style.backgroundColor = color

// const brand = "Samsung"
// const a = brand.toLowerCase()
// console.log(a)

// function a(b, c) {

// 	let result = b.includes(c)
// 	return result
// }
// let d = a('і повертає результат перевірки. Слова в рядку', 'результат')

// console.log(d)

// for (let i = 0; i <= 10; i += 1){
// 	console.log(i)
// }
// console.log('End')

// let a = 10
// let b = 1

// console.log(b)

// const currencyMin = 500
// const currencyMax = 5000
// const employees = 10
// let totalSalary = 0

// for (let i = 0; i < employees; i += 1){
// let solary = Math.round(Math.random() * (currencyMax - currencyMin) + currencyMin)
// 	console.log(`Працівник ${i} получає зп - ${solary}`)
// 	totalSalary += solary

// }
// console.log("totalSalary: ", totalSalary)

// const min = 5
// const max = 13
// let total = 0
// for (let i = min; i <= max; i += 1){

// 	                            if (i % 2 === 0) {
// 		console.log('Парне: ', i)
// 	} else if (i % 2 !== 0) {
// 		console.log('Не парне ', i)
// 	}
// 	total += i

// }
// console.log('total: ', total)

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// console.log(true && 3); //3

// console.log(false && 3);//3!!!

// console.log(true && 4 && 'kiwi');//kiwi

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3);// true

// console.log(true || 3 || 4);//true

// console.log(true || false || 7);true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0);//0!!!

// console.log(null || (2 && 3) || 4);//3

// const a = 220;
// const b = 180;
// const res = Math.max(a, b)
// console.log(res)

// let total = 0;

// for (let i = 0; i < 10; i = i + 1) {
//   if (i % 2 !== 0) {
//     console.log('Не парне число', i);
//     continue;
//   }

//   console.log('Парне число', i);
//   total += i;
// }2000
// console.log('total: ', total);

// let balance = 10000;
// let payment = prompt('введіть суму заказу');
// let message = payment - balance;
// if (balance >= payment) {
//   20;
//   2000;
//   balance -= payment;
//   console.log(`Покупка успішна! Ваш залишок = ${balance}`);
// } else {
//   console.log(`Недостатньо коштів. бракує ${message}. Поповніть будьласка свій баланс`);
// }

// const totalSpent = 100;
// let payment = 500;
// let discount = 0;
// let res;
// if (totalSpent > 100 && totalSpent < 1000) {
//   console.log('Ваша знижка 2%');
//   discount = 2;
//   let res = (payment / 100) * discount;
//   console.log(`Ваша cума до оплати ${payment - res}грн. Знижка ${discount}%`);
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Ваша знижка 5%');
//   discount = 5;
//   let res = (payment / 100) * discount;
//   console.log(`Ваша cума до оплати ${payment - res}грн. Знижка ${discount}%`);
// } else if (totalSpent > 5000) {
//   console.log('Ваша знижка 10%');
//   discount = 10;
//   let res = (payment / 100) * discount;
//   console.log(`Ваша сума до сплати ${payment - res}грн. Знижка ${discount}%`);
// } else {
//   console.log('Ваша знижка 0%');
// 	console.log(`Ваша сума до оплати ${payment}грню Знижка ${discount}%`);

// }

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if (message.includes('spam') || message.includes('sale')) {
//     result = false;
//   } else {
//     result = true;
//   }
//   // Change code above this line
//   return result;
// }
// checkForSpam('Latest technology news');
// checkForSpam('JavaScript weekly newsletter');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Amazing SalE, only tonight!');
// checkForSpam('Trust me, this is not a spam message');
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('[SPAM] How to earn fast money?');

// const btnAdd = document.querySelector('button[data-add]');
// const valueInput = document.querySelector('input[data-value]');
// let total = 0;
// console.log(btnAdd);
// btnAdd.addEventListener('click', () => {
//   console.log('click hehehe');
//   const value = Number(valueInput.value);
//   console.log(value);
//   total += value;
// 	console.log('total: ', total);

// });
// console.log(5 > 4); //5

// console.log(10 >= '7'); //10

// console.log('2' > '12'); //false

// console.log('2' < '12'); //12

// console.log('4' == 4); //true

// console.log('6' === 6); //falce

// console.log('false' === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false); //true

// console.log('0' === false); //0

// console.log('Papaya' < 'papaya'); //

// console.log('Papaya' === 'papaya'); //papaja

// console.log(undefined == null); //true

// console.log(undefined === null); //false

// const cart = [54, 28, 105, 70, 92, 17, 123];
// let total = 0;
// // for (let i = 0; i < cart.length; i += 1) {
// //   console.log(cart[i]);
// //   total += cart[i];
// // }
// for (const value of cart) {
//   total += value;
// }
// console.log('tottal: ', total);

// const cart = [1, 5, 6, 2, 17, 11, 50];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   if (cart[i] % 2 === 0) {
//     console.log('Парне!!!!');
//     total += cart[i];
//   }
// }
// console.log('total: ', total);

// for (const a of cart) {
//   //   console.log(a);
//   if (a % 2 === 0) {
//     console.log(`${a}- Парне`);
//     total += a;
//   }
// }
// console.log('total: ', total);
// length;

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// const arrawGlobal = [5, 10, 15, 20];

// const calculateTotalPrice = function (item) {
//   let b = 0;
//   for (let a of item) {
//     b += a;
//   }
//   return b;
// };

// let w = calculateTotalPrice(arrawGlobal);
// console.log(w);
// const logins = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// const findLogin = function (allogins, loginToFind) {
//   return allogins.includes(loginToFind) ? `Такий користувач є` : 'Користувача немає';
// };

// console.log(findLogin(logins, 70));
// console.log(findLogin(logins, 33));
// console.log(findLogin(logins, 90));
// console.log(findLogin(logins, 100));

// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// const numbAdd = [14, -4, 25, 8, 11];

// const res = [...temps];
// res.splice(0, 2);
// console.log(res);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2, 3, 4);

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: usAdd = 54 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(usAdd); // 1308

// const rgb = [200, 255, 100];

// const [red, ...jkhkjh] = rgb;

// console.log(red); // "200"
// console.log(jkhkjh); // [255, 100]

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   return;

//   // І так далі
// }

// console.log(doStuffWithBook('The Last Kingdom', 736, 10283, 8.38, true));
// const a = {
//   b: 2,
//   c: 3,
//   d: 'qwe',
// };
// console.log(...a);

// const fiter = function (array, callback) {
//   for (const el of array) {
//     const a = el;

//     callback(a);
//   }
// };

// // const callback1 = function (value) {
// //   return value >= 4;
// // };

// // console.log(fiter([1, 2, 3, 4, 5, 6], callback1));

// const callback2 = function (text) {
//   if (text >= 3) {
//     return console.log(text);
//   }
// };

// console.log(fiter([1, 2, 3, 4, 5, 6], callback2));

///////////////////////////////ЗАМИКАННЯ
// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} приготує Вам ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff('Андрій');
// mango('пиріжок');
// const polly = makeSheff('Polly');
// polly('burger');

// const myName = function (name) {
//   let a = 123;
//   const myAge = function (age) {
//     console.log(a);
//     console.log(`my name is ${name} and my age ${age} old year and i  wont your ofer`);
//   };
//   return myAge;
// };

// const infoPerson = myName('Andriy');
// infoPerson(33);

//////////////////ОКРУГЛЯТОР//ЗАМИКАННЯМ

// const rounder = function (fix) {
//   const numb = function (number) {
//     return Number(number.toFixed(fix));
//   };
//   return numb;
// };

// const result = rounder(2);
// console.log(result(3.65465654));

////ПРИВАТНІ ДАНІ ...ЗАМИКАННЯМИ

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;
//   const changeBy = function (amount) {
//     salary += amount;
//   };
//   return {
//     raise(amount) {
//       salary += amount;
//     },
//     lower(amount) {
//       salary -= amount;
//     },
//     current() {
//       return `Вихідна зарплата ${employeeName} - ${salary}$`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory('Andriy', 5000);
// console.dir(salaryManager.current());

///ЗАМИКАЄМО ДОСТУП

// const myLibFactory = function () {
//   let value = 0;

//   const add = function (num) {
//     value += num;
//   };

//   return {
//     add: add,
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();

// myLib.add(10);
// console.log(myLib.getValue());

// const a = [1, 2, 3, 4, 6, 7];
// const b = a;
// const c = function (...arr) {
//   console.log(arr);
// };

// c(...a, ...b);

// const a = function (a, b, callback) {
//   return callback(a, b);
// };

// const add = (x, y) => {
//   return x + y;
// };

// console.log(a(2, 3, add));
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return `${pizzaName}${callback} `;
// }
// console.log(makeMessage(makePizza, deliverPizza));

// const a = (a, b, callback) => {
//   return callback(a, b);
// };

// const b = (x, y) => {
//   return x + y;
// };
// console.log(a(4, 3, b));

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(number => console.log(number));

//============= map =============

// const numbers = [5, 10, 15, 20, 25];

// const fnRes = number => number + 2;
// const fnRes2 = number => number - 2;

// const fnLid = (arr, callback) => {
//   const newArr = [];
//   arr.forEach(item => newArr.push(callback(item)));
//   return newArr;
// };
// console.log(fnLid(numbers, fnRes));
// console.log(fnLid(numbers, fnRes2));

// console.log(
//   fnLid(
//     ['www.google.com', 'www.facebook.com', 'www.amazon.com'],
//     url => `<a href='${url}'>${url}</a>`
//   )
// );

// const myArray = [1, 2, 3];
// console.log(myArray);

// const newArray = myArray.map(el => {
//   return el * 3;
// });

// console.log(newArray);
// console.log(myArray);

// const a = [
//   {
//     name: 'Andriy',
//     age: 32,
//     info: true,
//   },
//   {
//     name: 'Andriy',
//     age: 32,
//     info: true,
//   },
//   {
//     name: 'Andriy',
//     age: 32,
//     info: true,
//   },
// ];

// const b = a.map(el => el.name);
// console.log(b);

//======== filter========;

// const students = [1, 2, 3, 4, 5, 6, 7];

// const b = students.filter(el => el > 4);
// console.log(b);

// // console.log(students);
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// console.log(students.filter(el => el.score <= LOW_SCORE));
// console.log(students.filter(el => el.score >= HIGH_SCORE));

// // const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
// // console.log(average);

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const a = colorPickerOptions.find(el => el.color === '#E91E63');
// console.log(a);

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
// console.log(allAvailable);

// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// });

// console.log(total); // 32

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(Number(Math.round(averageScore)));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 4, 3, 2, 5, 3, 5, 2];

// const res = arr.filter((el, index, arraw) => arraw.indexOf(el) === index);

// console.log(res);

// const numbers = [5, 10, 15, 20, 25];

// const user = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: true,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: true,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: true,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const res = user.map(({ name, email }) => ({ name, email }));

// console.log(res);
// const updatedPlayers = 'Sheree Anthony';

// const a = user.map(player => {
//   if (updatedPlayers === player.name) {
//     return {
//       ...player,
//       ege: player.age + 100,
//     };
//   }
//   return player;
// });

// console.table(a);

// const a = user.map(player =>
//   updatedPlayers === player.name
//     ? {
//         ...player,
//         ege: player.age + 100,
//       }
//     : player
// );

// console.log(a);

// const infoName = 'Sheree Anthony';

// const result = user.map(el => {
//   return infoName === el.name
//     ? {
//         ...el,
//         name: (el.name = 'Andriy'),
//       }
//     : el;
// });

// console.log(result);

// const players = [
//   {
//     id: 'player-1',
//     name: 'Mango',
//     timePlayed: 310,
//     online: false,
//   },
//   {
//     id: 'player-2',
//     name: 'Ostap',
//     timePlayed: 470,
//     online: true,
//   },
//   {
//     id: 'player-3',
//     name: 'Andriy',
//     timePlayed: 230,
//     online: true,
//   },
//   {
//     id: 'player-4',
//     name: 'Roma',
//     timePlayed: 150,
//     online: false,
//   },
//   {
//     id: 'player-1',
//     name: 'Vika',
//     timePlayed: 80,
//     online: true,
//   },
// ];

// const cart = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'nodejs', 'js'] },
//   { id: '003', likes: 8, tags: ['js', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// const res = cart.reduce((acc, item) => [...acc, ...item.tags], []);
// console.log(res);

// const a = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };

// console.log(sortByAscendingBalance(a));

// const cart = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'nodejs', 'js'] },
//   { id: '003', likes: 8, tags: ['js', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// // const res = cart.reduce((acc, item) => [...acc, ...item.tags], []);
// // console.log(res);
// const tagsStart = cart.reduce((acc, tag) => {
//   return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
// }, {});

// console.log(tagsStart);

// const a = n => {
//   return num => {
//     return num + n;
//   };
// };

// const res = a(5);
// console.log(res(4));

// const numbers = [1, 9, 6, 2, 3];
// const result = numbers.reverse();

// console.log(result);

// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });
// const newResult = [...numbers].sort((curEl, nextEl) => nextEl - curEl);
// console.log(newResult);
// const newResults = [...numbers].sort((curEl, nextEl) => curEl - nextEl);
// console.log(newResults);
// console.log(numbers);

// const cart = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const res = [...cart].sort((a, b) => {
//   const result = a.name[0] > b.name[0];
//   if (result) {
//     return 1;
//   }
//   if (!result) {
//     return -1;
//   }
// });

// console.log(res);

// const res = cart.map(el => el.friends).flat(1);

// console.log(res);

// const arr = [1, 2, 3, 5, 4, 5, 6, 3, 1, 3, 5, 5, 3];

// const a = arr
//   .filter((el, asd, array) => {
//     const b = array.indexOf(el) === asd;
//     return b;
//   })
//   .sort((a, b) => b - a);

// console.log(a);

// const a = (a, b) => {
//   b(a, b);
// };

// const c = (x, y) => {
//   return x + y;
// };

// console.log(a(2, 4));

// function getExtremeElements(array) {
//   // Change code below this line
//   const a = [];
//   const b = array.length - 1;
//   a.push(array[0], array[b]);
//   return a;

//   // Change code above this line
// }
// const qwe = [1, 2, 3, 4, 10];

// console.log(getExtremeElements(qwe));

// function greetGuest(greeting) {
//   return console.log(`${greeting}, ${mango.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Полі',
// };

// console.log(greetGuest.call('Ласкаво просимо')); // Ласкаво просимо, Манго.
// // console.log(greetGuest.call(poly, 'З прибуттям')); // З прибуттям, Полі.

// const showTag = function () {
//   'showTag - this', this;
//   console.log(this.tag);
// };

// const user = {
//   tag: 'Mango',
// };

// user.newTag = showTag;

// user.newTag();

// const res = function (color) {
//   console.log(('changeColor -> this', this));
//   this.color = color;
// };

// const hat = {
//   color: 'red',
// };
// res.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// const resultBind = function (value, operation) {
// 	operation(value)
// }

// resultBind(10, res.)

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onAvailable, onNotAvailable) {
//     for (const pizza of pizzaPalace.pizzas) {
//       if (pizzaName === pizza) {
//         return onAvailable(pizzaName);
//       }
//     }
//     return onNotAvailable(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// const objC = {
//   x: 5,
// };

// const objB = Object.create(objC);
// console.log(`'objB'${objB.x}`);
// objB.y = 2;
// console.log(objB.y);

// const objA = Object.create(objB);
// console.log(objA.x);

// const person = new Object({
//   name: 'Maxim',
//   age: 25,
//   greet: function () {
//     console.log('Greet');
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log('Hello');
// };

// console.log(person.sayHello);

// const objC = {
//   x: 5,
// };

// const objB = Object.create(objC);
// console.log(`'objB'${objB.x}`);
// objB.y = 2;
// console.log(objB.y);

// const objA = Object.create(objB);
// console.log(objA.x);

// const dummyObj = Object.create({
//   message: 'це свойство обєкту прототип',
// });
// console.log('dummyObj', dummyObj);
// console.log(dummyObj.message);
// const objA = {
//   a: 1,
// };

// const objB = Object.create(objA);

// objB.b = 2;

// console.log(objB.hasOwnProperty);

// Object.prototype.helloUser = function () {
//   console.log('Hello');
// };
// console.log(objB.helloUser);

// const Car = function (value) {
//   console.log(this);
//   this.a = value;
// };
// const myCar = new Car(5);

// console.log(myCar);

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.seyHi = function () {
//   console.log('Hello');
// };

// Car.prototype.chengePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({ brand: 'audi', model: 'q3', price: 35000 });

// myCar.chengePrice(1000000);
// console.log(myCar);
// const myCar2 = new Car({ brand: 'BMW', model: 'M3', price: 50000 });
// console.log(myCar2);

// const myCar3 = new Car({ brand: 'Skoda', model: 'Octavia', price: 40000 });
// console.log(myCar3);

// const Info = function ({ name, age }) {
//   this.name = name;
//   this.age = age;
// };

// Info.prototype.changeInfo = function (newAge) {
//   this.age = newAge;
// };
// Info.prototype.changeName = function (newName) {
//   this.name = newName;
// };

// const andruy = new Info({ name: 'Andriy', age: 33 });
// andruy.changeInfo(34);
// andruy.changeName('Petro');
// console.log(andruy);

// const objA = {
//   name: 'Vasil',
//   age: 52,
// };

// Object.prototype.newNew = function (newYork) {
//   this.name = newYork;
// };

// const objB = Object.create(objA);
// objB.newNew('Ivan');

// console.log(objB);
// console.log(objB.age);

// const CounterPlugin = function ({ rootSelector, initionValue = 0, step = 1 } = {}) {
//   this._counter = initionValue;
//   this._step = step;
//   this._getRefs(rootSelector);
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   console.log(rootSelector);
//   const refs = {};
//   refs.countainer = document.querySelector(rootSelector);
//   console.log(refs.countainer);
// };

// CounterPlugin.prototype.increment = function () {
//   this._counter += this._step;
// };
// CounterPlugin.prototype.decrement = function () {
//   this._counter -= this._step;
// };
// const counter1 = new CounterPlugin({ rootSelector: '#counter-1', step: 10 });
// const counter2 = new CounterPlugin({ rootSelector: '#counter-2', step: 10 });

// console.log(counter1);
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter2.decrement();
// console.log(counter2);
/////////////////////////////////////////////// К Л А С И /////////////////

// class Car1 {
//   static description = 'клас описующий автомобілі';
//   constructor({ brand, model, price } = {}) {
//     console.log('виконується конструктор');
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   chengePrice(newPrice) {
//     this.price = newPrice;
//   }
//   updateModal(newModel) {
//     this.model = newModel;
//   }
// }
// console.log(Car1);
// console.log(Car1.description);

// const carInstance = new Car1({
//   brand: 'Audi',
//   model: 'q3',
//   price: 35000,
// });
// console.log(carInstance);

// class Car2 {
//   #test = 'test';
//   test2 = 'test2';

//   static description = 'Клас описусущий автомобіль';
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this._model = model;
//     this._price = price;
//   }

//   set model(newModel) {
//     return (this._model = newModel);
//   }
//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     this._price = newPrice;
//   }
// }
// console.log(Car2.description);

// const infoCar2 = new Car2({ brand: 'Audi', model: 'q3', price: 35000 });

// infoCar2.model = 'q4';
// console.log(infoCar2);
// console.log(infoCar2.price);
// infoCar2.price = 50000;
// console.log(infoCar2.price);
// console.log(infoCar2);

// class Cars {
//   constructor({ price }) {
//     this._price = price;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     this._price = newPrice;
//   }
// }

// const result = new Cars({ price: 10000 });
// console.log(result);
// console.log(result.price);
// result.price = 20000;
// console.log(result.price);

// console.log(result);
//======================================================== HERO =================================================
// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   newXp(amount) {
//     console.log(`Your hero ${this.name} geting ${amount} xp`);
//     this.xp += amount;
//   }
// }
// const greGor = new Hero({ name: 'Andriy', xp: 500 });

// // console.log(greGor);

// // console.log(greGor.newXp(1000));

// class Warrion extends Hero {
//   constructor({ weapon, ...restProps }) {
//     super(restProps);
//     this.weapon = weapon;
//   }
//   atack() {
//     console.log(`${this.name} атакує за допомогою ${this.weapon}`);
//   }
// }

// class Mage extends Hero {
//   constructor({ weapon, mana, ...restProps } = {}) {
//     super(restProps);
//     this.weapon = weapon;
//     this.mana = mana;
//   }
//   cast(delXp) {
//     console.log(`${this.name} щось там кастує ${delXp}`);
//     console.log(`${this.name} знімає ${delXp} з ${newHero.name}`);
//     return console.log(newHero.xp - delXp);
//   }
// }

// class iAm extends Warrion {
//   constructor({ tank, ...restProps } = {}) {
//     super(restProps);
//     this._tank = tank;
//   }
//   get tank() {
//     return this._tank;
//   }
//   set tank(nawTank) {
//     this._tank = nawTank;
//   }
// }

// const newIam = new iAm({ name: 'Andriy', xp: 300, weapon: 'stick', tank: 'Abrams' });

// const newHeroMage = new Mage({ name: 'Magomed', xp: 1800, weapon: 'hend', mana: 5000 });
// console.log(newHeroMage);

// const newHero = new Warrion({ name: 'Halk', xp: 1500, weapon: 'alebarda' });
// console.log(newHero);

// newHero.atack();
// newHero.newXp(500);

// newHeroMage.cast(1500);

// console.log(newHero.xp);

// console.log(newIam);
// newIam.tank = 'ABRAMS--90';
// console.log(newIam);
//============================================================================================================

// function fnA(x) {
//   console.log(x);
//   return function (y) {
//     return console.log(x + y);
//   };
// }

// const fnB = fnA(5);

// console.log(fnB(10));

// function countSheeps(arrayOfSheep) {
//   const a = arrayOfSheep.filter(el => el === true);
//   return a.length;
// }

// const b = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];
// console.log(countSheeps(b));

// var summation = function (num) {
//   // Code here
//   if (num.length < num) {
//     num += 1;
//   }
// // };
// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     return number * 8;
//   }
//   if (number % 2 !== 0) {
//     return number * 9;
//   }

//   // your code........
// }

// console.log(simpleMultiplication(1));

// function find_average(rray) {
//   // your code here

// }
// console.log(find_average([1, 2, 3]));

// function maps(x) {
//   //return x.map(el => el * 2);
//   let arr = [];
//   for (let i = 0; i < x.length; i++) {
//     arr.push(x[i] * 2);
//   }
//   return arr;
// }

// maps = ᅟ = ᅠ => (ᅠ != +[] ? [ᅠ[+[]] + ᅠ[+[]], ...ᅟ(ᅠ.slice(!+[]))] : []);

// console.log(maps([4, 1, 1, 1, 4]));

// function DNAtoRNA(dna) {
//   let a = dna.split('');
//   let res = [];
//   for (let el of a) {
//     if (el !== 'T') {
//       res.push(el);
//       continue;
//     }
//     if (el === 'T') {
//       res.push((el = 'U'));
//     }
//   }
//   return res.join('');
// }

// console.log(DNAtoRNA('GACCGCCGCC'));

// var min = function (list) {
//   return Math.min(...list);
// };

// var max = function (list) {
//   return list[0];
// };
// console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// class Hero {
//   constructor({ name, xp }) {
//     this.name = name;
//     this.xp = xp;
//   }
// }

// class Andriy extends Hero {
//   constructor({ balist, ...restProps }) {
//     super(restProps);
//     this.balist = balist;
//   }
//   tisHp(newxp) {
//     console.log(`в героя ${this.name} виявляється ${newxp}`);
//   }
// }

// const newObj = new Andriy({ name: 'Andriy', xp: 1500, balist: 'Scipeter' });

// console.log(newObj);
// console.log(newObj.tisHp(2000));
