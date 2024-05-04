const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Function to handle page transition
function transitionToIndexPage() {
  const container = document.querySelector(".container");
  container.style.opacity = 0; // Set container opacity to 0
  setTimeout(function() {
    window.location.href = "index.html"; // Redirect to index page after transition
  }, 500); // Adjust the duration (in milliseconds) to match the transition duration
}

const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission
  transitionToIndexPage(); // Call the transition function
});

const registerButton = document.getElementById("sign-up");
registerButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission
  transitionToIndexPage(); // Call the transition function
});
