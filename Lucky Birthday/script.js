const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

function calculateSum() {
  let birthDay = birthDate.value;
  let dob = birthDay.replaceAll("-", "");
  let sum = 0;
  for (let x = 0; x < dob.length; x++) {
    sum += Number(dob[x]);
  }
  return sum;
}

checkBtn.addEventListener("click", () => {
  let luckyNum_ = Number(luckyNum.value);
  let sum = calculateSum();
  if (luckyNum_ && sum) {
    if (sum % luckyNum_ === 0) {
      outputBox.innerText = "Congratulations!! Your BirthDay is Lucky";
    } else {
      outputBox.innerText = "Oops!! Unfortunately your Birthday is not so Lucky";
    }
  } else {
    outputBox.innerText = "Birth Date and Lucky Number fields cannot be empty";
  }
});
