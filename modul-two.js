//Авто перевірка

// Завдвння 20
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     console.log(order);
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//ЗАВДАННЯ 21
// ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
// Напиши функцію findLongestWordstring), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(text) {
//   let resArray = text.split(' ');
//   let result = resArray[0];
//   for (let i = 0; i < resArray.length; i += 1) {
//     result.length < resArray[i].length ? (result = resArray[i]) : false;
//   }
//   return result;
// }
// console.log(findLongestWord("I  done it. But I can't understand how it works. ssss"));

// function findLongestWord(text) {
//   let resArray = text.split(' ');

//   let result = resArray[0];

//   for (let i = 0; i < resArray.length; i += 1) {
//     if (resArray[i].length > result.length) {
//       console.log(result.length);
//       result = resArray[i];
//     }
//   }
//   return result;
// }
// console.log(findLongestWord("I done it. But I can't understand how it works."));

//Task 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code below this line
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 16));

//Task 23

// function filterArray(numbers, value) {
//   let newArray = [];
//   for (let number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//       continue;
//     }
//   }
//   // Change code below this line

//   return newArray;

//   // Change code above this line
// }
// console.log(filterArray([1, 7, 3, 4, 5], 4));

//Task 25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let arrayNumb = [];

//   for (let array of array2) {
//     if (array1.includes(array)) {
//       arrayNumb.push(array);
//     }
//   }

//   return arrayNumb;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 3, 19]));

//Task 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   //   // Change code below this line

//   for (let i of order) {
//     total += i;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//Task 27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//Task 29
// function getEvenNumbers(start, end) {
//   let array = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) array.push(i);
//   }

//   return array;
// }
// console.log(getEvenNumbers(8, 8));

//task 32

// function includes(array, value) {
//   let result;
//   for (let i = 0; i < array.length; i += 1) {
//     result = array[i] === value;
//     if (result === true) {
//       break;
//     }
//   }
//   return result;
// }
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
