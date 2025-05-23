const radioInputs = document.querySelectorAll('input[type="radio"]');

radioInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    const label = e.currentTarget.parentElement;

    document.querySelectorAll(".form-label label").forEach((l) => l.classList.remove("selected"));
    if (input.checked) {
      label.classList.add("selected");
    }
  });
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  const form = e.currentTarget;
  const inputs = form.querySelectorAll(".form-control");

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.parentElement.classList.add("error");
      isValid = false;
    } else {
      input.parentElement.classList.remove("error");
    }
  });

  const radio = form.querySelectorAll(".form-radio:checked");
  const labelRadio = form.querySelector(".form-label");

  if (radio.length === 0) {
    labelRadio.classList.add("error");
    isValid = false;
  } else {
    labelRadio.classList.remove("error");
  }

  const checkbox = form.querySelectorAll(".form-checkbox:checked");
  const labelCheckbox = form.querySelector(".custom-checkbox");

  if (checkbox.length === 0) {
    labelCheckbox.parentElement.classList.add("error");
    isValid = false;
  } else {
    labelCheckbox.parentElement.classList.remove("error");
  }

  const email = document.getElementById("email");

  if (!isValidEmail(email.value)) {
    email.parentElement.classList.add("error");
    isValid = false;
  } else {
    email.parentElement.classList.remove("error");
  }

  if (isValid) {
    form.querySelector(".message-success").style.display = "block";
    form.reset();
  }
});

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
