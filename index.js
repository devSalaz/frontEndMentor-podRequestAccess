const errorEmail = "Oops! Please check your email";
const errorEmpty = "Oops! Please add your email";

const inputContainer = document.querySelector(".input-container");

const inputPodcast = document.querySelector("#inputPodcast");
inputPodcast.addEventListener("input", clearError);

const errorMessage = document.querySelector(".input-message-error");

const buttonPodcast = document.querySelector("button.request");
buttonPodcast.addEventListener("click", clickPodcast);

function clickPodcast() {
  removeClasses();
  let inputValue = inputPodcast.value.trim();
  if (inputValue.length < 1) {
    errorMessage.innerHTML = errorEmpty;
    ErrorMessage();
  } else if (!validateEmail(inputPodcast.value.trim())) {
    errorMessage.innerHTML = errorEmail;
    ErrorMessage();
  } else {
    clearError();
    SuccessMessage();
  }
}

function removeClasses() {
  inputContainer.classList.remove("error");
  inputContainer.classList.remove("success");
  inputPodcast.classList.remove("error");
  inputPodcast.classList.remove("success");
}

function ErrorMessage() {
  errorMessage.classList.add("active");
  inputContainer.classList.add("error");
  inputPodcast.classList.add("error");
}

function SuccessMessage() {
  inputContainer.classList.add("success");
  inputPodcast.classList.add("success");
}

function clearError() {
  errorMessage.classList.remove("active");
  inputContainer.classList.remove("error");
  inputPodcast.classList.remove("error");
  inputContainer.classList.remove("success");
  inputPodcast.classList.remove("success");
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
