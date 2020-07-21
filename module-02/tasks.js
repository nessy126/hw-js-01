// // Задание 1
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай 
// функцию calculateEngravingPrice(message, pricePerWord) принимающую строку(в строке будут 
//   только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех
// слов в строке.


// // Решение
// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(' ').length;
//   return words * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// Задание 3
// const findLongestWord = function (string) {
//   const words = string.split(' ');
//   console.log(words);
//   let longestWord = words[0];
//   // for (let i = 1; i < words.length; i++) {
//   //   if (words[i].length > longestWord.length) {
//   //     console.log(words[i].length);
//   //     longestWord = words[i];
//   //   }
//   // }
//   for (let word of words) {
//     // if (word.length > longestWord.length) {
//     //   longestWord = word;
//     (word.length > longestWord.length) ? longestWord = word: '';
//   }
//   return longestWord;
// }

// console.log(
//   findLongestWord(
//     'The quick brown fox jumped over the lazy dog'
//   )
// ); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// Задание 4
// Напиши функцию formatString(string) которая принимает строку и
// форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в
// исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка
// символов и добавляет в конец строки троеточие '...', после чего
// возвращает укороченную версию.
// const formatString = function (string) {
//   const longString = string.length;
//   console.log(longString);
//   if (longString < 40) {
//     return string;
//   } else {
//     return string.slice(0, 40) + '...';
//   }
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// вернется форматированная строка

// Задание 5
// Напиши функцию checkForSpam(message),
//   принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam
// и sale.Если нашли запрещенное слово то функция
// возвращает true, если запрещенных слов нет
// функция возвращает false.Слова в строке могут
// быть в произвольном регистре.
// const checkForSpam = function (message) {
//   // const wordOfMessage = message.toLowerCase().split(' ');
//   // console.log(wordOfMessage);
//   // for (let i = 0; i < message.length; i++) {
//   if (message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam')) {
//     console.log(message);
//     return true;
//   } else { return false; }
// };
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Задание 6
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
//   пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
//   необходимо посчитать сумму всех элементов массива и записать ее в переменную
// total.Используй цикл
// for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна 
// [сумма]'.
// 🔔Делать проверку того, что пользователь ввел именно число, а не 
// произвольный набор символов, не обязательно.Если хочешь, в случае некорректного
// ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при
// этом результат prompt записывать в массив чисел не нужно, после чего снова
// пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//   input = prompt('Введите число');
//   if (!isNaN(input)) {
//     numbers.push(Number(input));
//   } else {
//     alert('Было введено не число, попробуйте еще раз');
//   }
// }

// if (numbers.length !== 0) {
//   for (let number of numbers) {
//     total += number;
//   }
//   alert(total);
// }
// console.log(numbers);



// Задача 7

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   if (login.length <= 4 || login.length >= 16) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const isLoginUnique = function (allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//     logins.push(login);
//     return 'Логин успешно добавлен!';
//   } else if (!isLoginUnique(allLogins, login)) {
//     return 'Такой логин уже используется!'
//   } else if (!isLoginValid(login)) {
//     return 'Ошибка! Логин должен быть от 4 до 16 символов';
//   }
// }

// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'