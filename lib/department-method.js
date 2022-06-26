// prompts and packages required
const { promptUser } = require('../index');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('../server')

// View department
const viewDep = () => {
    connection.query(
        `SELECT * FROM department`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }

            console.table(results);
            promptUser();
        }
    )
} 
