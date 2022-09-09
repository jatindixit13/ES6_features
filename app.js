console.log("hello World!");
//-----------------var Vs let/const--------------------------

set = () => {
  var width = 100;
  console.log(width * 2);
};
set();
// console.log(width); //it will give error bcoz var is function scoped.
//Now let see the issue with var

var age = 12;
if (age > 5) {
  var dogYears = age * 7;
  console.log(dogYears);
}
console.log(dogYears); // here this variable will leak and dogYears will be available becoz of block scope and not function scope.

//To fix this we have let and const which are block scoped.

if (age > 6) {
  let dogAge = age * 6;
  console.log(dogAge);
}
// console.log(dogAge);    //--dogAge is not defined is the error.

// let x=1;
// let x=2;   --reassigmnet not possible.

//-------------------Shorthand syntax for objects----------------------------------------
const first = "snickers";
const last = "bos";
// const age = 2;
const breed = "King Charles";
const dog = {
  // //before es6:
  // first:first,
  // last:last,
  // //after es6:
  firstName: first,
  last,
  age,
  breed,
  friends: ["Hugo", "Sunny"],
};
console.log(dog);
//2. Update is that we don't need to use function keyword inside object to create one
//after es6:
const car = {
  create(product) {},
  close(message) {},
};

// ----------------------arrow functions-------------------------------
//regular function
const names = ["Jatin", "deeskha", "soumya"];
const fullName = names.map(function (name) {
  return `${name} dixit`;
});
console.log(fullName);

//arrow function
const fullName1 = names.map((name) => {
  return `${name} dev`;
});
console.log(fullName1);

//arrow function when only one arg.
const fullName2 = names.map((name) => {
  return `${name} dixit`;
});
console.log(fullName2);

//arrow function with implicit return
const fullName3 = names.map((name) => `${name} dev`);
console.log(fullName3);
//   arrow functions are anonymous so sometime its hard to debug them so we can do
//   store a function inside a variable

// const fullName4 = (name) => {
//   alert(`hello ${name}`);
// };
// fullName4("Jatin");

//we can also return the object inside arrow functions
const race = "200m relay";
const winner = ["Arjun", "Karan", "Krish"];

const win = winner.map((winner, i) => ({ name: winner, race, place: i + 1 }));
console.table(win);
//---------------------------------destructuring-------------------------------------
/*The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
 */
const p = {
  fname: "JAtin",
  last: "Dixit",
  country: "India",
  city: "Uttar pradesh",
  social: {
    facebook: "Jatin.fb",
    instagram: "@jatin.d",
  },
};

// const { fname, last } = p;
// console.log(fname, last);

//nested data
const { facebook, instagram } = p.social;
console.log(facebook, instagram);

//renaming variables
const { facebook: fb, instagram: insta } = p.social;
console.log(fb, insta);

//default values
const { fname, ages = 30, lastn, color = "white" } = p;
console.log(fname, ages, lastn, color);

//destructuring arrays
const details = ["Jatin", 123, "male", 22];

const [name, id, gender] = details;
console.log(name, id, gender);

let firstn = "Dixit";
let lastName = "Jatin";
//swap using destructuring
[firstn, lastName] = [lastName, firstn];
console.log(firstn, lastName);
//-------------------------------spread Operator---------------------------------------------
// spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const x = ["a", "b", "c", "d"];
const y = ["e", "f", "g", "h"];

const z = [...x, ...y];
console.log(z);

const z2 = [...x, "atoz", ...y];
console.log(z2);

//some more example of spread operator
const Dishes = {
  pizzaName: "Chessy burst",
  size: "Medium",
  ingredients: ["Soy", "Italian Sausage", "Dough", "Cheese"],
};

const shoppingList = ["Milk", "Flour", ...Dishes.ingredients];
console.log(shoppingList);

//using spread operators inside the function
console.log(y.push(...x));

function sayHi(first, last) {
  console.log(`Hello ${first} and ${last}`);
}

const fullNames = ["Jatin", "Dixit"];
sayHi(...fullNames);
//----------------------------------Classes in Javascript--------------------------
class Dog {
  //must have method of a class is contructor
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    console.log(`My dog name is ${this.name} and its breed is ${this.breed}`);
  }
  //getter and setters
  get description() {
    return `${this.name} is a ${this.breed} dog`;
  }
  set nickname(value) {
    this.nick = value.trim();
  }
  get nickname() {
    return this.nick;
  }
}

const dollar = new Dog("Dollar", "Toddler");
dollar.bark();
const husk = new Dog("husky", "pug");
husk.bark();
dollar.description;
console.log((dollar.nickname = "      hushky          "));
console.log(dollar.nickname);

//classes can also be extended just you need to call super() on the class that is extending to it
//basically what super will do is it will call the parent or extending class first.

class Animal {
  constructor(name) {
    this.name = name;
    this.thirsty = 100;
    this.belly = [];
  }
  drink() {
    this.thirsty -= 10;
    return this.thirst;
  }
  eat(food) {
    this.belly.push(food);
    return this.belly;
  }
}

class Doggy extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log("Bark bark I'm a dog");
  }
}

const rhino = new Animal("Rhiney");
console.log(rhino);
console.log(rhino.eat("fruit"));
console.log(rhino.drink());
const snickers = new Doggy("Snickers", "Pug");
console.log(snickers);
console.log(snickers.eat("chicken"));
console.log(snickers.drink());
//-------------------------------fetching data from third party-------------------
const URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

// function to handle success
function success() {
  var data = JSON.parse(this.responseText); //parse the string to JSON
  console.log(data);
}

// function to handle error
function error(err) {
  console.log("Request Failed", err); //error details will be in the "err" object
}

var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error; // call error function if request failed
xhr.open("GET", URL); // open a GET request
xhr.send(); // send the request to the server.

//The Fetch API is a simpler, easy-to-use version of XMLHttpRequest to consume resources asynchronously. Fetch lets you work with REST APIs with additional options like caching data, reading streaming responses, and more.

// The major difference is that Fetch works with promises, not callbacks.
// GET Request.
fetch(URL)
  // Handle success
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors
