const A = [1, 3, 6, 4, 1, 2];
const mySet1 = new Set(A.sort());

const ordered = Array.from(mySet1);
console.log(ordered);
var min = 0;

for (let i = 0; i < ordered.length; i++) {
  if (min !== 0) return;
  if (i + 1 !== ordered[i]) {
    console.log("i", i, "ordered", ordered[i]);
    min = [i + 1];
  }
}

console.log(min);
