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
let temp = [1, 2, 3, 4, 5, 6, 7, 8];
let randomTemp = Math.round(Math.random() * temp.length);

let message = "";

switch (randomTemp) {
  case 1:
    message = "*смотрит из льда*";
  case 2:
    message = "Мы что, в Антарктиде?";
    break;
  case 3:
    message = "Нужно было теплее одеться, чувак";
    break;
  case 4:
    message = "Слушай, как-то мёрзло!";
    break;
  case 5:
    message = "Довольно таки неплохо.";
    break;
  case 6:
    message = "Неплохая погода для прогулок, правда?";
    break;
  case 7:
    message = "Знойный май нас пропарит, время поло и маек";
    break;
  case 8:
    message = "Чувак, мы в Аду?";
    break;
  default:
    message = "Ну такое, которое можно, а может и нельзя";
}

console.log(message);

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
