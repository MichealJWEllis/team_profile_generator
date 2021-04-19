const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeId) {
        super(name, id, email)
        this.officeId = officeId
    }
    getRole() {
        return `Lead Manager`
    }
}
module.exports = Manager