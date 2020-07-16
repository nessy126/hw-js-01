let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
let userInput = prompt('Введите пароль');


if (userInput = null) {
  message = 'Отменено пользователем!';
  alert(message);
  console.log(message);
} else if (userInput === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
  console.log(message);
} else if (false) {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}

alert(message);