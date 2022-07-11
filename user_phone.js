const user_phone = main_form.elements["user-phone"];

const user_phone_rules = main_form.querySelectorAll(
  ".user-phone-requirements .requirement"
);
function userPhoneRequirementCorrect(field_id) {
  user_phone_rules[field_id].classList.add("correct");
  user_phone_rules[field_id].classList.remove("incorrect");
}
function userPhoneRequirementError(field_id) {
  user_phone_rules[field_id].classList.remove("correct");
  user_phone_rules[field_id].classList.add("incorrect");
}

user_phone.addEventListener("input", function () {
  if (this.value.match(/\D{1,}$/)) {
    userPhoneRequirementError(0);
  } else {
    userPhoneRequirementCorrect(0);
  }

  if (this.value.search(/[+]/g) === 0 && this.value.search(/(380)/g) === 1) {
    userPhoneRequirementCorrect(1);
  } else {
    userPhoneRequirementError(1);
  }

  if (this.value.match(/^.{13}$/)) {
    userPhoneRequirementCorrect(2);
  } else {
    userPhoneRequirementError(2);
  }

  if (
    main_form.querySelectorAll(
      ".user-phone-requirements .requirement.incorrect"
    ).length > 0
  ) {
    user_phone.classList.add("red-border");
  } else {
    user_phone.classList.remove("red-border");
  }
});
