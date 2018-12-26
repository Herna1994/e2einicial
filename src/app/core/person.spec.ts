import { Person, helloWorld } from './person';

describe('Hello world', () => {
    it('says hello', () => {
        expect(helloWorld())
        // Queremos que de fallo
            .toEqual('Hello worl!');
    });
});

describe('Test for Person', () => {
    describe('Test for person.getFullName', () => {

        it('should return an string with name + lastname', () => {
            const person = new Person('Nicolas', 'Molina', 24);
            expect(person.getFullName()).toEqual('Nicolas Molina');
        });
    });

    describe('Test for person.getAgeInYears', () => {

        it('should return \'34\' years', () => {
            const person = new Person('Nicolas', 'Molina', 24);
            const age = person.getAgeInYears(10);
            expect(age).toEqual(34);
        });

        it('should return \'20\' years', () => {
            const person = new Person('Nicolas', 'Molina', 20);
            const age = person.getAgeInYears(15);
            expect(age).toEqual(35);
        });

        it('should return \'20\' years with negative number', () => {
            const person = new Person('Nicolas', 'Molina', 28);
            const age = person.getAgeInYears(-10);
            expect(age).toEqual(28);
        });
    });
});
