let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
const userInput = prompt('Введите пароль');

// ljkl;
if (userInput === null) {
  message = 'Отменено пользователем!';
  alert(message);
  console.log(message);
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else if (ADMIN_PASSWORD !== userInput) {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}

alert(message);