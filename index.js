const diceObj = [
  { dice: "⚀", val: 1 },
  { dice: "⚁", val: 2 },
  { dice: "⚂", val: 3 },
  { dice: "⚃", val: 4 },
  { dice: "⚄", val: 5 },
  { dice: "⚅", val: 6 },
];
const form = document.querySelector("#dice-form");
let diceOutput = document.querySelector("#dice-para");
let sumOutput = document.querySelector("#sum-para");
const ul = document.querySelector("#dice-history");
let sumDis = 0

const rollDice = (event) => {
  let sum = 0;
  event.preventDefault();
  diceOutput.textContent = "";
  const num = document.querySelector("#dice-length").value;
  const diceNum = parseInt(num);
  for (let i = 0; i < diceNum; i++) {
    const ranDice = Math.floor(Math.random() * diceObj.length);
    diceOutput.textContent += diceObj[ranDice].dice;
    sum += diceObj[ranDice].val;
    sumOutput.textContent = "Sum = " + sum;
    sumDis = sum
  }
};

form.addEventListener("submit", rollDice);

form.addEventListener("submit", () => {
  let li = document.createElement("li")
  li.textContent =  `${diceOutput.textContent} = ${sumDis}`
  ul.appendChild(li)
})



