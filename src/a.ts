//number , string , boolean , null , undefined

const x: number = 1;
console.log(x);

function greet(firstname: string) {
  console.log(`Hello ${firstname}`);
}

greet("Subh");

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(2, 6));

// the return type is inferred over the typescript compiler

function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(2));

//function that takes another fn as a input and call it after a second

function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("Hi there !!!");
});

function log() {
  console.log("hi subh!!!");
  return 1;
}

delayedCall(log);
