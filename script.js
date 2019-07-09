// get all the elements required for validation change and to show the error messages
const form = document.getElementById('emailSubmitForm');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-msg');

// regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// on key press the red colored warning should be gone and user should see the normal input box
emailInput.addEventListener('keydown', function handleEmailValueChange(event) {
  // remove the error msg if any
  if (errorMessage.textContent !== "") {
    errorMessage.textContent = "";
  }

  // remove the css class if present
  if (emailInput.classList.contains('email-invalid')) {
    emailInput.classList.remove('email-invalid');
  }
});

// submit event listener for form
form.addEventListener('submit', function handleFormSubmit(event) {
  event.preventDefault();     // stop the form from being submitted

  const email = emailInput.value; // get the value from email input box
  let errorMSg = "";

  if (!email) {                                           // if email value is empty
    errorMSg = "Please enter an email.";
    emailInput.classList.add('email-invalid');

  } else if (emailRegex.test(email)) {                    // if email input value is valid

    errorMSg = "";
    if (emailInput.classList.contains('email-invalid')) {
      emailInput.classList.remove('email-invalid');
    }

    alert("I have sent you an confirmation email...Please check your inbox... \n\n 😜🤪 No, I am just kidding...");

  } else {                                                // if email input value is invalid
    errorMSg = "Please enter a valid email address."
    emailInput.classList.add('email-invalid');

  }

  errorMessage.textContent = errorMSg;                    // set the error message

  // if ()
});