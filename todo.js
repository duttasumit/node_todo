const chalk = require('chalk')
const fs = require('fs')

const addTodo = (title, items) => {
    const todos = loadTodo()

    const titleExist = todos.find((todo) => todo.title === title)

    if(!titleExist) {
        todos.push({
            title: title,
            items: items
        })
        saveTodo(todos)
        console.log(chalk.green.inverse('Todo created'))
    } else {
        console.log(chalk.red.inverse('TODO already created!'))
    }
}

const displayTodos = (title) => {
    const todos = loadTodo()
    if(title !== undefined) {
        const todo = todos.find((todo) => todo.title === title)
            if(todo) {
                console.log(chalk.green(todo.title))
                const todoItems = todo.items.split(',')
                todoItems.forEach((todoitem) => console.log(todoitem))
            } else {
                console.log(chalk.red('TODO not found!'))
            }
    } else {
        todos.forEach((todo) => {
            console.log(chalk.green(todo.title))
            const todoItems = todo.items.split(',')
            todoItems.forEach((todoitem) => console.log(todoitem))
        })
    }
}

const loadTodo = () => {
    try {
        const todoBuffer = fs.readFileSync('todo.json')
        const todoJSON = todoBuffer.toString()
        return JSON.parse(todoJSON)
    } catch (e) {
        return []
    }
    
}

const saveTodo = (todo) => {
    const todoJSON = JSON.stringify(todo)
    fs.writeFileSync('todo.json', todoJSON)
}

module.exports = {
    addTodo: addTodo,
    displayTodos: displayTodos
}