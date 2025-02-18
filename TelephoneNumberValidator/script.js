// Utility function for validating US phone numbers
function isValidUSPhoneNumber(phoneNumber) {
  const regex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  return regex.test(phoneNumber);
}

// Elements
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Check Button Click Event
checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();

  if (!input) {
    alert("Please provide a phone number");
    return;
  }

  if (isValidUSPhoneNumber(input)) {
    resultsDiv.textContent = `Valid US number: ${input}`;
    resultsDiv.style.color = "#28a745"; // Green for valid numbers
  } else {
    resultsDiv.textContent = `Invalid US number: ${input}`;
    resultsDiv.style.color = "#dc3545"; // Red for invalid numbers
  }
});

// Clear Button Click Event
clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
});
