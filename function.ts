// Number funciton
function addTwo(num: number) {
  // return num + 2
  return "Hello";
}
addTwo(3);

// String function
function getUpperCase(value: string) {
  return value.toUpperCase();
}
getUpperCase("Hello world");

// Multiple type check
function signUpUser(name: string, email: string, existAccount: boolean) {
  return { name, email, existAccount };
}
signUpUser("Deepak", "coder.deepakyt@gmail.com", false);

// Arrow function
let loginUser = (name: string, email: string, authenticate: boolean = true) => {
  return "Welcome back";
};
loginUser("Deepak", "coder.deepakyt@gmail.com");

// Check return typr
function addTwoReturnCheck(num: number): number {
  // return "Hello"
  return num + 2;
}
addTwoReturnCheck(3);
let p;
// Arrow function syntex
const getLower = (val: string): string | number => {
  // return 3424234
  if (p) {
    return val.toLowerCase();
  } else {
    return 45;
  }
};
getLower("Hi there, I am Deepak");

// Arrary type check
// let heros = ["Iron man", "Spider Man", "Thor"]
let heros = [3, 56, 15, true, "Ex"];
heros.map((hero): string => `Hero is ${hero}`);

// If the function return nothing
function logMessage(value: string): void {
  console.log(value);
}
logMessage("This is an error");

// Handle Error
const hendleError = (error: string): never => {
    throw new Error(error);
  };
hendleError("This is test error");

export {};


