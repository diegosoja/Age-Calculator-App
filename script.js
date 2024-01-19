let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value);
}
