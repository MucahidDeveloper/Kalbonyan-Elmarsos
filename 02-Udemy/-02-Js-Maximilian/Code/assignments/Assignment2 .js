const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randNum = Math.random();

if (randomNumber > 0.7) {
  alert("above 0.7");
}

const myArray = [4, 3, 9, 3, 7];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let j = myArray.length - 1;
while (j >= 0) {
  console.log(myArray[j]);
  j--;
}

if ((randNum && randomNumber) > 0.7) {
  alert("BOTH ABOVE 0.7");
} else if (randNum || randomNumber > 0.7) {
  alert("One is less than 0.2");
}
