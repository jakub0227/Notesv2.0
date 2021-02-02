import {combineReducers, createStore} from '@reduxjs/toolkit'
import {notesReducer, NotesState} from './notes/notesReducers'

export interface RootState {
	notes: NotesState
}

export const store = createStore(combineReducers({
	notes: notesReducer,
}))