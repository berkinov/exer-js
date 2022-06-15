function myFunc(a, b, c) {
  number = 0;
  if (a > b) {
    number = a;
  } else number = b;
  if (c > number) number = c;

  return number;
}

console.log(myFunc(-2,-8,-1));