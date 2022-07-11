const user_name = main_form.elements["user-name"];
const user_name_rules = main_form.querySelectorAll(
  ".user-name-requirements .requirement"
);
function userNameRequirementCorrect(field_id) {
  user_name_rules[field_id].classList.add("correct");
  user_name_rules[field_id].classList.remove("incorrect");
}
function userNameRequirementError(field_id) {
  user_name_rules[field_id].classList.remove("correct");
  user_name_rules[field_id].classList.add("incorrect");
}
user_name.addEventListener("input", function () {
  if (/^([a-z]|[а-я])/.test(this.value) === true) {
    this.value = this.value.replace(/^([a-z]|[а-я])/, function (str) {
      return str.toUpperCase();
    });
  }

  if (this.value.match(/\W|\d|[_]/)) {
    userNameRequirementError(0);
  } else {
    userNameRequirementCorrect(0);
  }

  if (this.value.match(/^.{0,16}$/)) {
    userNameRequirementCorrect(1);
  } else {
    userNameRequirementError(1);
  }

  if (this.value.match(/^.{2,}$/)) {
    userNameRequirementCorrect(2);
  } else {
    userNameRequirementError(2);
  }

  if (
    main_form.querySelectorAll(".user-name-requirements .requirement.incorrect")
      .length > 0
  ) {
    user_name.classList.add("red-border");
  } else {
    user_name.classList.remove("red-border");
  }
});
