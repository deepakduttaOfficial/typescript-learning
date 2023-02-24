const User = {
  name: "Deepak",
  email: "coder.deepakyt@gmail.com",
  isActive: true,
};

// Special type object define
interface Person {
  name: string;
  isActive?: boolean | string; // "?" Property could not be there. "|" it can be string
}
type Person1 = {
  name: string;
  isActive: boolean;
};
// Both are same

function createUser(person: Person) {}
createUser({ name: "deepak", isActive: "true" });

// Returning an object

interface User {
  name: string;
  email: string;
}

interface ReturningUser {
  name: string;
  email: string;
}

function userInfo(user: User): ReturningUser {
  const { name, email } = user;
  return { name, email };
}
userInfo({ name: "Deepak", email: "deepak@gmail.com" });

// Another
// function moreArgu({ name, email }: { name: string; email: string }) {
//   return "User already logged in";
// }

// const argu = { name: "Rohit", email: "r@r.com" };
// moreArgu(argu);

// Another
interface Argu {
  name: string;
  email: string;
}
function moreArgu(argu: Argu): Argu {
  return argu;
}
const argu = { name: "Rohit", email: "r@r.com", number: 23425254123 };
moreArgu(argu);

// Readonly type and combine type----------------------------------------------> {readonly, &}
type Person2 = {
  readonly _id: number; //  readonly _id: Array<number | string> this way we can push value to the array
  name: string;
  email: string;
  creditCard?: number;
};

const userInfo2: Person2 = {
  _id: 34324324,
  name: "Deepak",
  email: "d@d.com",
};

userInfo2.email = "deepak@gmail.com";
// userInfo2._id = 12323  //  _id only can read | If the _id is an array then we can push value to the array

// Combine type "&"
type cardDate = {
  cardDate: number;
};
type cardNumber = {
  cardNumber: number;
};

type CardDetails = cardDate & cardNumber & { cvv: number };
let cardDetails: CardDetails = {
  cardDate: 12 / 23,
  cardNumber: 424242424242,
  cvv: 234,
};

export {};
