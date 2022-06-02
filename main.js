//1//
// function alertFunc() {
//   alert("Hello nigga");
// }
//2//
// function logFunc() {
//   console.log("King Yosi Balacho");
// }
//3//
// function colorChange() {
//   span1.style.color = "yellow";
// }
//4//
// function bigH1() {
//   h1_1.style.width = "200px";
// }
//5//
// function textChange(params) {
//     pChange.innerText="Yes we do"
// }
//6//
// var userName = prompt("Enter your name");

// function clickName() {
//   document.write(userName);
// }
//7//
// function myFunc() {
//   var myDate = new Date();
//   if ( myDate.getHours()< 12) {
//     document.body.style.background = "yellow";
//     h1_day.innerText="Good day"

//   } else {
//     document.body.style.background = "blue";
//     h2_eve.innerText="Good evening"
//   }
// }
// myFunc();
//8//
// window.onload= function () {
//   var userAge = prompt("Enter your age");
//   if (userAge > 18) {
//     h1_red.innerText = "welcome";
//     h1_red.style.color="red"
//   } else {
//     h2_blue.innerText = "welcome";
//     h2_blue.style.color="blue"
//   }
// }
// function hoverFunc() {
//     h1_red.style.color="green"
//     h2_blue.style.color="green"
// }
//9//10//

// function lottoFunc() {
//   for (var i = 0; i < 5; i++) {
//     var numBetween0to56 = +prompt("Enter number 0-56");
//     document.write(numBetween0to56 + " ");
//   }
//   if (numBetween0to56 == rnd) {
//     alert("Sucsses");
//   } else {
//     alert("Fail");
//   }
//   var rnd = Math.floor(Math.random() * 57);
//   document.write("<br>" + "<br>" + rnd);
// }
// var numbersArray = [];
// function mainFunc() {
//   if (numbersArray.length < 5) {
//     nums_user.innerText += "number : " + user_number.value + " ";
//     numbersArray.push(user_number.value);
//   } else {
//     user_number.disabled = true;
//   }
// }
// function getAndPrintRandom() {
//   var rndNum = Math.floor(Math.random() * 57);
//   rnd_h3.innerText += rndNum;
//   for (var i = 0; i < numbersArray.length; i++) {
//     if (rndNum == numbersArray[i]) {
//       document.getElementById("result_text").innerText = "You win";
//       return;
//     }
//   }
//   document.getElementById("result_text").innerText = "You Loose";
// }
