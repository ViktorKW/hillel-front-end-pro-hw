const user_credit = main_form.elements["user-credit"];

const user_credit_rules = main_form.querySelectorAll(
  ".user-credit-requirements .requirement"
);

function userCreditRequirementCorrect(field_id) {
  user_credit_rules[field_id].classList.add("correct");
  user_credit_rules[field_id].classList.remove("incorrect");
}

function userCreditRequirementError(field_id) {
  user_credit_rules[field_id].classList.remove("correct");
  user_credit_rules[field_id].classList.add("incorrect");
}

user_credit.addEventListener("input", function () {
  if (this.value.match(/^[0-9]{16}$/)) {
    userCreditRequirementCorrect(0);
  } else {
    userCreditRequirementError(0);
  }

  if (
    main_form.querySelectorAll(
      ".user-credit-requirements .requirement.incorrect"
    ).length > 0
  ) {
    user_credit.classList.add("red-border");
  } else {
    user_credit.classList.remove("red-border");
  }
});
