function log(text) {
  const body = document.querySelector("body");
  const p = document.createElement("p");
  p.textContent = text;
  body.appendChild(p);
}

function fibs(n) {
  let a = 0;
  let b = 1;
  let temp = null;
  let array = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    array.push(a + b);
    temp = a;
    a = b;
    b += temp;
  }
  return array;
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const prev = fibsRec(n - 1);
    return [prev, prev[prev.length - 1] + prev[prev.length - 2]].flat();
  }
}

console.log(fibs(8));
console.log(fibsRec(8));
