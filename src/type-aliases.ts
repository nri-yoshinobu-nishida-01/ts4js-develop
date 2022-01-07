export {};

type Mojiretsu = string;

const fooString: string = "test";
const fooMojiretsu: Mojiretsu = "test2";


const example1 ={
  name: 'test',
  age: 42
}

type Profile = {
  name: string;
  age: number;
}

const example2: Profile ={
  name: 'test',
  age: 42
}

type Profile2 = typeof example1;

console.log(example1.name);
console.log(fooString);
