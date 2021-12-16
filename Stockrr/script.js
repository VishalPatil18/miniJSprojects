let root = document.documentElement;
let currentPriceInput = document.querySelector("#current-price");
let purchasePriceInput = document.querySelector("#purchase-price");
let stockQuantityInput = document.querySelector("#stock-quantity");
let checkAction = document.querySelector("#check");
let result = document.querySelector("#result");
let resultText = document.querySelector("#result-text");

function giveResult(event) {
  event.preventDefault();

  if (
    !currentPriceInput.value ||
    !purchasePriceInput.value ||
    !stockQuantityInput.value
  ) {
    alert("Your input is not valid!");
    return;
  }

  let currentPrice = parseFloat(currentPriceInput.value);
  let purchasePrice = parseFloat(purchasePriceInput.value);
  let stockQuantity = parseInt(stockQuantityInput.value);

  if (currentPrice <= 0 || purchasePrice <= 0 || stockQuantity <= 0) {
    alert("Invalid values. Please enter valid values😤");
    return;
  }

  if (currentPrice > purchasePrice) {
    let percentProfit = (
      ((currentPrice - purchasePrice) / purchasePrice) *
      100
    ).toFixed(2);
    let absoluteProfit = (
      (currentPrice - purchasePrice) *
      stockQuantity
    ).toFixed(2);

    if (percentProfit >= 50) {
      root.style.setProperty("--primary-color", "#8AFF8A");
      root.style.setProperty("--secondary-color", "#065F46");
    }

    result.style.display = "block";

    resultText.textContent =
      "You gained " +
      percentProfit +
      "%. Your total profit is " +
      absoluteProfit +
      "🤩";
  } else if (currentPrice < purchasePrice) {
    let percentLoss = (
      ((purchasePrice - currentPrice) / purchasePrice) *
      100
    ).toFixed(2);
    let absoluteLoss = ((purchasePrice - currentPrice) * stockQuantity).toFixed(
      2
    );

    if (percentLoss >= 50) {
      root.style.setProperty("--primary-color", "#EF4444");
      root.style.setProperty("--secondary-color", "#991B1B");
    }
    result.style.display = "block";

    resultText.textContent =
      "You lost " +
      percentLoss +
      "%. Your total loss is " +
      absoluteLoss +
      "😔";
  } else if (currentPrice === purchasePrice) {
    result.style.display = "block";
    resultText.textContent = "No Profit, No Loss😎";
  }
}

checkAction.addEventListener("click", giveResult);
