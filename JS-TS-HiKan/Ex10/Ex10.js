
const myTextElent = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");

const myackTextElent = document.getElementById("myBackBtn");

myTextElent.addEventListener("click", () => {
  console.log("Button clicked!");
  myTextElement.innerHTML = "Button was clicked!";
});

myackTextElent.addEventListener("click", () => {
  console.log("Back button clicked!");
  myTextElement.innerHTML = "Back button was clicked!";
});