// const dead = "Вы хотите?";
// const deadDead = "Вы хотите?";
// const deadDeadDed = "Вы хотите?";
// alert(dead);
// confirm(deadDead);

// const result = prompt(deadDeadDed);
// console.log(result);

// console.log(0.14 + 0.8);
// console.log((0.14 + 0.8).toFixed(2));

//! Рандомное числецо в консольку
// const random = Math.random() * (100 - 1) + 1;
// console.log(random.toFixed(0));

//! Рандомное
// const nameClient = [
//   "Жмышенко Валерий",
//   "Антон Палыч Фекалисов",
//   "Кувшик Набиев",
//   "Жмых Палаевв",
//   "Ушат Голизоев",
//   "Рулон Обоев",
//   "Грилзат Ашанов",
//   "Варшат Варусов",
//   "Атобе Октоберфестов",
//   "Люсинда Арестовна",
// ];
// const randomNameClient = Math.floor(Math.random() * nameClient.length);
// const random = Math.random() * (228 - 1);
// const randomNumber = random.toFixed(0);
// const piece = [
//   "отдельная геройская снайперская брыгада",
//   " жмыховская взводная ячейка генерала констЖмыхова",
//   "iменi Володимира Зеленського",
//   "отдельный полк тактического назначения `Черноголовка`",
//   "имени Люськи Арестовны",
//   "228 полк енотиков полоскунов",
// ];
// const randomPiece = Math.floor(Math.random() * piece.length);
// const text = `Добро пожаловать ${nameClient[randomNameClient]}! Вы из ${randomNumber} гвардейской ${piece[randomPiece]} армии заглощенковых?`;

// console.log(text.toUpperCase());

//! &&(false)
// const randomAge = Math.random() * (100 - 1) + 1;
// console.log(randomAge.toFixed(0) && 10); //Остановка на правом(последнем) всегда = false
// console.log(0 && randomAge.toFixed(0)); //false

//! ||(true)
// console.log(0 || randomAge.toFixed(0)); //возраст больше нуля, тобишь = true
// console.log(randomAge.toFixed(0) < 100 || randomAge.toFixed(0) > 100); //true
// console.log(randomAge.toFixed(0) || false);
// console.log(15 || true); // 15

//!(reverse)
// console.log(!randomAge.toFixed(0));
// console.log(!0);

//! Покупка рандомного кол-ва дроидов с фикс ценой и выводом в логе полной стоимости заказа
// const pricePerDroid = 800;
// const orderedQuantity = Math.random() * (100 - 1) + 1;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity.toFixed(0) + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

//! Номерок в очереди получается
// let randomNumber = Math.random() * (10 - 1) + 1;
// let randomNumber2 = Math.random() * (10 - 1) + 1;
// let randomNumber3 = Math.random() * (10 - 1) + 1;

// function add(a, b, c) {
//   console.log(`Твой номер в очереди получается: ${a + b + c}`);
// }

// add(
//   randomNumber.toFixed(0),
//   randomNumber2.toFixed(0),
//   randomNumber3.toFixed(0)
// );

