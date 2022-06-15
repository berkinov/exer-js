function myFunc(a, b) {
  if (a != b) {
    x = Math.abs(a - 100);
    y = Math.abs(b - 100);
    if (x < y) return a;
    if (y < x) return b;
    return 0;
  } else return false;
}
console.log(myFunc(-90,89));