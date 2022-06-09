const Intern = require('../lib/Intern');

describe('Intern class', () => {
    const intern = new Intern("randy", "2", "randy@email.com", "MIT");
    it('Return "Intern"', () => {
        expect(intern.getRole()).toBe("Intern");
    });

    it('Return name', () => {
        expect(intern.getName()).toBe("randy");
    });

    it('Return Id', () => {
        expect(intern.getId()).toBe("2");
    });
    it('Return email', () => {
        expect(intern.getEmail()).toBe("randy@email.com");
    });
    it('Return Scheel', () => {
        expect(intern.getSchool()).toBe("MIT");
    });

});