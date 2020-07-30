import users from './export.js';
// 1 
// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users)); 
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// console.log(names)

// 2
// const getUsersWithEyeColor = (users, color) => {
//   const col = users.filter(user => user.eyeColor === color).map(user => `объект ${user.name}`);
//   return col;
// }
// console.log(getUsersWithEyeColor(users, 'blue'));
// // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// 3
// const getUsersWithGender = (users, gender) => {
//   const gen = users.filter(user => user.gender === gender).map(user => user.name);
//   return gen
// };

// console.log(getUsersWithGender(users, 'male'));
// // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 4
// const getInactiveUsers = users => {
//   const unActive = users.filter(user => user.isActive === false).map(user => `объект ${user.name}`);
//   return unActive
// };

// console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 5
// const getUserWithEmail = (users, email) => {
//   const mailUser = users.find(user => user.email === email)
//    return mailUser
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// // {объект пользователя Elma Head}

// 6

// const getUsersWithAge = (users, min, max) => {
//   const ages = users.filter(user => user.age > min && user.age < max)
//   return ages
// };

// console.log(getUsersWithAge(users, 20, 30));
// // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// 7
// const calculateTotalBalance = users => {
//   const sum = users.reduce((acc, user) => acc + user.balance, 0);
//   return sum
// };

// console.log(calculateTotalBalance(users)); // 20916

// 8
// const getUsersWithFriend = (users, friendName) => {
//   const hasFriend = users.filter(user => user.friends.includes(friendName)).map(user => `${user.name}`);
//   return hasFriend
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]

// 9
// const getNamesSortedByFriendsCount = users => {
//   const haveFriends = users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
//   return haveFriends
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 
// // 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 10
// const getSortedUniqueSkills = users => {
//   const allSkills = users.reduce((arr, user) => {
//     arr.push(...user.skills);
//     return arr;
//   }, []);
//   allSkills.sort();
//   return allSkills
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', '
// laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla',
// 'proident', 'tempor', 'velit', 'veniam' ]