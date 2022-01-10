export {};

class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
let hana = new Person('Hana', 27);

console.log(taro.profile());
console.log(taro.name);
//console.log(taro.age);
