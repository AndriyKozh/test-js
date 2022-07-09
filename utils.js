// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ЗАДАЧІ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.

// let link = 'https://somesite.com/about.my-site';

// // Пиши код ниже этой строки

// if (!link.endsWith('/')) {
// 	if (link.includes("my-site")) {
// 		link =  `${link}/`
// 	}

// } else {
// 	console.log(123)
// }
// // Пиши код выше этой строки
// console.log(link);

// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://somesite.com/about.my-site';
// link.includes('my-site') && !link.endsWith('/') ? link += '/' : ''
//   ;

// console.log(link);

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = '12';

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else if (hours > 24) {
//   console.log('Overdue');
// } else {
//   console.log('No number');
// }

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }
// let i = 1;
// while (i < 5) {
//   console.log(i);
//   i += 1;
// }

// do {
//   console.log(i);
//   i += 2;
// } while (i <= 11);

// let fruits = ['aple', 'lemon', 'banana', 'maracuja'];
// let a = fruits[0];
// console.log(a);

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(i);
// }
// const clients = ['Mango', 'Andriy', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// for (const a of clients) {
//   console.log(a);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// const clients = ['Mango', 'Poly', 'Andriy', 'Ajax'];
// const name = 'Andriy';
// let message;
// for (const a of clients) {
//   if (a === name) {
//     message = 'Yes this name ther are';
//     break;
//   }
//   message = 'ther are name not';
// }
// console.log(message);

// let a = 1;
// while (a < 10) {
//   console.log(a  2);
//   a += 1;
// }

// let i = 0;
// do {
//   console.log(i);
//   i += 2;
// } while (i <= 10);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`asfsdf${threshold}: ${numbers[i]}`);
// }

// let areyName = ['Andriy', 'Maxym', 'Mariana'];
// let name = 'Maxym';
// let message;

// for (const a of areyName) {
//   if (a === name) {
//     message = 'Yes';
//     break;
//   }
//   message = 'no';
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34, 33];
// const threshold = 10;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(numbers[i]);
// }

// let areyName = ['Andriy', 'Maxym', 'Mariana'];
// const name = 'Maxym';
// let message;

// for (const a of areyName) {
//   if (a === name) {
//     message = 'yes';
//     break;
//   }
//   message = 'no';
// }
// console.log(message);
// console.log(areyName.includes('Maxym'));

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'apple';

// const a = redFruits.includes(fruit);

// if (a) {
//   console.log(`${fruit} is green fruits`);
// }

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// clients.splice(0, 2, 'qweqwe', 'ASD');
// console.log(clients);

// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   message = message.split(' ');

//   console.log(message);
//   // Change code above this line
//   return message.length * pricePerWord;
// }
// let a = calculateEngravingPrice('JavaScript is in my blood', 10);
// console.log(a);

// function slugify(title) {
//   title = title.toLowerCase().split(' ');
//   // Change code below this line
//   // Change code above this line
//   return title.join('-');
// }
// let a = slugify('Arrays for begginers');
// console.log(a);

//Написати функцію

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   return firstArray.concat(secondArray).slice(0, maxLength);
//   // Change code above this line
// }

// let a = makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea', 'sdsad'], 3);
// console.log(a);

// let j = [a, b, , c]
// let f = [a, b, , c];
// f.concat

//Написати функцію
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[0]; // Change this line
//   console.log(fruit);
// }
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// // if (!link.endsWith('/')) {
// //   if (link.includes('my-site')) {
// //     link = `${link}/`;
// //   }
// // }
// // // Пиши код выше этой строки
// // console.log(link);
// //  if (!link.endsWith('/')) {
// // 	if (link.includes("my-site")) {
// // 		link =  `${link}/`
// // 	}
// link.endsWith('l');
// console.log(link);

// let str = 'Быть или не быть, вот в чём вопрос';

// if (!str.endsWith('.')) {
//   if (str.includes('вопрос')) {
//     str = `${str}.`;
//   }
// }
// console.log(str);
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message =
//     ordered < available
//       ? 'The order is accepted, our manager will contact you'
//       : 'Not enough goods in stock!';

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(150, 180));

// const jsFileName = 'script.js';
// const minifiedJsFileName = jsFileName.replace('.hhhhhhhhh.js', '.asdas.js');
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = 'styles.css, about.css, portfolio.css';
// const minifiedCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// let leterSpace = 'extraNumber';

// const testObject = {
//   name: 'Andriy',
//   age: 33,
//   result: true,
//   objectTwo: {
//     a: 'Mariana',
//     b: 27,
//     c: true,
//   },
// };

// const propKey = 'age';
// const bookAuthor = testObject['age'];
// console.log(bookAuthor);

// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   // Це метод об'єкта
//   addBook() {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//   },
// };

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const animal = {
//   legs: 4,
// };

// const a = Object.create(animal);
// a.b = 'asd';

// // console.log(a.legs);

// // const key = Object.keys(animal);

// // console.log(key);

// for (let cases in a) {
//   console.log(cases);
// }

// var o1 = { a: 1 };
// var o2 = { b: 2 };
// var o3 = { c: 3 };

// const a = Object.assign(o1, o2, o3);
// console.log(a);

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   console.log(numericWeight);
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

// let a = 2.6;
// const b = (Math.random(a) * 100).toFixed(2);
// console.log(b);

// const newButton = document.querySelector('.js-button');

// newButton.addEventListener('click', () => {
//   console.log('Good: ', Date.now());
// });
