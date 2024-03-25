// map: 기존 array를 가지고 새로운 array를 만들 때 사용
// 원본 데이터는 변경을 안하고 지켜주는 것이 좋다.

const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];

// const isAdultList = students.map((element, index, array) => {
//   return { ...element, isAdult: element.age > 19 };
// });
// console.log(isAdultList);

const ageUpFunc = (element) => ({ ...element, age: element.age + 1 });
const ageUp = students.map(ageUpFunc); // ageUpFunc : callback 함수 -> 남이 호출해주는 것
// ageUpFunc() 을 하면 값을 가져오기 때문에 맞지 않는다. 그래서 함수를 호출해야 하기 때문에 ageUpFunc자체를 불러온다.
// 그냥 {} 만 쓰면 함수의 중괄호인지 object의 {} 인지 헷갈리기 때문에 ()를 겉에 써줘야 한다.
// 안 쓰는 parameter는 생략 가능하다.
console.log(ageUp);
const adultList = students.filter((element) => element.age > 19); // true 인 것만 뽑음
console.log(adultList);

const kimList = students.filter((student) => student.name[0] === "김");
console.log(kimList);

console.log(kimList[-1]); // undefined, java에서는 error

// sort
const ageAscend = students.sort((a, b) => b.age - a.age);
console.log(ageAscend);
