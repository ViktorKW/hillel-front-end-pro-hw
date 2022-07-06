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
  const id = user_obj.id;
  const container = document.createElement("li");
  const default_view = createDefaultView(id);
  const view_view = createViewView(id);
  const edit_view = createEditView(id);
  container.appendChild(view_view);
  container.appendChild(default_view);
  container.appendChild(edit_view);
  return container;
}

function createDefaultView(user_id) {
  const default_view = document.createElement("div");
  default_view.className = "default-view";

  const item_title = document.createElement("h4");
  item_title.innerText = `id: ${user_id}`;

  const view_button = createViewButton();

  const edit_button = createEditButton();

  const remove_button = createRemoveButton(user_id);

  default_view.appendChild(item_title);
  default_view.appendChild(view_button);
  default_view.appendChild(edit_button);
  default_view.appendChild(remove_button);
  return default_view;
}

function createRemoveButton(user_id) {
  const remove_button = document.createElement("button");
  remove_button.innerText = "Remove";
  remove_button.addEventListener("click", function () {
    const default_view = this.parentNode;
    const container = default_view.parentNode;
    removeUserData(user_id);
    updateLocalStorage();
    ul_list.removeChild(container);
  });
  return remove_button;
}

//edit
function createEditButton() {
  const edit_button = document.createElement("button");
  edit_button.innerText = "Edit";
  edit_button.addEventListener("click", function () {
    const default_view = this.parentNode;
    const container = default_view.parentNode;
    const edit_view = container.querySelector(".edit-view");
    default_view.hidden = true;
    edit_view.hidden = false;
  });

  return edit_button;
}
function createEditView(user_id) {
  const target_id = getUserByIndex(user_id);

  const edit_view = document.createElement("div");
  edit_view.classList.add("edit-view");
  edit_view.hidden = true;
  const label_form = document.createElement("label");
  label_form.innerText = `Edit User #${users_array[target_id].id}`;

  const edit_view_form = form.cloneNode(true);
  edit_view_form.elements["first-name"].value =
    users_array[target_id].first_name;
  edit_view_form.elements["last-name"].value = users_array[target_id].last_name;
  edit_view_form.elements["age"].value = users_array[target_id].age;

  edit_view_form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (edit_validate(edit_view_form)) {
      users_array[target_id].first_name =
        edit_view_form.elements["first-name"].value;
      users_array[target_id].last_name =
        edit_view_form.elements["last-name"].value;
      users_array[target_id].age = edit_view_form.elements["age"].value;
      updateLocalStorage();
      edit_view_form.elements["first-name"].value =
        users_array[target_id].first_name;
      edit_view_form.elements["last-name"].value =
        users_array[target_id].last_name;
      edit_view_form.elements["age"].value = users_array[target_id].age;
      alert(`User #${users_array[target_id].id} has been updated`);
      edit_view.hidden = true;
      const view_view = edit_view.parentNode.querySelector(".view-view");
      view_view.hidden = false;
      const user_info = view_view.querySelector("h4");
      user_info.innerText = `First name: ${users_array[target_id].first_name} \n Last name: ${users_array[target_id].last_name} \n Age: ${users_array[target_id].age}`;
    }
  });

  edit_view.appendChild(label_form);
  edit_view.appendChild(edit_view_form);
  return edit_view;
}
function edit_validate(edit_form) {
  let error_counter = 0;
  Array.from(edit_form.elements).forEach((element) => {
    if (element.value.trim().length === 0) {
      element.classList.add("error");
      error_counter++;
    }
  });

  return error_counter === 0;
}

//edit end

//view
function createViewView(user_id) {
  const target_id = getUserByIndex(user_id);

  const view_view = document.createElement("div");
  view_view.classList.add("view-view");
  view_view.hidden = true;
  const user_info = document.createElement("h4");
  user_info.innerText = `First name: ${users_array[target_id].first_name} \n Last name: ${users_array[target_id].last_name} \n Age: ${users_array[target_id].age}`;
  const cancel_button = createCancelButton();
  view_view.appendChild(user_info);
  view_view.appendChild(cancel_button);
  return view_view;
}

function createCancelButton() {
  const cancel_button = document.createElement("button");
  cancel_button.innerText = "cancel";
  cancel_button.addEventListener("click", function () {
    const view_view = this.parentNode;
    const container = view_view.parentNode;
    const default_view = container.querySelector(".default-view");
    default_view.hidden = false;
    view_view.hidden = true;
  });

  return cancel_button;
}

function createViewButton() {
  const view_button = document.createElement("button");
  view_button.innerText = "View";
  view_button.addEventListener("click", function () {
    const default_view = this.parentNode;
    const container = default_view.parentNode;
    const view_view = container.querySelector(".view-view");
    default_view.hidden = true;
    view_view.hidden = false;
  });

  return view_button;
}
//view end

function getUserByIndex(user_id) {
  return users_array.findIndex(function (e) {
    return user_id === e.id;
  });
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
