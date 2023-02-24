"use strict";
const score = [[1, 2, 4, 5]];
function indentify(val) {
    return val;
}
indentify(3);
function indentifyOne(val) {
    return val;
}
indentify(3);
const indentifyTwo = (val) => {
    return val;
};
indentifyTwo({ brand: "Bisleri", price: 20 });
const searchPro = (val) => {
    // <T>(val: T[]): T
    return val[2];
};
searchPro([22, 3, 4, 5, 6]);
function paramiter(valOne, valTwo) {
    return valOne[valTwo];
}
const obj = { a: 1, b: 2, c: 3 };
paramiter(obj, "a");
