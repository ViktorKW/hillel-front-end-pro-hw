const users_form = document.querySelector("form");
const users_list = document.querySelector("#users-list");

fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      users_list.insertAdjacentHTML("afterbegin", addedUser(user));
    });
  });

users_form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = this.elements;

  const newUser = {
    name: fields["name"].value,
    surname: fields["surname"].value,
    age: fields["age"].value,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((user) => {
      users_list.insertAdjacentHTML("afterbegin", addedUser(user));
    });
});

users_list.addEventListener("click", function (e) {
  const target = e.target;

  if (target.classList.contains("btn-delete")) {
    const id = target.closest("li").getAttribute("data-id");
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then(() => {
        target.closest("li").remove();
      });
  } else if (target.classList.contains("btn-edit")) {
    const user_info = target.closest(".user-info");
    user_info.hidden = true;
    const parent_li = user_info.parentElement;
    const user_edit = parent_li.querySelector(".user-edit");
    user_edit.hidden = false;

    const user_edit_form = user_edit.firstElementChild;
    // user_edit_form.elements["name"].value =  --stopped here
  }
});

function addedUser(user) {
  return `<li data-id="${user.id}">
            <div class = "user-info">
              <h5>${user.name}</h5> 
              <button class="btn-delete">Delete</button>
              <button class="btn-edit">Edit</button>
            </div>
            <div class = "user-edit" hidden>
              <form class = "user-form-edit">
                <label for="name">Name:</label>
                <input type="text" name="name" required />

                <label for="surname">Surname:</label>
                <input type="text" name="surname" required />

                <label for="age">Age:</label>
                <input type="number" min="0" max="100" name="age" required />

                <input type="submit" value="Submit" />
                <input type ="button" class="btn-cancel" value = "Cancel"/>
              </form>
            </div>
          </li>`;
}
