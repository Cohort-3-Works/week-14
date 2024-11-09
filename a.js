"use strict";
//number , string , boolean , null , undefined
const x = 1;
console.log(x);
function greet(firstname) {
    console.log(`Hello ${firstname}`);
}
greet("Subh");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 6));
// the return type is inferred over the typescript compiler
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2));
//function that takes another fn as a input and call it after a second
function delayedCall(fn) {
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
