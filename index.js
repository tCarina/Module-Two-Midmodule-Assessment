
const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const form = document.querySelector("#dice-form");
const submit = document.querySelector("#dice-submit");
let diceOutput = document.querySelector("#dice-para");

const rollDice = (event) => {
  event.preventDefault();
  diceOutput.textContent = ""
  const num = document.querySelector("#dice-length").value;
  const diceNum = parseInt(num);
  for (let i = 0; i < diceNum; i++) {
    const ranDice = Math.floor(Math.random() * dice.length);
    diceOutput.textContent += dice[ranDice];
  }
};

form.addEventListener("submit", rollDice);
let sum = document.querySelector("#sum-para");
let hisOutput = document.querySelector("#dice-history");
