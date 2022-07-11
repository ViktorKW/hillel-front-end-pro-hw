const main_form = document.querySelector(".main-form");

main_form.addEventListener("submit", function (e) {
  e.preventDefault();

  //validating the form with styles
  const errors = main_form.querySelectorAll(".red-border");
  if (!errors.length) {
    const user_obj = {
      name: user_name.value,
      phone: user_phone.value,
      email: user_email.value,
      credit: user_credit.value,
    };
    alert(
      `Hurray!! New user!\n\t Name: ${user_obj.name}\n\t Phone: ${user_obj.phone}\n\t Email: ${user_obj.email}\n\t Credit: ${user_obj.credit}`
    );
  } else {
    alert("There are still errors in the form");
  }
});
