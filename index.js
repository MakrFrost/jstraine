// const dead = "Вы хотите?";
// const deadDead = "Вы хотите?";
// const deadDeadDed = "Вы хотите?";
// alert(dead);
// confirm(deadDead);
// const result = prompt(deadDeadDed);
// console.log(result);

// console.log(0.14 + 0.88);
// console.log((0.14 + 0.88).toFixed(99));

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
const randomAge = Math.random() * (100 - 1) + 1;
console.log(randomAge.toFixed(0) && 10); //Остановка на правом(последнем) всегда = false
console.log(0 && randomAge.toFixed(0)); //false

//! ||(true)
console.log(0 || randomAge.toFixed(0)); //возраст больше нуля, тобишь = true
console.log(randomAge.toFixed(0) < 100 || randomAge.toFixed(0) > 100); //true
console.log(randomAge.toFixed(0) || false);
console.log(15 || true); // 15

//!(reverse)
console.log(!randomAge.toFixed(0));
console.log(!0);
