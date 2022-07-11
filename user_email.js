const user_email = main_form.elements["user-email"];

const user_emai_rules = main_form.querySelectorAll(
  ".user-email-requirements .requirement"
);

function userEmailRequirementCorrect(field_id) {
  user_emai_rules[field_id].classList.add("correct");
  user_emai_rules[field_id].classList.remove("incorrect");
}

function userEmailRequirementError(field_id) {
  user_emai_rules[field_id].classList.remove("correct");
  user_emai_rules[field_id].classList.add("incorrect");
}

user_email.addEventListener("input", function () {
  if (this.value.match(/(?![@.])\W|[A-Z]|[0-9]/)) {             //?! - regular expression
    userEmailRequirementError(0);
  } else {
    userEmailRequirementCorrect(0);
  }

  const adrs_sign_pos = this.value.search(/[@]/);
  const point_sign_pos = this.value.search(/[.]/);

  console.log(this.value.length);
  if (adrs_sign_pos > -1 && point_sign_pos > -1) {
    if (
      adrs_sign_pos > point_sign_pos ||
      adrs_sign_pos === point_sign_pos + 1 ||
      adrs_sign_pos === point_sign_pos - 1 ||
      this.value.match(/[@]/g).length > 1 ||
      this.value.match(/[.]/g).length > 1 ||
      adrs_sign_pos < 1 ||
      point_sign_pos === this.value.length - 1
    ) {
      userEmailRequirementError(1);
    } else {
      userEmailRequirementCorrect(1);
    }
  } else {
    userEmailRequirementError(1);
  }

  if (
    main_form.querySelectorAll(
      ".user-email-requirements .requirement.incorrect"
    ).length > 0
  ) {
    user_email.classList.add("red-border");
  } else {
    user_email.classList.remove("red-border");
  }
});
