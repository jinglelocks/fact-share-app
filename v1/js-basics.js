// Using querySelector to select html elements by class
const btn_open = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

// Event listener with a built-in function
btn_open.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn_open.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn_open.textContent = "Share a fact";
  }
});

/*
let votesInteresting = 23;
let votesMindblowing = 5;

const text = "Lisbon is the capital of Portugal"

votesInteresting = votesInteresting + 1;
votesInteresting++
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);
*/

// Classic Function --------------
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less or equal to ${currentYear}`;
}

const age1 = calcFactAge(2024);
console.log(age1);

// Arrow Function --------------
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal to 
 ${new Date().getFullYear()}`;

console.log(calcFactAge2(2024));
console.log(calcFactAge2(2049));

// let votesInteresting = 10;
// let votesMindblowing = 0;

// If / Else If / Else --------------
// if (votesInteresting === votesMindblowing) {
//   alert("This fact is equally interesting and mindblowing");
// } else if (votesInteresting > votesMindblowing) {
//   console.log("Interesting fact!");
// } else if (votesInteresting < votesMindblowing) {
//   console.log("Mindblowing fact!");
// }

// Truthy / Falsy --------------
// // falsy values: 0, '', null, undefined
// // truthy values: everything else...
// if (votesMindblowing) {
//   console.log("MINDBLOWING FACT");
// } else {
//   console.log("Not so special...");
// }

// let votesFalse = 7;
// const totalUpvotes = votesInteresting + votesMindblowing;

// Ternary Operator --------------
// const message = totalUpvotes > votesFalse ? "The fact is true." : "Might be false, check more sources."

// // alert(message);

// Text Manipulation --------------
// const text = "Lisbon is the capital of Portugal";
// const upperText = text.toUpperCase();
// console.log(upperText);

// Template Literals --------------
// const str = `The current fact is "${text}" it is ${calcFactAge(2015)} years old. It is probably ${totalUpvotes > votesFalse ? "correct" : "not true"}.`;
// console.log(str);

// Arrays --------------
const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

// De-structuring
const [text, createdIn, isCorrect] = fact;
console.log(text, createdIn);

// Spreading
const newFact = [...fact, "society"];
console.log(newFact);

// Objects --------------
// const factObj = {
//   text: 'Lisbon is the capital of Portugal',
//   category: 'society',
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function() {
//     return `The fact ${this.text} is from the category ${this.category.toUpperCase()}.`
//   },
// };

// console.log(factObj.text);
// console.log(factObj['text']);

// // De-structuring Objects
// const { category, isCorrect } = factObj;
// console.log(category);

// // Calling functions as object properties
// console.log(factObj.createSummary());

// Array methods --------------
/* .forEach
This method takes a function and executes it for each element
in the array. You can pass the element in as an argument 
*/

// [2, 4, 6, 8].forEach(function (element) {
//   console.log(element);
// });

/* .map
This method calls a function for each element in the array
and populates a new array with the results
*/
// Classic Function
// const times10 = [2, 4, 6, 8].map(function(element) {
//   return element * 10;
// })
// Arrow Function
// const times10 = [2, 4, 6, 8].map((element)=>element*10)

// console.log(times10);

// .map with Object properties Example 1
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((element) => element.name);
console.log(allCategories);

// .map with Object properties Example 2
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((element) => calcFactAge(element.createdIn));
console.log(factAges);

/* .join
creates a string out of the array, need to specify a separator
*/
console.log(factAges.join("-"));
