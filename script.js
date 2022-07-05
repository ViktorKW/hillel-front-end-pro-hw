const ul_list = document.querySelector(".ul-list");
const form = document.querySelector(".main-form");
Array.from(form.elements).forEach((element) => {
  element.addEventListener("change", function () {
    if (validate) {
      this.classList.remove("error");
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    const user_obj = createNewUser();
    saveNewUser(user_obj);
    form.reset();
    const li_element = createNewElement(user_obj);
    ul_list.appendChild(li_element);
  }
});

function createNewElement(user_obj) {
  const container = document.createElement("li");
  container.user_id = user_obj.id;
  const default_view = document.createElement("div");
  const item_title = document.createElement("h4");
  item_title.innerText = `id: ${user_obj.id}`;
  const view_button = document.createElement("button");
  view_button.innerText = "View";
  const edit_button = document.createElement("button");
  edit_button.innerText = "Edit";
  const remove_button = createRemoveButton();

  default_view.appendChild(item_title);
  default_view.appendChild(view_button);
  default_view.appendChild(edit_button);
  default_view.appendChild(remove_button);

  container.appendChild(default_view);
  return container;
}
function createViewButton() {
  const view_button = document.createElement("button");
  view_button.innerText = "View";
  view_button.addEventListener("click", function () {
    const default_view = this.parentNode;
    const container = default_view.parentNode;
    const id = container.user_id;
  });

  return view_button;
}
function createRemoveButton() {
  const remove_button = document.createElement("button");
  remove_button.innerText = "Remove";
  remove_button.addEventListener("click", function () {
    const default_view = this.parentNode;
    const container = default_view.parentNode;
    const id = container.user_id;
    removeUserData(id);
    updateLocalStorage();
    ul_list.removeChild(container);
  });
  return remove_button;
}

function removeUserData(user_id) {
  const array_target_index = users_array.findIndex(function (e) {
    return user_id === e.id;
  });
  if (array_target_index !== -1) {
    users_array.splice(array_target_index, 1);
  } else {
    console.log("array_target_index removeUserById error");
  }
}

function validate() {
  let error_counter = 0;
  Array.from(form.elements).forEach((element) => {
    if (element.value.trim().length === 0) {
      element.classList.add("error");
      error_counter++;
    }
  });

  return error_counter === 0;
}

let users_array = [];
getLocalStorageUsers();
drawUsersList();

function createNewUser() {
  const user = {
    id: new Date().valueOf(),
    first_name: form.elements["first-name"].value,
    last_name: form.elements["last-name"].value,
    age: form.elements["age"].value,
  };
  return user;
}

function saveNewUser(user_obj) {
  users_array.push(user_obj);
  updateLocalStorage();
}

function getLocalStorageUsers() {
  let localStorageUsers = localStorage.getItem("users");
  if (localStorageUsers !== null) {
    users_array = JSON.parse(localStorageUsers);
  }
}

function clearLocalStorage() {
  localStorage.clear();
}

function updateLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users_array));
}

function drawUsersList() {
  users_array.forEach((element) => {
    const li_element = createNewElement(element);
    ul_list.appendChild(li_element);
  });
}
