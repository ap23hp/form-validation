let form = document.querySelector("form");
let emailInput = document.querySelector("#emailid");
let errorSpan = document.querySelectorAll(".error");

let countryInput = document.querySelector("#country");
let allowedCountries = ["India", "USA", "UK", "Canada"];
let postalInput = document.querySelector("#postalcode");
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#confirm-password");

//email validation
emailInput.addEventListener("input", function (e) {
  if (emailInput.checkValidity()) {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    errorSpan[0].textContent = "";
  } else {
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
    errorSpan[0].textContent = "Email id is invalid";
  }
});
// Country Validation
countryInput.addEventListener("input", function () {
  let value = countryInput.value.trim();

  if (!value) {
    countryInput.classList.remove("valid");
    countryInput.classList.add("invalid");
    errorSpan[1].textContent = "Country is required";
  } else if (!allowedCountries.includes(value)) {
    countryInput.classList.remove("valid");
    countryInput.classList.add("invalid");
    errorSpan[1].textContent = "Please enter a valid country";
  } else {
    countryInput.classList.remove("invalid");
    countryInput.classList.add("valid");
    errorSpan[1].textContent = "";
  }
});

//postal code validation

postalInput.addEventListener("input", function () {
  let value = postalInput.value.trim();

  // check: empty hai ya nahi
  if (value === "") {
    postalInput.classList.remove("valid");
    postalInput.classList.add("invalid");
    errorSpan[2].textContent = "Postal code is required";
  } 
  // check: sirf number aur exactly 6 digits
  else if (isNaN(value) || value.length !== 6) {
    postalInput.classList.remove("valid");
    postalInput.classList.add("invalid");
    errorSpan[2].textContent = "Postal code must be 6 digits";
  } 
  // valid case
  else {
    postalInput.classList.remove("invalid");
    postalInput.classList.add("valid");
    errorSpan[2].textContent = "";
  }
});

// password validation
passwordInput.addEventListener("input", function () {
  let value = passwordInput.value;

  if (value === "") {
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    errorSpan[3].textContent = "Password is required";
  } 
  else if (value.length < 8) {
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    errorSpan[3].textContent = "Password must be at least 8 characters";
  } 
  else if (!/[A-Z]/.test(value)) { //upeercase missing
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    errorSpan[3].textContent = "At least one uppercase letter required";
  } 
  else if (!/[a-z]/.test(value)) {//lowercase missing
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    errorSpan[3].textContent = "At least one lowercase letter required";
  } 
  else if (!/[0-9]/.test(value)) {//number missing
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    errorSpan[3].textContent = "At least one number required";
  } 
  else {
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
    errorSpan[3].textContent = "";
  }
});

// confirm password validation
confirmPasswordInput.addEventListener("input", function () {
  let passwordValue = passwordInput.value;
  let confirmValue = confirmPasswordInput.value;

  if (confirmValue === "") {
    confirmPasswordInput.classList.remove("valid");
    confirmPasswordInput.classList.add("invalid");
    errorSpan[4].textContent = "Please confirm your password";
  } 
  else if (confirmValue !== passwordValue) {
    confirmPasswordInput.classList.remove("valid");
    confirmPasswordInput.classList.add("invalid");
    errorSpan[4].textContent = "Passwords do not match";
  } 
  else {
    confirmPasswordInput.classList.remove("invalid");
    confirmPasswordInput.classList.add("valid");
    errorSpan[4].textContent = "";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault(); // form ko reload hone se roka

  // check if any field invalid hai
  let inputs = form.querySelectorAll("input");
  let allValid = true;

  inputs.forEach((input, index) => {
    if (!input.classList.contains("valid")) {
      allValid = false;
      errorSpan[index].textContent = "Please fix this field";
      input.classList.add("invalid");
    }
  });

  if (allValid) {
    alert("High five 🙌 Form submitted successfully!");
    form.reset();
     inputs.forEach((input) => {
    input.classList.remove("valid", "invalid");
  });
  } else {
    alert("Form has errors. Please fix them!");
  }
});