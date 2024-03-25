// alert("1234");
// const isConfirmed = confirm("밥 먹었니?");
// console.log(isConfirmed);

// setTimeout(() => {
//   alert("hello");
// }, 2000); // miliseconds

// const interval = setInterval(() => {
//   alert("hello");
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// 1초마다 alert("hello") 실행
// 3초마다 confirm("end?") yes 하면 모든 것을 종료 시킬거다.

// const greet = setInterval(() => alert("hello"), 1000);
// const isConfirmed = setInterval(() => {
//   if (confirm("end?")) {
//     clearInterval(greet);
//     clearInterval(isConfirmed);
//   }
// }, 3000);

let text = document.getElementById("text");
let time = 0;
setInterval(() => (text.innerHTML = `count : ${time++}`), 1000);
