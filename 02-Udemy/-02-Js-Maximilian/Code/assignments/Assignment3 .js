const sayHello = (name) => {
  console.log("Hi " + name);
};

const sayHello2 = (name, phrase) => {
  console.log(phrase + name);
};

const sayHello3 = () => {
  console.log("This is hard-coded function body!");
};

const sayHello4 = (name) => "Hi" + name;

sayHello("Padmaja");
sayHello2("The Phrase", "Padmaja");
sayHello3();
console.log(sayHello4("Padmaja"));

const sayhello5 = function (name, phrase = "This is ") {
  console.log(phrase + name);
};
