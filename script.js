const emailInput = document.querySelector(".email-input");
const form = document.querySelector(".form");
const divMessage = document.querySelector(".small-texts");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valueEmail = emailInput.value;

  //the email can not be empty or not correctly formated:
  if (valueEmail === "" || !isEmailValid(valueEmail)) {
    //to create the message of invalide email:
    const Message = document.createElement("small");
    Message.textContent = "Valid Email Required";
    divMessage.appendChild(Message);
    Message.classList.add("error-message");

    emailInput.classList.toggle("error", "email-input");

    setTimeout(function () {
      Message.textContent = "";
      emailInput.classList.add("email-input");
      emailInput.classList.remove("error");
    }, 3000);
  }

  emailInput.value = "";
});

//to validate the email format:
function isEmailValid(email) {
  const EmailValidation = new RegExp(
    // The email estructure verification:
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (EmailValidation.test(email)) {
    return true;
  }

  return false;
}
