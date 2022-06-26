// prompts, packages and connection required
const { promptUser } = require('../index');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('../server')

// view roles 
const viewRoles = () => {
    connection.query(
        `SELECT roles.id, roles.title, roles.salary, department.name
            FROM roles
            LEFT JOIN department
            ON roles.department_id = department.id `,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }

            console.table(results);
            promptUser();
        }
    );
};