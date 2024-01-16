/**
 * 1-masala:
 *let number1 = +prompt("please enter first number ");
let number2 = +prompt("please enter second number");
let number3 = +prompt("please enter third number ");

let min;

if (number1 % 3 == 0) {
  min = number1;
}

if (number2 % 3 == 0) {
  min = min * number2;
}
if (number3 % 3 == 0) {
  min = min * number3;
}
 * 
 *2-masala:
 let num = +prompt("please enter number");
let result = "Error";
if (num > 99) {
  let birlik = num % 10;
  let onlik = ((num % 100) - (num % 10)) / 10;
  let yuz = (num - (num % 100)) / 100;
  let result = yuz + onlik + birlik;
  document.write(result);
} else if (1000 < !num) {
}
 * 
 * 3-masala:
 * let num = +prompt("please enter number");
let result = 0;
let birlik = num % 10;
let onlik = ((num % 100) - (num % 10)) / 10;
let yuz = (num - (num % 100)) / 100;
if (birlik % 2 != 0) {
  result = result + birlik;
} else if (onlik % 2 != 0) {
  result = result + onlik;
} else if (yuz % 2 != 0) {
  result = result + yuz;
}
document.write(result);
 * 
 * 5-masala:
 * let letter = prompt("please enter letter");

if (letter == "a") {
  document.write("siz kiritgan harf unli");
}
if (letter == "i") {
  document.write("siz kiritgan harf unli");
}
if (letter == "o") {
  document.write("siz kiritgan harf unli");
}
if (letter == "o'") {
  document.write("siz kiritgan harf unli");
}
if (letter == "e") {
  document.write("siz kiritgan harf unli");
}
if (letter == "u") {
  document.write("siz kiritgan harf unli");
}
else document.write{"siz kiritgan harf undosh"}
 * 
 * 
 * 
 *  */
