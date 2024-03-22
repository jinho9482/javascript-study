// java : 어떤 기능을 호출하기 위해선 method 사용
// javascript : 어떤 기능을 호출하기 위해선 function 사용

// function sum(a, b) {
//   return a + b;
// }

// function diff(a, b) {
//   return a - b;
// }

// console.log(sum(1, 2));
// console.log(diff(1, 2));
// console.log(sum(1, 2), 2, diff(1, 2));

// const sum1 = (a, b) => {
//   return a + b;
// };

// const sum1 = (a, b) => a + b; // 한 줄은 다음과 같이 {}와 return 을 뗄 수 있다.

// const diff2 = (a, b) => a - b;

// const division = (a, b) => {
//   const sum = () => {
//     return a + b;
//   };
//   return sum() / b;
// };

// const division = (a, b) => {
//   const sum = () => a + b;
//   return sum() / b;
// };

const sum = (a, b = 2) => a + b;
const diff = (a, b = 2) => a - b;
const multi = (a, b = 2) => a * b;
const division = (a, b = 2) => a / b;

console.log(diff(sum(diff(sum(3)), 10), 4));
console.log(sum); // 괄호가 없으면 함수, 괄호가 있으면 값이다.

const calc = [sum, diff, multi, division, (a) => a * a];
let total = 0;
for (let i = 0; i < calc.length; i++) {
  total += calc[i](i, 10);
}
console.log(total); // 10 + (-9) + 20 + 0.3 = 21.3;

const [sum3, diff3, multi3, division3, square3] = calc;
console.log(sum3(1, 2));

// console.log(
//   Array.of(
//     1,
//     2,
//     2,
//     3 + 4,
//     4,
//     5,
//     undefined,
//     null,
//     NaN,
//     true,
//     [5, 3, 5],
//     "wlshzz"
//   )
// );
