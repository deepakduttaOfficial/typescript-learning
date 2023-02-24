"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
const account = {
    name: "Deepak",
    email: "coder.deepakyt@gmail.com",
};
isAdminAccount(account);
// instanceof narrowing
function logVal(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleTimeString());
        return;
    }
    console.log(x.toUpperCase());
}
function isFish(val) {
    return val.swim !== undefined;
    //   if ("swim" in val) {
    //     return true;
    //   } else {
    //     return false;
    //   }
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    pet;
    return "Bird food";
}
