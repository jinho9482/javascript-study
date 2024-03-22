const calc = [
  0,
  (a) => {
    calc[5].push(calc[0]);
    calc[0] += a;
  },
  (a) => {
    calc[5].push(calc[0]);
    calc[0] -= a;
  },
  (a) => {
    calc[5].push(calc[0]);
    calc[0] *= a;
  },
  (a) => {
    calc[5].push(calc[0]);
    calc[0] /= a;
  },
  [],
];

calc[1](4); // 0+4

calc[2](3); // 0+4-3

calc[3](2); // (0+4-3)*2

calc[4](2); // (0+4-3)*2/2

const [total] = calc; // total = calc[0]

console.log(calc[5], calc[0] === total);
