// array, object

const arr = []; // array라는 공간은 변하지 않기 때문에 constant가 될 수 있다.
// console.log(arr.push(1));
// console.log(arr.push(2));
// console.log(arr.push(3)); // 3 -> push는 새로 만들어진 length를 return
// console.log(arr);

// const arr1 = [];
// for (let i = 1; i <= 10; i++) {
//   arr1.push(i);
// }
// console.log(arr1);
// console.log(arr1[9]);
// const arr = [];
// for (let i = 1; i <= 10; i++) {
//   if (i % 3 === 0) arr[i - 1] = "짝";
//   else arr[i - 1] = i;
// }
// console.log(arr);

// for (let i = 1; i <= 10; i++) {
//   const triple = i % 3 === 0 ? "짝" : i;
//   arr.push(triple);
// }
// console.log(arr);

for (let i = 1; i <= 99; i++) {
  let isClap = false;
  let clap = "";
  for (let j = 0; j < `${i}`.length; j++) {
    if (
      `${i}`[j].includes("3") ||
      `${i}`[j].includes("6") ||
      `${i}`[j].includes("9")
    ) {
      isClap = true;
      clap += "짝";
    }
  }
  if (isClap) arr.push(clap);
  else arr.push(i);
}
console.log(arr);
// const arr = [];
// for (let i = 100; i <= 1000; i++) {
//   arr.push(i);
// }

// const arr369 = [];
// for (let i = 0; i <= 900; i++) {
//   let num =
//     `${arr[i]}`.includes("3") ||
//     `${arr[i]}`.includes("6") ||
//     `${arr[i]}`.includes("9")
//       ? "짝"
//       : arr[i];
//   arr369.push(num);
// }
// console.log(arr369);
