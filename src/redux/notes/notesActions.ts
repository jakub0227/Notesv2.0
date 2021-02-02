import {AddNoteAction, EditNoteAction, NotesState, RemoveNoteAction, ReplaceNotes} from './notesReducers'
import {EDIT_NOTE} from './notesActionTypes'

export const addNote = (note: string): AddNoteAction => ({
	type: 'ADD_NOTE',
	payload: {
		note: note,
	},
})
export const replaceNotes = (notes: NotesState): ReplaceNotes => ({
	type: 'REPLACE_NOTES',
	payload: {
		notes: notes,
	},
})
export const removeNote = (id: string): RemoveNoteAction => ({
	type: 'REMOVE_NOTE',
	payload: {
		id: id,
	},
})
export const editNote = (id: string, note: string): EditNoteAction => ({
	type: EDIT_NOTE,
	payload: {
		id: id,
		note: note,
	},
})