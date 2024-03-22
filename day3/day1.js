// Javascript는 싱글 스레드이다.

var number = 0;
var number = 2;
console.log(number); // 1 (Can be redeclared by using var)

// let num = 0;
// let num = 1;
// console.log(number); // 1 (Cannot be redeclared by using let)

var str = "Hi";

console.log(typeof str);
console.log(number.toExponential(5.1234565789));

var name = "Jinho";
console.log(str, name, 1, NaN, null, undefined);

var num = 50;
var num1 = "1";
console.log(num1 + num);
console.log(name / num);

for (var i = 0; i < 10; i++) {
  console.log(i);
}

var number = 20; // Can be redeclared
console.log(i, number);
// console.log(i, number10); not defined
