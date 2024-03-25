// Put 1~10 into an array

const arr = [];
for (let i = 1; i <= 10; i++) arr.push(i);
arr["5"] = 10;
console.log(arr);

// object
const obj = { age: 10, printAge: () => console.log(obj["age"]) }; // object는 보통 틀을 바꾸지 않기 때문에 const로 두면 된다.
obj["name"] = "park";
// Map <String, Integer> map = new HashMap<>(); @java
obj["printAge"];
obj.printAge();

// object도 array같이 생성할 수 있다.
for (let i = 1; i <= 10; i++) obj[i - 1] = i; // [] 안에는 key값이다. index가 아니다.
console.log(obj);

const classRoom = {
  students: [
    { name: "김부자", age: 22 },
    { name: "조진호", age: 32 },
  ],

  manager: [{ name: "송희", age: 30 }],
}; // json
console.log(classRoom["students"][1]["name"]);

console.log(classRoom.students[1].name);

// classRoom["array"] = arr;
classRoom.array = arr;
arr[0] = 100; // arr를 바꿨는데 array도 바뀜
console.log(classRoom);
