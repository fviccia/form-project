const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

const passwordConfirm = document.getElementById("password-confirm");
const passwordConfirmError = document.querySelector(
  "#password-confirm + span.error"
);

// country.addEventListener("input", inputCheck);
// zip.addEventListener("input", inputCheck);
// password.addEventListener("input", inputCheck);
// passwordConfirm.addEventListener("input", inputCheck);

email.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

country.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (country.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    countryError.innerHTML = ""; // Reset the content of the message
    countryError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showCountryError();
  }
});

function showCountryError() {
  if (country.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    countryError.textContent = "You need to enter a country.";
  }

  // Set the styling appropriately
  countryError.className = "error active";
}

zip.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (zip.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    zipError.innerHTML = ""; // Reset the content of the message
    zipError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showZipError();
  }
});

function showZipError() {
  if (zip.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    zipError.textContent = "You need to enter a zip code.";
  } else if (zip.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    zipError.textContent = `zip should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
  }

  // Set the styling appropriately
  zipError.className = "error active";
}

password.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (password.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    passwordError.innerHTML = ""; // Reset the content of the message
    passwordError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showPasswordError();
  }
});

function showPasswordError() {
  if (password.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.typeMismatch) {
    // If the field doesn't contain an password address
    // display the following error message.
    passwordError.textContent = "Entered value needs to be a password.";
  } else if (password.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    passwordError.textContent = `password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }

  // Set the styling appropriately
  passwordError.className = "error active";
}

passwordConfirm.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (passwordConfirm.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    passwordConfirmError.innerHTML = ""; // Reset the content of the message
    passwordConfirmError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showPasswordConfirmError();
  }
});

function showPasswordConfirmError() {
  if (passwordConfirm.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    passwordConfirmError.textContent = "You need to confirm your password.";
  } else if (passwordConfirm.validity.typeMismatch) {
    // If the field doesn't contain an passwordConfirm address
    // display the following error message.
    passwordConfirmError.textContent = "Entered value needs to be a password.";
  } else if (passwordConfirm.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    passwordConfirmError.textContent = `password should be at least ${passwordConfirm.minLength} characters; you entered ${passwordConfirm.value.length}.`;
  }
  if (passwordConfirm.value !== password.value) {
    // If the passwords doesnt match.
    // display the following error message.
    passwordConfirmError.textContent = `Password confirmation should match with password.`;
  }
  // Set the styling appropriately
  passwordConfirmError.className = "error active";
}

form.addEventListener("submit", function (event) {
  // if the form contains valid data, we let it submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  if (!country.validity.valid) {
    // If it isn't, we display an appropriate error message
    showCountryError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  if (!zip.validity.valid) {
    // If it isn't, we display an appropriate error message
    showZipError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  if (!password.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPasswordError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  if (!passwordConfirm.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPasswordConfirmError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});
