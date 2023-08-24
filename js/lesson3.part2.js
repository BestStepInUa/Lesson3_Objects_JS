//! Синтаксис spread і rest

//TODO spread: передача аргументів
// Операція ... (spread) дозволяє розподілити колекцію елементів(масив, рядок або об'єкт) в місце,
// в якому очікується набір окремих значень.Звичайно, існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки.

// Можна навести аналогію з ящиком яблук.Поставивши ящик на підлогу, не виймаючи з нього яблука, отримаємо аналог масиву значень.
// Якщо висипати яблука з ящика на підлогу, відбудеться розподіл - набір окремих значень.

// Відмінність лише одна - в JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента.
// Після розподілу залишиться і ящик повний яблук, і копія кожного яблука на підлозі.

// Наприклад, метод Math.max(аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.

// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// Тобто запис Math.max(...[14, -4, 25, 8, 11]), після інтерпретації перетворюється у Math.max(14, -4, 25, 8, 11) -
// синтаксис ... повертає розпакований масив, тобто розподіляє його елементи у якості окремих аргументів.

//TODO spread: створення нового масиву
// Операція ... (spread) дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий.
// Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

// //* EXP 1 - копія масиву
// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps

// const temps = [14, -4, 25, 8, 11];

// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// // По суті це аналог методу [arr].slice()
// const newCopyOfTemps = temps.slice();
// console.log(newCopyOfTemps); // [14, -4, 25, 8, 11]

// //* EXP 2 - сшивання 2х масивів в один
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];

// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// // По суті це аналог методу [arr1].concat(arr2)
// const allTempsViaConcat = lastWeekTemps.concat(currentWeekTemps);
// console.log(allTempsViaConcat); // [14, 25, 11, 23, 17, 18]

//TODO spread: створення нового об'єкта
// Операція ... (spread) дозволяє розподілити властивості довільної кількості об'єктів в один новий.

//* EXP 1
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// По суті це аналог такого запису:
// const fouth = {
//     propA: first.propA,
//     propB: first.propB,
//     propC: second.propC
// }
// console.log(fouth);

// А як воно влаштовано під капотом ?

//* EXP 2
// Порядок розподілу має значення.Імена властивостей об'єкта - унікальні, тому властивості об'єкта,
// що розподіляється, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

//? Під час розподілу можна додавати властивості у довільне місце.
//? Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

//TODO rest: збирання всіх аргументів функції
// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію (масив).
// Синтаксично - це близнюк операції розподілу ... (spread), але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині операції присвоювання,
// а збирання - коли ... знаходиться в її лівій частині.

// Повернемось до аналогії з яблуками.Якщо на підлозі лежать яблука і у нас є порожній ящик,
// то операція rest дозволить «зібрати» яблука в ящик. Водночас, оригінальні яблука залишаться на підлозі, а в ящику буде копія кожного яблука.

//? EXP -  Одна зі сфер застосування операції rest - це створення функцій, які можуть приймати будь-яку кількість аргументів.
// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?
// function multiply() {
//   // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// Якщо прибрати увесь «синтаксичний шум» і подивитися на аргументи і параметри функції,
// то аргументи знаходяться у правій частині операції присвоювання, а параметри - у лівій,
// тому що значення аргументів присвоюються оголошеним параметрам. Отже, можна «зібрати» всі аргументи функції в один параметр, використовуючи операцію rest.
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2); // [ 1, 2 ]
// multiply(1, 2, 3); // [ 1, 2, 3 ]
// multiply(1, 2, 3, 4); // [ 1, 2, 3, 4 ]

// Ім'я параметра може бути довільним. Найчастіше його називають args, restArgs або otherArgs - скорочено від arguments.

//TODO rest: збирання частини аргументів функції
// Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання».
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2); // 1 2 []
multiply(1, 2, 3); // 1 2 [ 3 ]
multiply(1, 2, 3, 4); // 1 2 [ 3, 4 ]