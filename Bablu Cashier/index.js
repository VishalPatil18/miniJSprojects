const billAmount = document.querySelector("#bill-amt");
const nextBtn = document.querySelector("#next");
const checkBtn = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-give");
const cashTitle = document.querySelector(".title");
const billMessage = document.querySelector("#bill-message");
const cashMessage = document.querySelector("#cash-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const table = document.querySelector("#table-id");

const notes = [2000, 500, 100, 50, 20, 10, 5, 1];

nextBtn.addEventListener("click", () => {
  hideError1();
  if (billAmount.value > 0) {
    showCash();
  } else {
    showError1(
      "Bill 0 Kaise ho skta hai Yaar😑 The  bill amount should be greater then 0"
    );
  }
});

checkBtn.addEventListener("click", () => {
  hideError2();
  let cashValue = Number(cashGiven.value);
  let billValue = Number(billAmount.value);

  if (cashValue >= billValue) {
    const amountToReturn = cashValue - billValue;
    showTable();
    calculateChange(amountToReturn);
  } else {
    showError2("Pura Cash do bhai, Nhito bartan dhona Padega!");
  }
});

function calculateChange(amountToReturn) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amountToReturn / notes[i]);
    amountToReturn %= notes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showCash() {
  cashGiven.style.display = "block";
  checkBtn.style.display = "block";
  cashTitle.style.display = "block";
}

function hideError1() {
  billMessage.style.display = "none";
}

function hideError2() {
  cashMessage.style.display = "none";
}

function showError1(msg) {
  billMessage.style.display = "block";
  billMessage.innerText = msg;
}

function showError2(msg) {
  cashMessage.style.display = "block";
  cashMessage.innerText = msg;
}

function showTable() {
  table.style.display = "block";
}
