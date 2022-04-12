const yargs = require('yargs')
const chalk = require('chalk')
const todo = require('./todo.js')


yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add something',
    builder: {
        title: {
            describe: 'Todo title',
            demandOption: true,
            type: 'string'
        },
        items: {
            describe: 'Todo items',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        todo.addTodo(argv.title, argv.items)
    }
})

yargs.command({
    command: 'display',
    describe: 'Display todos',
    builder: {
        title: {
            describe: 'TODO title',
            type: 'string'
        }
    },
    handler(argv) {
        todo.displayTodos(argv.title)
    }
})

yargs.parse()