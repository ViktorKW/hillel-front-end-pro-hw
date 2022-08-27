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

function addedUser(user) {
  return `<li user-data=${JSON.stringify(user)}>
            <div class = "user-info">
              <h5>${user.name}</h5> 
              <button class="btn-delete" onclick ="deleteUserClick(this)">Delete</button>
              <button class="btn-edit" onclick = "editUserClick(this)">Edit</button>
            </div>
            <div class = "user-edit" hidden>
              <form class = "user-form-edit">
                <label for="name" >Name:</label>
                <input type="text" name="name" required />

                <label for="surname">Surname:</label>
                <input type="text" name="surname"  required />

                <label for="age">Age:</label>
                <input type="number" min="0" max="100" name="age"  required />

                <input type="submit" value="Submit" onclick = "submitUserClick(this)"/>
                <input type ="button" class="btn-cancel" value = "Cancel" onclick = "cancelUserClick(this)"/>
              </form>
            </div>
          </li>`;
}

function deleteUserClick(target) {
  const id = target.closest("li").getAttribute("data-id");
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json)
    .then(() => {
      target.closest("li").remove();
    });
}

function editUserClick(target) {
  const user_info = target.closest(".user-info");
  user_info.hidden = true;
  const parent_li = user_info.parentElement;
  const user_edit = parent_li.querySelector(".user-edit");
  user_edit.hidden = false;

  const user_obj = JSON.parse(parent_li.attributes["user-data"].value);

  const user_edit_form = user_edit.querySelector(".user-form-edit");

  user_edit_form.elements["name"].value = user_obj.name;
  user_edit_form.elements["surname"].value = user_obj.surname;
  user_edit_form.elements["age"].value = user_obj.age;
}

function cancelUserClick(target) {
  const user_edit = target.closest(".user-edit");
  user_edit.hidden = true;
  const parent_li = target.closest("li");
  const user_info = parent_li.querySelector(".user-info");
  user_info.hidden = false;
}

function submitUserClick(target) {
  const parent_li = target.closest("li");
  const user_id = JSON.parse(parent_li.attributes["user-data"].value).id;

  const user_form = target.closest("form");
  const fields = user_form.elements;
  const editedUser = {
    id: user_id,
    name: fields["name"].value,
    surname: fields["surname"].value,
    age: fields["age"].value,
  };

  fetch(`http://localhost:3000/users/edit`, {
    method: "PUT",
    body: JSON.stringify(editedUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((message) => {
      console.log(message);
    });
}
