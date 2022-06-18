const Employee = require('../lib/Employee');

describe('Employee class', () => {
    const engineer = new Employee("Bud", "5", "bud@email.com", "buddy420");
    it('Return "Engineer"', () => {
        expect(engineer.getRole()).toBe("Employee");
    });

    it('Return name', () => {
        expect(engineer.getName()).toBe("Bud");
    });

    it('Return Id', () => {
        expect(engineer.getId()).toBe("5");
    });
    it('Return email', () => {
        expect(engineer.getEmail()).toBe("bud@email.com");
    });

});