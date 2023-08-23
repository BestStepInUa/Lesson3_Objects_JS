//! ОБ'ЄКТИ

//TODO Створення об'єкта

// Для оголошення використовуються фігурні дужки {} - літерал об'єкта.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book);
// console.log(book.title);
// console.log(book['author']);
// console.log(book.genres);
// console.log(book.genres[0]);
// console.log(book.genres[1]);
// console.log(book["isPublic"]);
// console.log(book['rating']);

//TODO Власивості об'єкта
// Під час створення об'єкта можна додати властивості, кожна з яких описується парами ключ:значення.
//! Ключ ще називають ім'ям властивості і це завжди рядок. !//
//  Значенням властивості можуть бути будь - які типи:
// примітиви, масиви, об'єкти, булі, функції тощо.Властивості розділяються комою.

//? Правила іменування ключів - прості:
// Якщо ключ взятий в лапки, то це може бути довільний рядок.
// Якщо лапок немає, то є обмеження - ім'я без пробілів, починається літерою або символами _ і $

//TODO Вкладені властивості
// Значенням властивості може бути інший об'єкт, для того, щоб зберігати вкладені і згруповані дані.
// Наприклад, статистика користувача соціальної мережі складається з кількості відстежувачів, переглядів і лайків,
// і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування - окремо країна і місто.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user.location["country"]);

// У майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, мінімальною
// або максимальною кількістю відстежувачів тощо.

//TODO Звернення до властивостей
//* На місці звернення буде повернуто значення властивості з таким ім'ям.
//* Якщо об'єкт не містить властивості з таким ім'ям, на місці звернення повернеться undefined.

//? 1й СПОСІБ - Звернення до властивостей через крапку
// Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ім'я_властивості.
//! Синтаксис «через крапку» використовується у більшості випадків і доречний тоді,
//! коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'
// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']
// const bookPrice = book.price;
// console.log(bookPrice); // undefined

//? Звернення до вкладених властивостей
//! Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const userLocation = user.location;
// console.log(userLocation); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

//? Якщо значення властивості - це масив, тоді у нашому прикладі user.hobbies - звернення до цього масиву.
//!Далі можна отримати доступ до його елементів через квадратні дужки та індекс, або використовувати властивості і методи.

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// console.log(`${user.hobbies[1]}, ${user.hobbies[2]}`);

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

//? 2й СПОСІБ - Звернення до властивостей через квадратні дужки
// Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ім'я властивості"].
//! В дужках вказується не індекс елемента, а ім'я властивості у вигляді рядка.
// Синтаксис «квадратних дужок» використовується значно рідше, у разі,
// коли ім'я властивості заздалегідь невідоме або зберігається у змінній, наприклад, як значення параметра функції.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

//TODO  Зміна значення властивості
// Після створення об'єкта, значення його властивостей можна змінити.
// Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']
// book.genres[1] = 'adv';
// console.log(book.genres); // [ 'historical prose', 'adv', 'драма' ]
// book['rating'] = 10;
// console.log(book.rating); // 10

//TODO Додавання властивостей
// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.
//! Якщо під час запису значення за ім'ям, така властивість в об'єкті відсутня, вона буде створена.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book['originalLanguage'] = "en";
// book.translations = ["ua", "ru"];

// console.log('pageCount:', book.pageCount); // 836
// console.log('originalLanguage:', book.originalLanguage); // 'en'
// console.log('translations:', book.translations); // ['ua', 'ru']
// book.translations[2] = "fr";
// console.log('translations:', book.translations); // ['ua', 'ru', 'fr']

//TODO Короткі властивості