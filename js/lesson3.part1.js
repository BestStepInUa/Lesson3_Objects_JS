//! ОБ'ЄКТИ !//

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

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

// const userLocation = user.location;
// console.log(userLocation); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// console.log(user['location'].country);
// console.log(user['location']['city']);

// console.log(user.location.country);
// console.log(user.location['city']);

// let lastHobbiesIndex = user.hobbies.length - 1;
// console.log(user.hobbies[lastHobbiesIndex]);
// console.log(user.hobbies[user.hobbies.length - 1]);

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

//! МЕТОДИ ОБ'ЄКТА !//
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

//! ПЕРЕБИРАННЯ ОБ'ЄКТА !//
// На відміну від масиву або рядка, об'єкт - це неітерабельна сутність, тобто його не можна перебрати циклами for або for...of.

//TODO Цикл * for...in *
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.
//! Даний метод(цикл) не розрізняє власних і невласних властивостей об'єкта

// for (key in bookShelf) {
//   console.log(key);
// }

// Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде записано значення ключа(ім'я) властивості.
// Для того, щоб отримати значення властивості з таким ключем(ім'ям), використовується синтаксис квадратних дужок.

// for (key in bookShelf) {
//   console.log(`${key}:`, bookShelf[key]);
// }

//TODO Метод * hasOwnProperty() *
//* Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal.
// Тому можна отримати значення властивості legs, звернувшись до нього як dog.legs,
// хоча він відсутній в об'єкті dog - це невласна властивість з об'єкта animal.

//! Оператор in, який використовується в циклі for...in, не робить різниці між власними та невласними властивостями об'єкта.
//! Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості.
//! Для того, щоб дізнатись, чи містить об'єкт власну властивість, використовується метод hasOwnProperty(key), який повертає true або false.

// ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

//!Тому, перебираючи циклом for...in, необхідно на кожній ітерації додати перевірку власної властивості.
// Навіть, якщо зараз ми впевнені у тому, що в об'єкті відсутні невласні властивості, це захистить від можливих помилок у майбутньому.

//* Exp 1
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(`${key} is`, book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

//* Exp 2
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// for (const key in dog) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (dog.hasOwnProperty(key)) {
//     console.log(`Own property key: ${key}`);
//     console.log(`Value of property ${key}:`, dog[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

//! Вбудований клас Object
//? Вбудований клас Object має декілька корисних методів для роботи з об'єктами

//TODO Метод * Object.keys()*
// Object.keys(obj) приймає об'єкт і повертає масив ключів його власних властивостей.
// Якщо об'єкт не має властивостей, метод поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта,
// і не використовуючи цикл for...in з перевірками належності властивостей.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// // Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.
// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

//TODO Метод * Object.values() *
// Object.values(obj) повертає масив значень його власних властивостей.
// Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//* Exp 1
// Масив значень властивостей також можна перебрати циклом for...of, наприклад, для отримання загальної суми числових значень.

// Припустимо, що нам потрібно порахувати загальну кількість продуктів в об'єкті формату ім'я - продукту: кількість.
// У такому випадку, буде доречним метод Object.values() для того, щоб отримати масив усіх значень, а потім зручно додати їх.

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

//TODO  Метод * Object.entries() *
// Object.entries(obj) повертає масив записів, кожен елемент якого, буде ще один масив з 2 - х елементів:
// імені властивості і значення цієї властивості з об'єкта obj.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries); // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

//! МАСИВ ОБ'ЄКТІВ
// Стандартний набір повсякденних завдань розробника містить маніпуляцію масивом однотипних об'єктів.
// Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// Для перебирання такого масиву використовується стандартний цикл for...of.
// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку»,
// оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізняються тільки значення.

// for (const book of books) {
//   // Об'єкт книга
//   console.log(book);
//   // Назва книги
//   console.log(book.title);
//   // Автор книги
//   console.log(book.author);
//   // Рейтинг книги
//   console.log(book.rating);
// }

//*  Exp 1
// Отримаємо список назв усіх книг в колекції books
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

//*  Exp 2
// Дізнаємося середній рейтинг усієї нашої колекції.
// Для цього, додамо усі рейтинги, після чого поділимо це значення на кількість книг в колекції.

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2
// console.log((totalRating / books.length).toFixed(1));

//! Деструктурізаці об'єкта

// const person = {
//   firstName: "John",
//   age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName);

// const {age} = person;
// console.log(age);

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
  //? exp 1
  // totalPrice: quantity * price;
  // const basket = {
  //   name: product,
  //   quantity,
  //   price,
  //   totalPrice
  // }
  // return basket;

  //? exp 2
//   return {
//     name: product,
//     quantity,
//     price,
//     totalPrice: quantity * price
//   };
// }

// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket('aplle', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
//   };

  //? exp 1
  // function getTime(obj) {
  //   const countPlayers = Object.keys(obj)?.length;
  //   const values = Object.values(obj);
  //   let totalTime = 0;
  //   for (const value of values) {
  //     totalTime += value;
  //   }
  //   return `Count of players ${countPlayers}, average time ${totalTime / countPlayers}`;
  //   }
  
  //? exp 2
//   function getTime(obj) {
//     const entries = Object.entries(obj);
//     let totalTime = 0;
//     for (const entry of entries) {
//       totalTime += entry[1];
//     }
//     return `Count of players ${entries.length}, average time ${totalTime / entries.length}`;
//     }

// console.log(getTime(players));
  
// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"], age: 0 },
  {
    name: "Oleksii",
    books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
    age: 26,
  },
];

function getUsers(arr, bookName) {
  const users = [];
  for (const user of arr) {
    if (user.books.includes(bookName)) {
      users.push(user.name);
    }
  }
  return users.join(', ');
}

console.log(getUsers(friends, "Harry Potter"));

console.log(getTotalAge(friends));