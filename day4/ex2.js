const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];

// for (let i = 0; i < students.length; i++) students[i].age++; // 이렇게 하면 원본 데이터가 깨진다.
// console.log(students);

// const ageUp = [];
// for (let i = 0; i < students.length; i++) {
//   let person = {};
//   person.name = students[i].name;
//   person.age = students[i].age + 1;
//   ageUp.push(person);
// }
// console.log(ageUp);

// const ageUp = [];
// for (let i = 0; i < students.length; i++) {
//   const person = { name: students[i].name, age: students[i].age + 1 };
//   ageUp.push(person);
// }
// console.log(ageUp);

// Spread 구문
const ageUp1 = [];
for (let i = 0; i < students.length; i++) {
  const person = { ...students[i], age: students[i].age + 1 };
  ageUp1.push(person);
}
// console.log(students);
// console.log(ageUp1);
// console.log({ ...students });
// console.log({ ...students[0] });

const ageUp2 = [];
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const { age } = student;
  const obj = { ...student, age: age + 1 };
  ageUp2.push(obj);
}

// const [b, jh] = students; // students array와 같은 위치의 element를 가져온다.
// const { name, age } = jh; // jh object와 같은 위치의 element를 가져온다.
// console.log(name, age);

// for (let person of students) {
//   if (person.age >= 18) person.isAdult = true;
//   else person.isAdult = false;
// }
// console.log(students);

isAdultList = [];
for (let person of students) {
  const { age } = person; // key값과 같은 걸 적어줘야 한다.
  isAdultList.push({ ...person, isAdult: age > 19 });
}
console.log(isAdultList);
