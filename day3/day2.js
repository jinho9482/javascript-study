// let : 변하는 변수, const : 상수
// let i = 0;
// while (i < 10) {
//   if (i === 0) console.log("Zero");
//   else if (i % 2 === 0) console.log(i);
//   i++;
// }

// if ("true" == true) console.log("같다.");

// for (let i = 2; i <= 100; i++) {
//   let divisor = 0;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) divisor++;
//   }
//   if (divisor === 0) console.log(i);
// }

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i / 2; j++) {
    // 나누기 2가 핵심
    if (i % j === 0) isPrime = false;
    break;
  }
  if (isPrime) console.log(i);
}

let arr = [1];
for (let i = 1; i <= 100; i++) {
  arr[i] = 0;
  for (let j = 1; i % j === 0; j++) {
    arr[i * j]++;
  }
}
console.log(arr);
