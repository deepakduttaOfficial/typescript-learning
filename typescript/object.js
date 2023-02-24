"use strict";
exports.__esModule = true;
var User = {
  name: "Deepak",
  email: "coder.deepakyt@gmail.com",
  isActive: true,
};
// Both are same
function createUser(person) {}
createUser({ name: "deepak", isActive: "true" });
function userInfo(user) {
  var name = user.name,
    email = user.email;
  return { name: name, email: email };
}
userInfo({ name: "Deepak", email: "deepak@gmail.com" });
function moreArgu(argu) {
  return "User already logged in";
}
var argu = { name: "Rohit", email: "r@r.com", number: 23425254123 };
moreArgu(argu);
