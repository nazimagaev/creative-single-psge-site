const billInput = document.querySelector(".bill-area__input");
const numberOfPeopleInput = document.querySelector(".number-of-people__input");
const buttonPercent = document.querySelector(".tip-percent__btns");
const buttonsTip = document.querySelectorAll(".tip-percent__btn");
const buttonReset = document.querySelector(".reset");
const customButton = document.querySelector(".custom");
const customInput = document.querySelector(".custom-input");

const tipAmountElement = document.querySelector(".tip-amount__number");
const totalAmountElement = document.querySelector(".total-amount__number");

let tipPercent;
let customInputValue;

buttonPercent.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked.classList.contains("tip-percent__btn")) {
    buttonsTip.forEach((item) => {
      item.classList.remove("tip-percent__btn-active");
    });
    clicked.classList.add("tip-percent__btn-active");
    tipPercent = clicked.textContent;
  }
});

function checkInputs() {
  if (!billInput.value) {
    return;
  } else if (!numberOfPeopleInput.value) {
    return;
  } else if (
    billInput.value &&
    // typeof billInput.value === "number" &&
    // typeof numberOfPeopleInput.value === "number" &&
    numberOfPeopleInput.value &&
    tipPercent
  ) {
    mainCalc();
  }
}

console.log(tipPercent);

function mainCalc() {
  console.log(tipPercent);
  if (customInput.value) {
    customInputValue = customInput.value;
    const tipAmount =
      (Number(billInput.value) * Number(customInputValue)) /
      100 /
      Number(numberOfPeopleInput.value);
    totalAmountElement.textContent = (
      Number(billInput.value) / Number(numberOfPeopleInput.value) +
      Number(tipAmount)
    ).toFixed(2);    // console.log(tipAmount.toFixed(2));
    // totalAmountElement.textContent = (
    //   Number(billInput.value) / Number(numberOfPeopleInput.value) +
    //   Number(tipAmount)
    // ).toFixed(2);
  } else {
    const tipAmount =
      (Number(billInput.value) * Number(tipPercent)) /
      100 /
      Number(numberOfPeopleInput.value);
    tipAmountElement.textContent = tipAmount.toFixed(2);
    console.log(tipAmount);
    totalAmountElement.textContent = (
      Number(billInput.value) / Number(numberOfPeopleInput.value) +
      Number(tipAmount)
    ).toFixed(2);
  }
}

function updateUi(tipAmount, totalAmount) {}

buttonReset.addEventListener("click", () => {
  customInput.value = "";
  billInput.value = "";
  numberOfPeopleInput.value = "";
  totalAmountElement.textContent = "$ 0.00";
  tipAmountElement.textContent = "$ 0.00";
  buttonsTip.forEach((item) => {
    item.classList.remove("tip-percent__btn-active");
  });
  customButton.style.display = "block";
  customInput.style.display = "none";
});

const selectCustom = function () {
  customButton.style.display = "none";
  customInput.style.display = "block";
};

customButton.addEventListener("click", selectCustom);

billInput.addEventListener("input", checkInputs);
numberOfPeopleInput.addEventListener("input", checkInputs);
customInput.addEventListener("input", checkInputs);
