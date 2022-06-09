const Manager = require('../lib/Manager');

describe('Manager class', () => {
    const manager = new Manager("joe", "1", "joe@email.com", "404");
    it('Return "Manager"', () => {
        expect(manager.getRole()).toBe("Manager");
    });

    it('Return name', () => {
        expect(manager.getName()).toBe("joe");
    });

    it('Return Id', () => {
        expect(manager.getId()).toBe("1");
    });
    it('Return email', () => {
        expect(manager.getEmail()).toBe("joe@email.com");
    });
    it('Return room number', () => {
        expect(manager.getOfficeNumber()).toBe("404");
    });

});