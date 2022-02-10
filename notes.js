const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function() {
	
// 	return "Your notes.."

// }
// const getNotes = () => "Your notes.."
const getNotes = () => {
	
	return "Your notes.."

}

// const addNote = function (title, body) {
// 	const notes = loadNotes()
// 	const duplicateNotes = notes.filter(function (note) {
// 		return note.title == title
// 	})

// 	if (duplicateNotes.length === 0) {
// 		notes.push({
// 			title: title,
// 			body: body
// 		})
	
// 		saveNotes(notes)
// 		console.log (chalk.green.inverse('New note added!'))
// 	} else {
// 		console.log (chalk.red.inverse('Duplicated note not added!'))
// 	}
// }
const addNote = (title, body) => {
	const notes = loadNotes()
	// const duplicateNotes = notes.filter((note) => note.title === title)
	const duplicateNote = notes.find((note) => note.title === title)

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		})
	
		saveNotes(notes)
		console.log (chalk.green.inverse('New note added!'))
	} else {
		console.log (chalk.red.inverse('Duplicated note not added!'))
	}
}

// const removeNote = function(title) {
// 	console.log('Attempting to remove note with title - ' + title)

// 	const notes = loadNotes()
	
// 	const notesToKeep = notes.filter(function(note) {
// 		return note.title != title
// 	})
	
// 	if (notes.length == notesToKeep.length) {
// 		console.log(chalk.red.inverse('No note found!'))
// 	} else {
// 		console.log(chalk.green.inverse('Note removed!'))
// 		saveNotes(notesToKeep)
// 	}
// }
const removeNote = (title) => {
	console.log('Attempting to remove note with title - ' + title)

	const notes = loadNotes()
	
	const notesToKeep = notes.filter((note) => note.title != title)
	
	if (notes.length == notesToKeep.length) {
		console.log(chalk.red.inverse('No note found!'))
	} else {
		console.log(chalk.green.inverse('Note removed!'))
		saveNotes(notesToKeep)
	}
}

const saveNotes = (notes) => {
	const dataJSONstr = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSONstr)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = JSON.parse(dataBuffer.toString())

		return dataJSON

	} catch (e) {
		return []
	}
}

const listNotes = () => {
	const notes = loadNotes()
	if (notes.length > 0) {
		console.log(chalk.bold.red('Your Notes'))

		notes.forEach((note) => console.log(note.title))

	} else {
		console.log(chalk.bold.red('No notes at the moment'))
	}
}

const readNote = (title) => {
	console.log('Attempting to read note: ' + title)

	const notes = loadNotes()

	if (notes.length > 0) {
		const noteFound = notes.find((note) => note.title === title)

		if (noteFound) {
			console.log(chalk.bold.green(noteFound.title) + '-' + chalk.green(noteFound.body))
		} else {
			console.log(chalk.bold.red('No note found'))
		}
	}
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}