interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Admin | User) {
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
function logVal(x: Date | string): void {
  if (x instanceof Date) {
    console.log(x.toLocaleTimeString());
    return;
  }
  console.log(x.toUpperCase());
}

// Using type predicates

interface Fish {
  swim: () => void;
  name: string;
}

interface Bird {
  fly: () => void;
}

function isFish(val: Fish | Bird): val is Fish {
  return (val as Fish).swim !== undefined;
  //   if ("swim" in val) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish food";
  }
  pet;
  return "Bird food";
}

export {};
