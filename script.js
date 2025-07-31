// ===============================
// Part 1: Variables and Conditionals
// ===============================
let userName = "Alice";
let userAge = 22;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ===============================
// Part 2: Functions
// ===============================

// Function to greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome!`;
}

// Function to check even or odd
function isEven(number) {
  return number % 2 === 0;
}

// ===============================
// Part 3: Loops
// ===============================

// Loop Example 1: For loop
function generateNumbersList() {
  let results = [];
  for (let i = 1; i <= 5; i++) {
    results.push(`Number: ${i}`);
  }
  return results;
}

// Loop Example 2: While loop
function countdown(n) {
  let results = [];
  while (n > 0) {
    results.push(`Countdown: ${n}`);
    n--;
  }
  return results;
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// Interaction 1: Greet button
document.getElementById("greetButton").addEventListener("click", () => {
  const message = greetUser(userName);
  document.getElementById("greetMessage").textContent = message;
});

// Interaction 2: Even/Odd Checker
document.getElementById("checkEvenOdd").addEventListener("click", () => {
  const num = parseInt(document.getElementById("numberInput").value);
  const message = isEven(num) ? `${num} is even.` : `${num} is odd.`;
  document.getElementById("result").textContent = message;
});

// Interaction 3: Show Loops
document.getElementById("showLoops").addEventListener("click", () => {
  const list = document.getElementById("loopResults");
  list.innerHTML = ""; // clear previous
  const nums = generateNumbersList();
  const countdownList = countdown(3);
  const combined = [...nums, ...countdownList];

  combined.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});
