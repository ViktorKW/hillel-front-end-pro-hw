//person
function person() {
  //define person name
  while (true) {
    this.name = prompt("Type name of a current person:");
    if (!isNaN(this.name)) {
      alert(`Name is not defined properly, try again`);
    } else {
      break;
    }
  }

  //define person age
  while (true) {
    this.age = parseInt(prompt("Type age of a current person:"));
    if (isNaN(this.age) || this.age < 0 || this.age > 150) {
      alert(`Age is not defined properly, try again`);
    } else {
      break;
    }
  }

  alert(`SUCCESS! New person have been created`);

  //get person info
  this.info = () => {
    return `Name: ${this.name}, Age: ${this.age} y.o.`;
  };
}

//automobile
function automobile() {
  //define automobile age
  while (true) {
    this.age = parseInt(prompt("Type age of a current automobile:"));
    if (isNaN(this.age) || this.age < 0 || this.age > 200) {
      alert(`Age is not defined properly, try again`);
    } else {
      break;
    }
  }

  //define color
  while (true) {
    let arr_colors = ["red", "white", "black"];
    this.color = prompt(
      `Type one of existing colors: ${arr_colors}`
    ).toLowerCase();
    if (!arr_colors.includes(this.color)) {
      alert(`No such color option, try again`);
    } else {
      break;
    }
  }

  //defince price
  while (true) {
    this.price = parseInt(prompt("Type the price of a current automobile:"));
    if (isNaN(this.price) || this.price < 0) {
      alert(`Price is not defined properly, try again`);
    } else {
      break;
    }
  }
  alert(`SUCCESS! New automobile have been created`);

  //get info
  this.info = () => {
    return `age: ${this.age} y.o, color: ${this.color}, price: ${this.price}$`;
  };

  //add person to automobile
  this.registrate_owner = (person) => {
    if (person.age < 18) {
      alert(`Error. ${person.name} is too young`);
    } else {
      alert(
        `SUCCESS! Person ${person.info()} now owns automobile ${this.info()}`
      );
      this.owner = person;
    }
  };
}

//Test
let my_person = new person();
alert(my_person.info());

let my_automobile = new automobile();
alert(my_automobile.info());

my_automobile.registrate_owner(my_person);
