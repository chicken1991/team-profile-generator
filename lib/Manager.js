// Create Manager class that extends Employee:

// officeNumber

// getRole()—overridden to return 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;        
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager; 