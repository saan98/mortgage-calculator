// script.js

function calculateMortgage() {
  // Get input values from the form
  let loanAmount = parseFloat(document.getElementById("loanAmount").value);
  let interestRate =
    parseFloat(document.getElementById("interestRate").value) / 100;
  let loanTerm = parseFloat(document.getElementById("loanTerm").value);

  // Validate inputs
  if (
    isNaN(loanAmount) ||
    isNaN(interestRate) ||
    isNaN(loanTerm) ||
    loanAmount <= 0 ||
    interestRate <= 0 ||
    loanTerm <= 0
  ) {
    alert("Please enter valid positive numbers for all fields.");
    return;
  }

  // Calculate monthly interest rate
  let monthlyRate = interestRate / 12;

  // Calculate total number of payments (months)
  let totalPayments = loanTerm * 12;

  // Use mortgage formula to calculate monthly payment
  let numerator = monthlyRate * Math.pow(1 + monthlyRate, totalPayments);
  let denominator = Math.pow(1 + monthlyRate, totalPayments) - 1;
  let monthlyPayment = loanAmount * (numerator / denominator);

  // Round to two decimal places
  monthlyPayment = monthlyPayment.toFixed(2);

  // Display the result
  document.getElementById("monthlyPayment").textContent = monthlyPayment;
}
