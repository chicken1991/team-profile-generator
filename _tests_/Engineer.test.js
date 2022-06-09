const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    const engineer = new Engineer("robert", "3", "robert@email.com", "robert420");
    it('Return "Engineer"', () => {
        expect(engineer.getRole()).toBe("Engineer");
    });

    it('Return name', () => {
        expect(engineer.getName()).toBe("robert");
    });

    it('Return Id', () => {
        expect(engineer.getId()).toBe("3");
    });
    it('Return email', () => {
        expect(engineer.getEmail()).toBe("robert@email.com");
    });
    it('Return Github', () => {
        expect(engineer.getGithub()).toBe("robert420");
    });

});