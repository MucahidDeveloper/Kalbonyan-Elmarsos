const task3Element = document.getElementById("task-3");

function alertFunction() {
  alert("This works!");
}
function alertName(name) {
  alert(name);
}

alertFunction();
// alertName();

task3Element.addEventListener("click", alertFunction);

function stringConcant(string1, string2, string3) {
  return string1 + string2 + string3;
}

const outString = stringConcant("Max", "De", "Louis");

alertName(outString);
