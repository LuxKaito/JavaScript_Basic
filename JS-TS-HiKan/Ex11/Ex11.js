
const btn = document.getElementById("submitBtn");
const usernameInput = document.getElementById("nameInput");

const outputNameStored = document.getElementById("outputNameStored");
const outputName = localStorage.getItem("username");
if (outputName) {
  outputNameStored.innerHTML = `Welcome back, ${outputName}!`;
}

const storedUsername = localStorage.getItem("username");
btn.addEventListener("click", () => {
  // console.log(usernameInput.value);
  localStorage.setItem("username", usernameInput.value);
  // document.getElementById("outputName").innerHTML = usernameInput.value;
  document.getElementById("outputName").innerHTML = `Hello, ${usernameInput.value}!`;
});