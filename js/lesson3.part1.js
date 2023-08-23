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
// Іноді, під час створення об'єкта значення властивості необхідно взяти зі змінної або
// параметра функції з таким самим ім'ям, що і у властивості.

// Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться дублювати
// ім'я властивості та ім'я змінної, в якій зберігається потрібне значення.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

//! Синтаксис коротких властивостей(shorthand properties) вирішує цю проблему,
//! дозволяючи використовувати ім'я змінної у якості імені властивості, а її значення - у якості значення властивості.
// Тобто, оголошуючи об'єкт, достатньо вказати тільки ім'я властивості, а значення буде взяте зі змінної з аналогічним ім'ям.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

//TODO Обчислювальні властивості
// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям,
// яке ми заздалегідь не знаємо, тому що воно зберігається у якості значення змінної або у якості результату виконання функції.

// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'

// Синтаксис обчислювальних властивостей(computed properties) допомагає уникнути зайвого коду і,
// в деяких випадках, спростити його.Значенням обчислювальної властивості може бути будь - який валідний вираз.

// const propName = "name";
// const user = {
//   age: 25,
// Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'

//! МЕТОДИ ОБ'ЄКТА
// Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, наприклад, інформація про книгу тощо.
// Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, який є колекцією однотипних елементів.

// Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи.
//! Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для роботи з цими даними.

//TODO Доступ до властивостей об'єкта в методах
// Методи використовуються для роботи з властивостями об'єкта, їх зміни.
// Для доступу до об'єкта в методі використовується не ім'я змінної, наприклад bookShelf, а
//! ключове слово this - контекст. Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод,
// у нашому випадку - це посилання на об'єкт bookShelf.

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   getBooks() {
//     console.log(this.books);
//   },
// };

// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // [ 'The Last Kingdom', 'Dream Guardian' ]

// Для того, щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі,
// стандартно - «через крапку» до властивостей.

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     // const bookIndex = this.books.indexOf(bookName);
//     // this.books.splice(bookIndex, 1);
//     this.books.splice(this.books.indexOf(bookName), 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']