//

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {

// ! Проверка возраста
// const text = "Сколько вам лет?";
// const result = prompt(text);

// function checkAge(age) {
//   let message;
//   if (result >= 18) {
//     message = "Ты набрал достаточно возраста для входа, проходи.";
//   } else {
//     message = "Ты слишком молод, возвращайся через несколько лет.";
//   }

//   console.log(message);
// }
// checkAge();

//! Рандомная новость для сми
// const nameClient = [
//   "Жмышенко Валерий",
//   "Антон Палыч Фекалисов",
//   "Кувшик Набиев",
//   "Жмых Палаевв",
//   "Ушат Голизоев",
//   "Рулон Обоев",
//   "Грилзат Ашанов",
//   "Варшат Варусов",
//   "Атобе Октоберфестов",
//   "Люсинда Арестовна",
// ];
// const randomNameClient = Math.floor(Math.random() * nameClient.length);
// const random = Math.random() * (228 - 1);
// const randomNumber = random.toFixed(0);
// const piece = [
//   "отдельная геройская снайперская брыгада",
//   " жмыховская взводная ячейка генерала констЖмыхова",
//   "iменi Володимира Зеленського",
//   "отдельный полк тактического назначения `Черноголовка`",
//   "имени Люськи Арестовны",
//   "228 полк енотиков полоскунов",
// ];
// const randomPiece = Math.floor(Math.random() * piece.length);
// const text = `Добро пожаловать ${nameClient[randomNameClient]}! Вы из ${randomNumber} гвардейской ${piece[randomPiece]} армии заглощенковых?`;

// console.log(text.toUpperCase());

//!Проверка температуры на улице (свич)
// let temp = [1, 2, 3, 4, 5, 6, 7, 8];
// let randomTemp = Math.round(Math.random() * temp.length);

// let message = "";

// switch (randomTemp) {
//   case 1:
//     message = "*смотрит из льда*";
//     break;
//   case 2:
//     message = "Мы что, в Антарктиде?";
//     break;
//   case 3:
//     message = "Нужно было теплее одеться, чувак";
//     break;
//   case 4:
//     message = "Слушай, как-то мёрзло!";
//     break;
//   case 5:
//     message = "Довольно таки неплохо.";
//     break;
//   case 6:
//     message = "Неплохая погода для прогулок, правда?";
//     break;
//   case 7:
//     message = "Знойный май нас пропарит, время поло и маек";
//     break;
//   case 8:
//     message = "Чувак, мы в Аду?";
//     break;
//   default:
//     message = "Ну такое, которое можно, а может и нельзя";
// }
// console.log(message);

//!Проверка температуры на улице (свич)((усовершен))
// let temp = [1, 2, 3, 4, 5, 6, 7, 8];
// let randomTemp = Math.floor(Math.random() * temp.length + 1);

// let message = "";

// switch (randomTemp) {
//   case 1:
//     message = "*смотрит из льда*";
//   case 2:
//     message = "Мы что, в Антарктиде?";
//     break;
//   case 3:
//     message = "Нужно было теплее одеться, чувак";
//     break;
//   case 4:
//     message = "Слушай, как-то мёрзло!";
//     break;
//   case 5:
//     message = "Довольно таки неплохо.";
//     break;
//   case 6:
//     message = "Неплохая погода для прогулок, правда?";
//     break;
//   case 7:
//     message = "Знойный май нас пропарит, время поло и маек";
//     break;
//   case 8:
//     message = "Чувак, мы в Аду?";
//     break;
//   default:
//     message = "Ну такое, которое можно, а может и нельзя";
// }
// console.log(message);

//! Цикл
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

//! фибоначча
// function GenerateFibonacci(number) {
//   var fibonacci = [];
//   fibonacci[0] = 0;
//   fibonacci[1] = 1;
//   for (var i = 2; i < number; i++) {
//     fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//   }
//   return fibonacci;
// }
// var f = GenerateFibonacci(30);
// console.log(f);

//! массив
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

//! .slice с масивом
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = clients.slice();

// console.log(newClients);

//!массивы
// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// arr[5] = 6;
// console.log(arr);

// const users = ["Ваня", "Саня"];
// users[2] = "Оля";
// users[1] = "Петя";
// users.shift();
// users.unshift("Маша", "Даша");
// console.table(users);

// const string = "Ваня,Саня,Оля";
// console.log(string.split(" "));

// let str = "12345678900987654321";
// let arr = str.split("");
// console.log(arr);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += Number(arr[i]);
// }
// console.log(sum);

//! функции
// function showName() {
//   console.log("Vasya!");
// }
// setTimeout(showName, 0);
// console.log("Kolya!");

//! задачки
// const num = 3;
// console.log(num);

// const a = 10;
// const b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// const c = 15;
// const d = 2;
// const result = c + d;
// console.log(result);

// const a = 10;
// const b = 2;
// const c = 5;
// console.log(a + b + c);

// const a = 17;
// const b = 10;
// const c = a - b;
// const d = 7;
// const result = c + d;
// console.log(result);

// const str = "abcde";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);

// const sec = 60;
// const min = 60;
// const hrs = 24;
// const time = sec * min * hrs;
// console.log(`${sec}:${min}:${hrs}`);

// const str1 = "54";
// console.log("I have a " + str1 + " old");

// const arr = [2, 5, 3, 9];
// const result = arr[0] * arr[1] + arr[2] * arr[3];
// console.log(result);

//! if
// const a = 3;
// const b = 5;
// if (a <= 1 || b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// const a = 24;
// const b = 15;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// const string = "abcde";
// if (string[0] === "a") {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// const string = 12345;
// if ((string === 1, 2, 3)) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// const string = [1, 2, 3];
// const newString = string[0] + string[1] + string[2];
// console.log(newString);

// //! начало/середина/конец месяца
// const randomDay = Math.floor(Math.random() * 31);
// let message = "";
// if (randomDay <= 10) {
//   message = `${randomDay} число месяца это его начало!`;
// } else if (randomDay <= 20 && randomDay >= 10) {
//   message = `${randomDay} число месяца это уже его середина!`;
// } else if (randomDay <= 31 && randomDay >= 20) {
//   message = `${randomDay} число месяца это уже его конец!`;
// }
// console.log(message);

//! Зима, весна...
// const randomMonth = Math.floor(Math.random() * 12);
// console.log(randomMonth);

// let message = "";
// if (randomMonth <= 2 || randomMonth === 12) {
//   message = "Зима, новогодние праздники!";
// } else if (randomMonth <= 6 && randomMonth >= 3) {
//   message = "Весна, всё цветёт и пахнет!";
// } else if (randomMonth <= 9 && randomMonth >= 6) {
//   message = "Лето, жарко, пойдём на пляж?";
// } else if (randomMonth <= 12 && randomMonth >= 9) {
//   message = "Осень, листья опадают, готовимся к зиме!";
// }
// console.log(message);

//!массивы

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log(a.concat(b));
// console.log(a.reverse());

// a.push(4, 5, 6);
// a.unshift(4, 5, 6);
// console.log(a);

// const lang = ["js", "css", "jq"];
// const str1 = lang.push();
// const str2 = lang.pop();
// console.log(str2);

// const a = [1, 2, 3, 4, 5];
// const b = a.slice(3, a.length);
// console.log(b);

// const a = [1, 2, 3, 4, 5];
// const b = a.slice(0, a.length -2);
// console.log(b);

// const a = [1, 2, 3, 4, 5];
// const b = a.splice(1, 2);
// console.log(a);
// console.log(b);
// const b = a.splice(1, 0, 2, 3, 4, 5, 6, 7);
// const b = a.splice(1, 0, "a", "b");
// const c = a.splice(6, 0, "c");
// const d = a.splice(a.length, 0, "e");
// console.log(a);

// const a = [3, 4, 1, 2, 7];
// const b = a.sort();
// console.log(a);

//! Функции
// function test(x, y, i) {
//   console.log(`KAVO? TAVO! ${x + y + i - (x - y)}`);
// }
// test(2, 3, 26);
// test(1, 5, 6);
// test(2, 2, 4);

// function boolToWord(bool) {
//   let message = "";
//   if (bool === true) {
//     return (message = "Yes");
//   } else {
//     return (message = "No");
//   }
// }
// console.log(message);

//! Генератор дразнилок
// const body = [
//   "нос",
//   "рука",
//   "нога",
//   "глаза",
//   "пальцы",
//   "спина",
//   "уши",
//   "губы",
//   "щёки",
// ];
// const randombody = Math.floor(Math.random() * body.length);

// const bodyPiece = [
//   "уродливее",
//   "отвратительнее",
//   "кривее",
//   "темнее",
//   "зажмышенее",
//   "жирнее",
//   "лысее",
//   "большее",
// ];
// const randomPiece = Math.floor(Math.random() * bodyPiece.length);

// const animal = [
//   "жирафа",
//   "кенгуру",
//   "лисицы",
//   "собаки",
//   "попугая",
//   "куницы",
//   "обезьяны",
//   "ежа",
//   "слона",
// ];
// const animalRandom = Math.floor(Math.random() * animal.length);

// const animalPiece = [
//   "нос",
//   "рука",
//   "нога",
//   "глаза",
//   "пальцы",
//   "спина",
//   "уши",
//   "губы",
//   "щёки",
// ];
// const randomAnimalPiece = Math.floor(Math.random() * animalPiece.length);

// const text = `У тебя ${body[randombody]} еще более ${bodyPiece[randomPiece]}, чем ${animalPiece[randomAnimalPiece]} у ${animal[animalRandom]}`;

// console.log(text);

//! цикл for, forin
// for (let i = 0; i <= 100; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let result = 0;
// for (let i = 0; i <= 100; i += 1) {
//   result += i;
//   console.log(result);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   const result = arr[i];
//   console.log(result);
// }

// let arr = [1, 2, 3, 4, 5];
// let total = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   total += arr[i];
// }
// console.log(total);

// let arr = [2, 5, 9, 15, 0, 7, 8, 4, 6, 2, 1, 7, 9, 6, 4, 2, 1];
// let total = 0;

// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     total += arr[i];
//   }
// }
// console.log(total);

// let arr = [2, -5, 9, 15, -0, 7, -8, 4, 6, -2, -1, 7, -9, 6, -4, 2, 1];
// let total = 0;

// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] > 0) {
//     total += arr[i];
//   }
// }
// console.log(total);

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] === 4) {
//     console.log("EST!");
//   }
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
//  array.forEach(element => {

//  });
//  for (const iterator of object) {

//  }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key);
//   console.log(book[key]);
// }

// const goods = {
//   apples: 65,
//   grapes: 15,
//   bread: 42,
//   cheese: 71,
// };

// const values = Object.values(goods);
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total);

//!рест и деструктуризацию сделать

//! Виселица (игра)
// const words = [
//   "программа",
//   "макака",
//   "оладушек",
//   "спринт",
//   "лопата",
//   "гриф",
//   "баня",
//   "оружие",
//   "колодец",
//   "жмых",
// ];
// const word = words[Math.floor(Math.random() * words.length)];
// const tries = word.length;

// const answerArray = [];
// for (let i = 0; i < word.length; i += 1) {
//   answerArray[i] = "_";
// }

// let remainingLetters = word.length;
// while (remainingLetters > 0) {
//   alert(answerArray.join(" "));
//   let guess = prompt("Угадайте букву или нажмите 'Отмена' для выхода из игры!");
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Пожалуйста, введите одну букву!");
//   } else {
//     for (let k = 0; k < word.length; k += 1) {
//       if (word[k] === guess) {
//         answerArray[k] = guess;
//         remainingLetters--;
//       }
//     }
//   }
// }
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово:" + " " + word);

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// const numbers = [5, 10, 15, 20, 25];

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
