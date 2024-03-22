const arr = [1, 5, 6, 7, 53, 3, 3, 4, 364, 8, 23];
// 짝수인지 아닌지 하나하나 계산해서 array로 만들어 보여주기
// const isEvenArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) isEvenList.push(true);
//   else isEvenList.push(false);
// }
// console.log(isEvenList);

// for (let i = 0; i < arr.length; i++) {
//   const isEven = arr[i] % 2 === 0 ? true : false;
//   isEvenArray.push(isEven);
// }
// console.log(isEvenArray);

// for (let i = 0; i < arr.length; i++) isEvenArray.push(arr[i] % 2 === 0);
// console.log(isEvenArray);

// map : array의 모든 element를 훑어서 새로운 map을 만듦
const isEvenArray = arr.map((element, index, arr) => {
  //   console.log(element, index, arr);
  return element % 2 === 0;
});
console.log(isEvenArray);
