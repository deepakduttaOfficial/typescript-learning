const User = {
  name: "Deepak",
  email: "coder.deepakyt@gmail.com",
  isActive: true,
};

function createUser({ name: string, isActive: boolean }) {}

createUser({ name: "deepak", isActive: "coder.deepakyt@gmail.com" });

export {};
