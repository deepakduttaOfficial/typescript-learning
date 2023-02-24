"use strict";
exports.__esModule = true;
// Number funciton
function addTwo(num) {
    // return num + 2
    return "Hello";
}
addTwo(3);
// String function
function getUpperCase(value) {
    return value.toUpperCase();
}
getUpperCase("Hello world");
// Multiple type check
function signUpUser(name, email, existAccount) {
    return { name: name, email: email, existAccount: existAccount };
}
signUpUser("Deepak", "coder.deepakyt@gmail.com", false);
// Arrow function
var loginUser = function (name, email, authenticate) {
    if (authenticate === void 0) { authenticate = true; }
    return "Welcome back";
};
loginUser("Deepak", "coder.deepakyt@gmail.com");
// Check return typr
function addTwoReturnCheck(num) {
    // return "Hello"
    return num + 2;
}
addTwoReturnCheck(3);
var p;
// Arrow function syntex
var getLower = function (val) {
    // return 3424234
    if (p) {
        return val.toLowerCase();
    }
    else {
        return 45;
    }
};
getLower("Hi there, I am Deepak");
// Arrary type check
// let heros = ["Iron man", "Spider Man", "Thor"]
var heros = [3, 56, 15, true, "Ex"];
heros.map(function (hero) { return "Hero is ".concat(hero); });
// If the function return nothing
function logMessage(value) {
    console.log(value);
}
logMessage("This is an error");
// Handle Error
var hendleError = function (error) {
    throw new Error(error);
};
hendleError("This is test error");
