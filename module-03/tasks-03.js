// Задание 1

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);
// for (let key of keys) {
// console.log(key, user[key])
// };

// Задание 2

// const countProps = function (obj) {
//   return Object.values(obj).length
// }

// console.log(countProps({})) 

// console.log(
//   countProps({
//     name: "Mango",
//     age: 2,
//   })
// ) 

// console.log(
//   countProps({
//     mail: "poly@mail.com",
//     isOnline: true,
//     score: 500,
//   })
// ) 

// Задание 3

// const findBestEmployee = function (employees) {
//   const tasks = Object.values(employees);

//   const biggestTask = Math.max(...tasks);
//   let leader;

//   for (let key in employees) {
//     if (biggestTask === employees[key]) leader = key;
//   }
//   return leader;
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); 

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// );

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// );

// Задание 4

// const countTotalSalary = function (employees) {
//   let total = 0;
//   const sums = Object.values(employees);

//   for (const sum of sums) {
//     total += sum;
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// Задание 5

// const products = [{
//     name: 'Радар',
//     price: 1300,
//     quantity: 4
//   },
//   {
//     name: 'Сканер',
//     price: 2700,
//     quantity: 3
//   },
//   {
//     name: 'Дроид',
//     price: 400,
//     quantity: 7
//   },
//   {
//     name: 'Захват',
//     price: 1200,
//     quantity: 2
//   },
// ];

// const getAllPropValues = function (arr, prop) {

//   const res = [];

//   for (let el of arr) {

//     if (el[prop] !== undefined) {
//       res.push(el[prop]);
//     }
//   }
//   return res;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// Задание 6

// const products = [{
//     name: 'Радар',
//     price: 1300,
//     quantity: 4
//   },
//   {
//     name: 'Сканер',
//     price: 2700,
//     quantity: 3
//   },
//   {
//     name: 'Дроид',
//     price: 400,
//     quantity: 7
//   },
//   {
//     name: 'Захват',
//     price: 1200,
//     quantity: 2
//   },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
// //  Решение 1
//   const numbers = [];
//   for (let el of allProdcuts) {
//      let num = Object.values(el);
//     if (num.includes(productName)) {
//       numbers.push(...num)
//     }
//   };
//   for (let el of numbers) {
//     if (typeof el === 'number') {
//       res.push(el)
//     }
//   }
//   return res[0] * res[1];

// //   // Решение 2

// //  let sum;
// //   for (let arr of allProdcuts) {
// //     console.log(arr);

// //     if (arr.name === productName) {
// //       sum = arr.price * arr.quantity;
// //       }
// //   }
// //   return sum;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800