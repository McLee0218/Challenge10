const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, userName, github){
        super(name, id, email)
        this.github = github
        this.userName = userName
    }
    getGithub(){
        return `https://github.com/${this.github}`;
    }
    getuserName(){
        return 'userName'
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer