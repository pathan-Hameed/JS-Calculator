const allBtn = document.querySelectorAll(".button button");

const screen = document.querySelector(".screen");

const clear = document.querySelector("#clear");

const allClear = document.querySelector("#allClear");

const equal = document.querySelector("#equal");

const resultEq = document.querySelector("#result .equation");

const history = document.querySelector(".history");

const equationArr = [];

let value;

allBtn.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});

function calculate(button) {
  equationArr.push(button.innerText);
  resultEq.innerText = equationArr.join("");
  screen.value = eval(resultEq.innerText);
}

equal.addEventListener("click", () => {
  equationArr.pop(); //remove "="
  resultEq.innerText = equationArr.join("");
  const finalEquation = resultEq.innerText;
  const finalResult = screen.value;

  const historyItem = document.createElement("div");
  historyItem.className = "history-item";

  let historyeq = document.createElement("p");
  historyeq.className = "historyEq";
  historyeq.innerText = finalEquation;

  let historyres = document.createElement("p");
  historyres.className = "historyRes";
  historyres.innerText = finalResult;

  historyItem.appendChild(historyeq);
  historyItem.appendChild(historyres);

  const currentRecord = history.querySelectorAll(".history-item");
  if (currentRecord.length >= 2) {
    history.removeChild(currentRecord[0]);
  }

  history.appendChild(historyItem);

  screen.value = "";
  equationArr.splice(0, equationArr.length);
  resultEq.innerText = "";
});

clear.addEventListener("click", () => {
  screen.value = "";
  equationArr.splice(0, equationArr.length);
  resultEq.innerText = "";
});

allClear.addEventListener("click", () => {
  screen.value = "";
  equationArr.splice(0, equationArr.length);
  resultEq.innerText = "";
  history.innerText = "";
});
