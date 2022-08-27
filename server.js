const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
app.use(cors());
app.use(express.json());
app.listen(3000);

app.get("/users", (req, res) => {
  const users = fs.readFileSync("users.json", "utf-8");
  return res.send(users);
});

app.post("/users", (req, res) => {
  const users = fs.readFileSync("users.json", "utf-8");
  const obj_users = JSON.parse(users);
  console.log(req.body);

  const new_user = {
    id: new Date().getTime(),
    ...req.body,
  };
  obj_users.push(new_user);

  fs.writeFileSync("users.json", JSON.stringify(obj_users));
  return res.send(new_user);
});

app.delete("/users/:id", function (req, res) {
  const id = req.params["id"];
  const users = fs.readFileSync("users.json", "utf-8");
  const obj_users = JSON.parse(users);
  const user_target_index = obj_users.findIndex((user) => {
    return user.id === id;
  });
  obj_users.splice(user_target_index, 1);
  fs.writeFileSync("users.json", JSON.stringify(obj_users));
  return res.send(id);
});

app.put("/users/edit", function (req, res) {
  const edited_user = req.body;

  console.log(edited_user);
  const users = fs.readFileSync("users.json", "utf-8");
  const obj_users = JSON.parse(users);
  const user_target_index = obj_users.findIndex((user) => {
    return user.id === edited_user.id;
  });
  obj_users[user_target_index].name = edited_user.name;
  obj_users[user_target_index].surname = edited_user.surname;
  obj_users[user_target_index].age = edited_user.age;
  fs.writeFileSync("users.json", JSON.stringify(obj_users));
  return res.send("Operation successful");
});
