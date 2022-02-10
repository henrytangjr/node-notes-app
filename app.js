// const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

// Create a add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create a list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

// Create a read command
yargs.command({
    command: 'read',
    describe: 'Read all notes',
    buidler: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()


// console.log(yargs.argv)



// msg = getNotes()
// console.log(msg)

// console.log(chalk.bold.inverse.green('Success!'))

// console.log(validator.isEmail('gmail.com'))


// const name = require('./utils.js')
// const fs = require('fs')

// // fs.writeFileSync('notes.txt', 'This file was created by NodeJS');

// // fs.appendFileSync('notes.txt', 'Appending my name - Henry');

// console.log(name)