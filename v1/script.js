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

// Using querySelector to select DOM elements by class
const btn_open = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// display the properties of the button object
// console.dir(btn_open);

// Create DOM elements: Render facts in list
// Empty facts list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch("https://pmvnqwilgbwcxviomyhe.supabase.co/rest/v1/facts", {
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdm5xd2lsZ2J3Y3h2aW9teWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MDY5NDMsImV4cCI6MjAyNjI4Mjk0M30.4QYO50tQEJ5uv7JoagwyqcLr53BCnduHDPr2-SJlamI",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdm5xd2lsZ2J3Y3h2aW9teWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MDY5NDMsImV4cCI6MjAyNjI4Mjk0M30.4QYO50tQEJ5uv7JoagwyqcLr53BCnduHDPr2-SJlamI",
    },
  });

  const data = await res.json()
  
  console.log(data);

  createFactsList(data);
};



/* 
use .map to iterate over each fact object in the  dataArray and use
a template literal to create a HTML element with the properties of the 
fact object
// */
// const htmlArr = initialFacts.map((fact)=>`<li class="fact">${fact.text}</li>`);
// // turn resulting array into a string with .join
// const html = htmlArr.join("");
// // insert HTML text into the DOM
// factsList.insertAdjacentHTML("afterbegin", html)

// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) =>
      `<li class="fact">
    <p> ${fact.text}
      <a class="source" href="${fact.source}" target="_blank">(Source)</a> 
    </p> 
    <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}>${fact.category}</span> 
  </li>`
  );

  // // turn resulting array into a string with .join
  const html = htmlArr.join("");
  // // insert HTML text into the DOM
  factsList.insertAdjacentHTML("afterbegin", html);
}

/* 
Event listener with a built-in 
function to toggle form visibility
*/
btn_open.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn_open.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn_open.textContent = "Share a fact";
  }
});
