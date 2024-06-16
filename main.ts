#! /usr/bin/env node

import inquirer from "inquirer";

let todoList: string[] = [];

let condition = true;

console.log("to-do list");

let newTask = await inquirer.prompt(
    [
        {
            name: "new",
            type: "input",
            message: "What do you want to add in your to-do list"
        },
    ]
);

todoList.push(newTask.new);

console.log("is added in your to-do list.");

let main = async () => {
    while(condition){
        let option = await inquirer.prompt(
            [
                {
                    name: "choice",
                    type: "list",
                    message: "What do you want to add in your to-do list? Select any one option:",
                    choices: ["View List","Add Task","Delete Task","Update List","Exit",]
                }
            ]
        );

        if (option.choice === "View List"){

            await viewTask();

        } else if (option.choice === "Add Task"){

            await addTask();

        } else if (option.choice === "Delete Task"){

            await deleteTask();

        } else if (option.choice === "Update List"){

            await updateList();

        } else if (option.choice === "Exit"){

            condition = false;

            console.log("Your to-do list is ready.");
        }
    }
};

let viewTask = async () => {

    console.log("Your to-do list is:");

    todoList.forEach ((task,index) => {

        console.log(`${index + 1}${task}`);
    });
};

let addTask = async () => {
    let newTask = await inquirer.prompt(
        [
            {
                name: "task",
                type: "input",
                message: "Enter your new task",
            }
        ]
    );

    todoList.push(newTask.task);

    console.log("is added in your to-do list")
};

let deleteTask = async () => {
    await viewTask();

    let taskForDelete = await inquirer.prompt(
        [
            {
                name: "delete",
                type: "input",
                message: "Enter the task you want to delete"
            }
        ]
    );

    let deleteTask = todoList.splice(taskForDelete.delete -1, 1);

    console.log("is deleted from your to-do list");
};

let updateList = async () => {
    await viewTask ();

    let taskForUpdate = await inquirer.prompt(
        [
            {
                name: "taskNumber",
                type: "input",
                message: "Enter the task you want to update"
            },
            {
                name: "update",
                type: "input",
                message: "Now enter the new task"
            },
        ]
    );

    todoList.splice(taskForUpdate.taskNumber -1,1, taskForUpdate.update);

    console.log("is updated in your to-do list");
} ;

main();