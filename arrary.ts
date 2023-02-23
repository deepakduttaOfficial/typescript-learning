type User = {
  _id: number;
  name: string;
  random: Array<number | string>;
};

// let nums: Array<number | string> = [3, 6, 5, 8, "7", 2, 5];

// This way you can pass type check into array

let nums2: ReadonlyArray<User | number> = [
  { _id: 3, name: "deepak", random: [234, "31", 5, 11234] },
  43,
];
console.log(nums2);

// Another syntax
let nums3: (User | number)[] = [
  { _id: 3, name: "deepak", random: [234, "31", 5, 11234] },
  43,
];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";

export {};
