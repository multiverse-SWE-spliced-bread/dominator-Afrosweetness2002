const quietBtn = document.getElementById("quiet-btn");
const loudBtn = document.getElementById("loud-btn");
const sarcBtn = document.getElementById("sarc-btn");
const k = document.getElementById("patrick");
let ps = k.innerText;

quietBtn.addEventListener("click", lowerCase);

function lowerCase(e) {

k.innerText = ps.toLowerCase();
console.log("I am tired! ");
}

function upperCase(e) {
  let ps = k.innerText;
  k.innerText = ps.toUpperCase();
}

function sarcasm(e) {
  let string = k.innerText;
  let arr = string.split("");
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  console.log(arr);
  return arr.join("");
}


