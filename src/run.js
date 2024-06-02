const users = [
  { name: 'Alice', age: 40 },
  { name: 'Bob', age: 30 },
  { name: 'Eve', age: 19 },
];

const getAdults = (users) => users.filter((user) => user.age >= 20);

const getNames = (users) => users.map((user) => user.name);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const getAdultNames = pipe(getAdults, getNames);

const adultNames = getAdultNames(users);

console.log('JS', adultNames); // ['Alice', 'Bob']
