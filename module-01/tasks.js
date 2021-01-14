// // Задание 1

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);



// // Задание 2

// const total = 100;
// let ordered = 108;

// if (ordered >= total) {

//   console.log("На складе недостаточно твоаров!")

// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }




// // Задание 3

// let message;
// const ADMIN_PASSWORD = 'jqueryismyjam';
// const userInput = prompt('Введите пароль');

// if (userInput === null) {
//   message = 'Отменено пользователем!';
//   alert(message);
//   console.log(message);
// } else if (userInput === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
//   console.log(message);
// } else if (ADMIN_PASSWORD !== userInput) {
//   message = 'Доступ запрещен, неверный пароль!';
//   console.log(message);
// }

// alert(message);



// // Задание 4

// let credits = 23580;
// const pricePerDroid = 3000;
// const order = prompt('Введите количество дроидов, которые хотите купить');
// let message;
// let totalPrice = order * pricePerDroid;
// // let canPay = credits / totalPrice;

// if (order === null) {
//   message = 'Отменено пользователем!';

// } else if (isNaN(+order)) {
//   message = 'Введите, пожалуйста, число!';

// } else if (totalPrice > credits) {
//   message = 'Недостаточно средств на счету!';

// } else {
//   credits = credits - totalPrice;
//   message = `Вы купили ${order} дроидов, на счету осталось ${credits} кредитов`;
// }


// alert(message);


// // Задание 5

// const country = prompt('Укажите страну, в которую необходимо сделать доставку').toLowerCase();
// let cost;

// switch (country) {
//   case 'китай':
//     cost = 100;
//     alert(`Доставка в ${country} будет стоить ${cost} кредитов`)
//     break;

//   case 'чили':
//     cost = 250;
//         alert(`Доставка в ${country} будет стоить ${cost} кредитов`)
//     break;

//   case 'австралия':
//     cost = 170;
//         alert(`Доставка в ${country} будет стоить ${cost} кредитов`)
//     break;

//     case 'индия':
//     cost = 80;
//         alert(`Доставка в ${country} будет стоить ${cost} кредитов`)
//     break;

//     case 'ямайка':
//     cost = 120;
//         alert(`Доставка в ${country} будет стоить ${cost} кредитов`)
//     break;

//   default:
//   alert('В вашей стране доставка не доступна')
// }




// // Задание 6

// let total = 0;
// let input;

// while (input !== null) {
//   input = prompt('Введите число');

//   if (!isNaN(input)) {
//   total = total + +input;
//   }

// }

// alert(`Общая сумма чисел равна ${total}`)