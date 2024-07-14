const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/database');

function mainPrompt() {
    inquirer
    .prompt({
        type: 'list',
        name: 'menu',
        message: 'Please select an option.',

        choice: ['Browse Employees', 'Browse Employees by Department', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Add Role', "Exit"]
    
    })
    .then(function ({menu}) {
            
        
        switch (menu) {

            
            case 'Browse Employees': viewEmployee();
            break;
            
            
            case 'Browse Employees by Department': getDept();
            break;

           
            case 'Add Employee': addEmployee();
            break;

            
            case 'Remove Employee': removeEmployee();
            break;

            
            case 'Update Employee Role': updateEmployeeRole();
            break;

            
            case 'Add Role': addRole();
            break;

          
            case 'Exit' : endApp();
            break
        }
    }) 
}

async function viewEmployee() {
    
    console.log('List of Employees');

    
    var employee = await db.query(`SELECT * FROM employee;`);
    employee.rows

    for (let employee of employee.rows) { `
    ${employee.id}  ${employee.first_name}  ${employee.last_name}    ${employee.role_id}    ${employee.manager_id}`;
    };
 
   
    console.log('All Employees Viewed.', employee);

    
    mainPrompt();
}


async function getDept() {
    const data = await db.query(`SELECT * FROM department`)
    console.log('Departments', rows.data);

    viewDepartment(data);
}

function viewDepartment(data) {
    inquirer
        .prompt({
            type: 'list',
            name: 'departments',
            message: 'What Department would you like to view',
            
            
            
            choices: [rows.data.name]

            
        })
}

function addEmployee() {
    
    inquirer
        .prompt(
        {
            type: 'input',
            name: 'Name',
            message: 'Enter Employee name',
        },
        {
            type: 'input',
            name: 'Role',
            message: "Enter Employee's new Role",
        },
    )
    .then()

    console.log('Successfuly added employee!')

    
    mainPrompt();
}


function removeEmployee() {
    console.log('Choose Employee to remove');

    // Return user to main menu
    mainPrompt();
}

function updateEmployeeRole() {
    console.log('Chose employee role to update');
    // Return user to main menu
    mainPrompt();
}

function addRole() {
    console.log('Enter new role.')

     
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newRole',
                message: 'What is the new role?',
            },
            {
                type: 'input',
                name: 'newRoleSalary',
                message: 'What is the salary for this new role',
            },
        ])

    
    mainPrompt();
}

function endApp() {
    db.end();
    console.log('Quitting App');
}

main();