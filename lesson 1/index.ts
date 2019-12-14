
//1
const polindrom = (str: string): boolean => str === str.split("").reverse().join("");
polindrom('assa');

//2
function fibanachi(n: number): array {
  let arr: array = [];
  let f1: number = 0;
  let f2: number = 1;
  for (let i: number = 0; i < n; i++) {
    arr.push(f2);
    let temp: number = f1;
    f1 = f2;
    f2 = temp + f1;
  }
  return arr
}

fibanachi();
