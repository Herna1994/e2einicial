export class Person {

    constructor(
        public name: string,
        public lastname: string,
        public age: number
    ) { }

    getFullName(): string {
        return `${this.name} ${this.lastname}`;
    }

    getAgeInYears(years: number): number {
        return this.age + years;
    }
}
export function helloWorld() {
    return 'Hello world!';
  }
