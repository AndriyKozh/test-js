// 3/20

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getEmails());
//5/20
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//11

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// 12
// class Car {
// Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getRes() {
//     return this.#brand;
//   }
//   changeBrand(newName) {
//     this.#brand = newName;
//   }

//   // Change code above this line
// }

// const result = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// result.changeBrand('honda');
// console.log(result);

//13

// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// const a = ['Nanitoids', 'Prolonger', 'Antigravitator', 'Droid'];

// console.log(a.indexOf('Droid'));

// const b = a.filter(el => el.indexOf('Droid'));
// console.log(b);

// const message = document.querySelector('#message');
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector('.btn.active');
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector('.image');
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';
// const heading = document.createElement('h1');
// heading.textContent = 'asdasd';
// console.log(heading); // <h1></h1>
// const image = document.createElement('img');
// image.src = 'https://placeimg.com/640/480/nature';
// image.alt = 'Nature';
// console.log(image);

// const a = [{ b: [1, 2, 3, 4, 5] }];

// console.log(Array.isArray(a));

// class Kozhevnykovs {
//   constructor({ name, surname, age }) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

// const father = new Kozhevnykovs({ name: 'Andriy', surname: 'Kozhevnikov', age: 33 });
// console.log(father);

// const mather = new Kozhevnykovs({ name: 'Mariana', surname: ' Kozhevnikova', age: 27 });

// console.log(mather);

// const son = new Kozhevnykovs({ name: 'Maxym', surname: 'Kozhevnikov', age: 6 });

// const family = (and, mar, max) => {
//   return `${and} and ${mar} and ${max} verry best family`;
// };

// console.log(family(father.name, mather.name, son.name));

// const a = {
//   b: 123,
//   c: 'qwe',
// };

// const res = Object.create(a);

// res.d = 'newQWE';

// const res2 = Object.create(res);

// console.log(res2.d);

// class Hero {
// 	constructor({name,race}) {
// 		this.name = name;
// 		this.race = race;
// 	}
// }

// class Andriy extends Hero{
// 	constructor(...re) {
// 		super()
// 	}
// }

//15

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//     } else if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//19

// class User {
//   eamil;

//   constructor(email) {
//     this.email = email;
//   }

//   //   get email() {
//   //     return this.email;
//   //   }

//   //   set email(newEmail) {
//   //     this.email = newEmail;
//   //   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//20

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// mango.blacklist('max190716@ukr.net');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]

// console.log(mango.blacklistedEmails);
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com'));
// console.log(mango.isBlacklisted('max190716@ukr.net')); // true
