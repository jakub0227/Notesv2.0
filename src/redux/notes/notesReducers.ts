import {createReducer, nanoid, PayloadAction} from '@reduxjs/toolkit'
import {ADD_NOTE, EDIT_NOTE, REPLACE_NOTES, REMOVE_NOTE} from './notesActionTypes'

export interface NoteType {
	id: string;
	note: string;
	dateCreated: number;
	dateModified: number;
}

export type NotesState = NoteType[]

const initState: NotesState = [
	{id: nanoid(), note: 'Siema', dateCreated: 3285793765, dateModified: 3285793765},
	{id: nanoid(), note: 'Ucz sie Reduxa', dateCreated: 3285793765, dateModified: 3285793765},
	{id: nanoid(), note: 'Kup domene', dateCreated: 3285793765, dateModified: 3285793765},
]

export type AddNoteAction = PayloadAction<{
	note: string
}, typeof ADD_NOTE>

export type RemoveNoteAction = PayloadAction<{
	id: string;
}, typeof REMOVE_NOTE>

export type EditNoteAction = PayloadAction<{
	id: string;
	note: string;
}, typeof EDIT_NOTE>

export type ReplaceNotes = PayloadAction<{
	notes: NotesState
}, typeof REPLACE_NOTES>

export const notesReducer = createReducer(initState, {
	[ADD_NOTE]: ((state: NotesState, action: AddNoteAction) => [...state, {
		id: nanoid(),
		dateCreated: +new Date(),
		dateModified: +new Date(),
		...action.payload,
	}]),
	[EDIT_NOTE]: (state: NotesState, action: EditNoteAction) => state.map((note) =>
		note.id === action.payload.id ? {
			...note,
			note: action.payload.note,
			dateModified: +new Date(),
		} : {...note}),
	[REMOVE_NOTE]: (state: NotesState, action: RemoveNoteAction) => state.filter((note) => note.id !== action.payload.id),
	[REPLACE_NOTES]: (state: NotesState, action: ReplaceNotes) => [...action.payload.notes],
})