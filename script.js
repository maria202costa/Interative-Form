const emailInput = document.querySelector(".email-input");
const form = document.querySelector(".form");
const buttonSubmit = document.getElementById("button-submit");
const divMessage = document.querySelector(".small-texts");
const mainPage = document.querySelector(".form-container");
const successPage = document.querySelector(".success-submit");
const emailDetail = document.querySelector(".container"); //
const closeBtn = document.querySelector("close-btn"); //

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

  buttonSubmit.addEventListener("click", function switchPage() {
    mainPage.classList.add("hidden");
    successPage.classList.remove("hidden");
  });
});

function buttonSuccess() {
  successPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
}

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
