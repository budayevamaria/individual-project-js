const signupInputs = document.querySelectorAll(".signup__input");
const signupForm = document.querySelector("#signup-form");

const nameInput = document.querySelector("input[name='name']");
const lastNameInput = document.querySelector("input[name='last-name']");
const signupEmailInput = document.querySelector("input[name='signupEmail']");

const signupSuccessMessage = document.querySelector("#signupSuccessMessage");

const nameError = document.querySelector("#nameError");
const lastNameError = document.querySelector("#lastNameError");
const signupEmailError = document.querySelector("#signupEmailError");

const modal = document.querySelector(".modal");

function openModalWindow() {
  modal.classList.remove("modal__hide");
}

function closeModalWindow() {
  modal.classList.add("modal__hide");
}

//signup

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  const name = nameInput.value;
  const lastName = lastNameInput.value;
  const signupEmail = signupEmailInput.value;

  signupInputs.forEach(input => {
    if (input.value.trim() === "") {
      input.classList.add("error-border");
    } else {
      input.classList.remove("error-border");
    }
  });

  if (name.length === 0) {
    console.log("error");
    nameError.textContent = "Enter your first name";
    nameError.style.display = "inline-block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  if (lastName.length === 0) {
    console.log("error");
    lastNameError.textContent = "Enter your last name";
    lastNameError.style.display = "inline-block";
    isValid = false;
  } else {
    lastNameError.style.display = "none";
  }

  if (signupEmail.length === 0) {
    console.log("error");
    signupEmailError.textContent = "Enter your email";
    signupEmailError.style.display = "inline-block";
    isValid = false;
  } else {
    signupEmailError.style.display = "none";
  }

  if (isValid) {
    openModalWindow();
  }
});

//modal

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModalWindow();
    signupForm.reset();
  }
});

//links

document.querySelectorAll(".header__link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const introButton = document.getElementById("intro__button");
const signupSection = document.getElementById("join");

introButton.addEventListener("click", function (e) {
  e.preventDefault();

  signupSection.scrollIntoView({
    behavior: "smooth",
  });
});

//genres slider

const sliderContainer = document.querySelector(".genres__cards");
const sliderItems = document.querySelectorAll(".genres__card");
const sliderButtons = document.querySelectorAll(".genres__btn");
const leftSliderButton = sliderButtons[0];
const rightSliderButton = sliderButtons[1];
let sliderIndex = 0;
function moveSlide(idx) {
  sliderContainer.style.marginLeft = `-${idx * 310}px`;
}
function nextSlide() {
  if (sliderIndex !== 1) {
    sliderIndex++;
    moveSlide(sliderIndex);
  }
}
function previousSlide() {
  if (sliderIndex !== 0) {
    sliderIndex--;
    moveSlide(sliderIndex);
  }
}
rightSliderButton.addEventListener("click", nextSlide);
leftSliderButton.addEventListener("click", previousSlide);
