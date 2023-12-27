interface Named {
  readonly name: string;
}


interface Greetable extends Named {
  readonly name: string;

  greet(phrase: string): void;
}

// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");
console.log(user1)

user1.greet("Hi there - I am");
