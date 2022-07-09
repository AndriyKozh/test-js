// const user = {
//   name: 'Andriy',
//   location: {
//     coords: [1, 2, 3],
//     city: 'Lviv',
//   },
// };

// ////============  _.get ===============
// const user = {
//   name: 'Andriy',
//   location: {
//     coords: [1, 2, 3],
//     city: 'Lviv',
//   },
// };
// console.log(_.get(user, 'location.city')); //Lviv

// ////===========_.isEmpty===============
// const user = {
//   name: 'Andriy',
//   location: {
//     coords: [1, 2, 3],
//     city: 'Lviv',
//   },
// };
// console.log(_.isEmpty(user)); //false

// // ? шукає послідовно чи є такий елемент! При не виявленні видає undefined і не видає помилки
// console.log(user?.location?.city); //lviv
// console.log(user?.location?.coords); //[1, 2, 3]

///// ============_.union=====================
//ВИВОДИТЬ МАСИВ Унікальних ЧИСЕЛ!!! ще є _.unionBy масив унікальних обєктів
// console.log(_.union([1, 2, 3, 8, 3, 4, 5, 7, 7])); //(7) [1, 2, 3, 8, 4, 5, 7]

/// ==========_.range()===========
//
// console.log(_.range(5, 20, 2)); //[5, 7, 9, 11, 13, 15, 17, 19]; ДЕ 5 - ЦЕ ПОЧАТК МАСИВУ 20 КІНЕЦЬ А 2 КРОК

// ============ _.sortBy ======================
//Створює масив елементів, відсортованих у порядку зростання за результатами виконання кожного елемента колекції через кожен ітератор. Цей метод виконує стабільне сортування, тобто зберігає початковий порядок сортування рівних елементів. Ітерації викликаються з одним аргументом: (значення) .

// const users = [
//   { user: 'fred', age: 48 },
//   { user: 'barney', age: 36 },
//   { user: 'fred', age: 40 },
//   { user: 'barney', age: 34 },
// ];

// console.log(_.sortBy(users, numb => numb.age)); //0: {user: 'barney', age: 34}
// 1: {user: 'barney', age: 36}
// 2: {user: 'fred', age: 40}
// 3: {user: 'fred', age: 48}

// console.log(_.sortBy(users, ['user', 'age'])); //0: {user: 'barney', age: 34}
// // 1: {user: 'barney', age: 36}
// // 2: {user: 'fred', age: 40}
// // 3: {user: 'fred', age: 48}

// =============== sum() i sumBy =============
// подібне на redus сумує (додає) елементи

// console.log(_.sum([1, 2, 3, 4, 5, 6])); // 21 сумує

//sumBY для масивів і обєктів

// const users = [
//   { user: 'fred', age: 48 },
//   { user: 'barney', age: 36 },
//   { user: 'fred', age: 40 },
//   { user: 'barney', age: 34 },
// ];

// console.log(_.sumBy(users, el => el.age)); //158 подібне reduce

// ================= _.min _.max та minBy maxBy============

// const users = [
//   { user: 'fred', age: 48 },
//   { user: 'barney', age: 36 },
//   { user: 'fred', age: 40 },
//   { user: 'barney', age: 34 },
// ];

// console.log(_.maxBy(users, el => el.age)); //{user: 'fred', age: 48}
// console.log(_.minBy(users, el => el.age)); // user: 'barney', age: 34}

// ===========kebabCase=========
// console.log(_.kebabCase('a b c')); //a-b-c

////////////////////////////////////   ПРОБИ ПЕРЕВІРКИ ///////////////////////////////
// const users = [
//   { user: 'fred', age: 48 },
//   { user: 'barney', age: 36 },
//   { user: 'fred', age: 40 },
//   { user: 'barney', age: 50 },
// ];

// console.log(_.isEmpty(users));

// console.log(_.sumBy(users, el => el.age));

// console.log(_.sortBy(users, ['age']));

// const user = {
//   name: 'Andriy',
//   location: {
//     coords: [1, 2, 3],
//     city: 'Lviv',
//   },
// };
// // console.log(_.get(user, 'location.city')); //Lviv
// console.log(_.get(user, 'location.city'));

// const a = [1, 2, 3, 4, 5, 2, 5, 6, 7, 8, 2.3, 1];

// console.log(_.union(a));
