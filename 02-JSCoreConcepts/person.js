class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }

    get fullName() {
      return `${this.name} ${this.surname.toUpperCase()}`;
    }

    get initials() {
      return `${this.name[0]}.${this.surname[0]}`;
    }
}

const jN = new Person('Jan', 'Nowak');
const pk = new Person('Paweł', 'Klejka');

console.log(jN.fullName);
console.log(jN.initials);
console.log(pk.fullName);
console.log(pk.initials);