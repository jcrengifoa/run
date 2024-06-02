type Users = {
  name: string;
  age: number;
};

export const getAdults = (users: Users[]) =>
  users.filter((user) => user.age >= 20);

export const getNames = (users: Users[]) => users.map((user) => user.name);

export const pipe =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduce((v, f) => f(v), x);

export const getAdultsNames = pipe(getAdults, getNames);
