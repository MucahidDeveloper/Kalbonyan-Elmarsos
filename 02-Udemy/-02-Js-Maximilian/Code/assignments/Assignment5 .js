const arr = [1, 2, 3, 4, 5];
arr.unshift(10, 15, 20);
arr.push(7, 12, 2);
console.log(arr); // [10, 15, 20, 1, 2, 3, 4, 5, 7, 12, 2]

const filtired = arr.filter((condition) => condition > 5);
console.log(filtired); // [10, 15, 20, 7, 12]

const map = arr.map((p, idx) => {
  idx = `Num ${idx}`;
  const mp = `${idx}: ${p}`;
  return mp;
});
console.log(map); // ['Num 0: 10', 'Num 1: 15', 'Num 2: 20', 'Num 3: 1', 'Num 4: 2', 'Num 5: 3', 'Num 6: 4', 'Num 7: 5', 'Num 8: 7', 'Num 9: 12', 'Num 10: 2']

const reduced = arr.reduce((pre, curr) => pre * curr, 1);
console.log(reduced); // 60480000
