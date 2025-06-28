var billValue = document.getElementById("bill");
var persons = document.getElementById("peoples");
var tipPerPerson = document.getElementById("tip-person");
var totalPerPerson = document.getElementById("amount-person");
var error = document.querySelector(".error");
var inputError = document.querySelector(".input-error");
var billInput = document.querySelector(".billInput");
var resetButton = document.querySelector(".reset-disable");
var customInput = document.querySelector(".custom-input");

customInput.style.display = "none";
function changeInput(e) {
  if (e.name == "bill" && !(e.value > 0)) {
    billInput.style.borderColor = "rgb(255, 72, 72)";
    return;
  } else {
    billInput.style.borderColor = "transparent";
  }
  if (e.name == "peoples" && !(e.value > 0)) {
    inputError.style.borderColor = "rgb(255, 72, 72)";
    error.style.display = "block";
    return;
  } else {
    inputError.style.borderColor = "transparent";
    error.style.display = "none";
  }
}
function tipValue(e) {
  if (!(billValue.value > 0)) {
    billInput.style.borderColor = "rgb(255, 72, 72)";
    return;
  }
  if (!(persons.value > 0)) {
    error.style.display = "block";
    inputError.style.borderColor = "rgb(255, 72, 72)";
    return;
  } else {
    resetButtonColor(e);
    resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";
    resetButton.disabled = false;
    let tip = (Number(billValue.value) * e.value) / 100;
    let tipPer = tip / persons.value;
    let total = (Number(billValue.value) + tip) / persons.value;
    tipPerPerson.innerText = `$${tipPer.toFixed(2)}`;
    totalPerPerson.innerText = `$${total.toFixed(2)}`;
  }
}
resetButton.onclick = function () {
  billValue.value = "";
  persons.value = "";
  tipPerPerson.innerText = "$0.00";
  totalPerPerson.innerText = "$0.00";
  resetButton.disabled = true;
  document.getElementById("custom").style.display = "block";
  customInput.value = "";
  customInput.style.display = "none";
  resetButton.style.backgroundColor = "hsl(186, 14%, 43%)";
  resetButtonColor();
};
function switchButton(e) {
  e.style.display = "none";
  customInput.style.display = "block";
}
function resetButtonColor(e) {
  let buttons = document.getElementsByTagName("button");
  for (i = 0; i < 5; i++) {
    buttons[i].id = "";
  }
  if (e.type == "button") {
    e.id = "active";
  }
}
