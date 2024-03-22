const arr = [1, 5, 6, 7, 53, 3, 3, 4, 364, 8, 23];
// 짝수인지 아닌지 하나하나 계산해서 array로 만들어 보여주기
const isEvenArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) isEvenList.push(true);
//   else isEvenList.push(false);
// }
// console.log(isEvenList);

for (let i = 0; i < arr.length; i++) {
  const isEven = arr[i] % 2 === 0 ? true : false;
  isEvenArray.push(isEven);
}
console.log(isEvenArray);
