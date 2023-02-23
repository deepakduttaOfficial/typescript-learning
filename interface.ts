interface User {
  readonly _id: string;
  email: string;
  startTrail: () => string;
  coupon(val: string): number;
}

interface greeting {
  welcome: string;
}

let user: User = {
  _id: "3423432",
  email: "d@d.com",
  startTrail: () => "Trail Started",
  coupon: (val = "deepak432") => 10,
};

interface Role extends User, greeting {
  role: "ADMIN" | "USER" | "SUB_ADMIN";
}

const user1: Role = {
  role: "ADMIN",
  _id: "3423432",
  email: "d@d.com",
  startTrail: () => "Trail Started",
  coupon: (val = "deepak432") => 10,
  welcome: "Welcome admin",
};

export {};
