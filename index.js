const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const pageGen = require('./src/pageConstruct')
const writeFile = require('./src/file-gen')
const copyFile = require('./src/copy-file')


let manager = []
let engineer = []
let intern = []
let empArr = { manager, engineer, intern }

function Prompt() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "What role will the new employee fill?",
        choices: ['Manager', 'Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'employee',
        message: "What is the new employee's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the new employee's ID number?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the new employee's email? "
      }
    ])
    .then(({ employee, id, email, role }) => {
      if (role === 'Manager') {
        // console.log(empArr)
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'officeId',
              message: "What is the Manager's office number?"
            },
            {
              type: 'confirm',
              name: 'nextEmployee',
              message: "Would you like to add another employee?",
              default: false
            }
          ])
          .then(({ officeId, nextEmployee }) => {
            manager.push(new Manager(employee, id, email, officeId))
            // console.log(empArr)
            if (nextEmployee) {
              // console.log(empArr)
              return Prompt();
            }
          })
      } else if (role === 'Engineer') {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'gitHub',
              message: "What is the new Engineer's GitHub Username?"
            },
            {
              type: 'confirm',
              name: 'nextEmployee',
              message: "Would you like to add another employee?",
              default: false
            }
          ])
          .then(({ gitHub, nextEmployee }) => {
            engineer.push(new Engineer(employee, id, email, gitHub))
            // console.log(empArr)
            if (nextEmployee) {
              // console.log(empArr)
              return Prompt()
            }
          })
      } else {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'school',
              message: "What is the Intern's school?"
            },
            {
              type: 'confirm',
              name: 'nextEmployee',
              message: "Would you like to add another employee?",
              default: false
            }
          ])
          .then(({ school, nextEmployee }) => {
            intern.push(new Intern(employee, id, email, school))
            // console.log(empArr)
            if (nextEmployee) {
              // console.log(empArr)
              return Prompt()
            }
          })
      }
    })
}

Prompt()
  .then(teamInfo => {
    return pageGen(empArr)
  })
  .then(genHTML => {
    copyFile()
    return writeFile(genHTML)

  })
  

