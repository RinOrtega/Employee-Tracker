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

