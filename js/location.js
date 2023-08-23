const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // Об'єкт location

const country = user.location.country;
console.log(country); // 'Jamaica'