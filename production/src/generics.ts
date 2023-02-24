const score: Array<Array<number>> = [[1, 2, 4, 5]];

function indentify<Type>(val: Type): Type {
  return val;
}
indentify(3);

function indentifyOne<T>(val: T): T {
  return val;
}
indentify(3);

interface Bootle {
  brand: string;
  price: number;
}

const indentifyTwo = (val: Bootle): object => {
  return val;
};
indentifyTwo({ brand: "Bisleri", price: 20 });

const searchPro = <T>(val: Array<T>): T => {
  // <T>(val: T[]): T
  return val[2];
};
searchPro([22, 3, 4, 5, 6]);

function paramiter<T extends object, U extends keyof T>(valOne: T, valTwo: U) {
  return valOne[valTwo];
}

const obj = { a: 1, b: 2, c: 3 };

paramiter(obj, "a");
