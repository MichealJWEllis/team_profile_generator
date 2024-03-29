const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
    }
    getGitHub() {
        return `GitHub: ${this.gitHub}`
    }
    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer
