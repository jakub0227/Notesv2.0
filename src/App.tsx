import React, {createContext, Dispatch, FC, SetStateAction, useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {routeList} from './hoc/Layout/Navigation/NavigationItems/routeList'
import {SnackbarProvider} from 'notistack'
import {StylesProvider, Typography} from '@material-ui/core'
import {Layout} from './hoc/Layout/Layout'
import {Theme} from './hoc/Theme/Theme'
import {NoteDetails} from './pages/NotesPage/NoteCardsList/NoteCard/NoteDetails/NoteDetails'
import {NoteType} from './redux/notes/notesReducers'

interface EditNoteContextProps {
	edit: NoteType | undefined
	setEdit: Dispatch<SetStateAction<NoteType | undefined>>
}

export const EditNoteContext = createContext<EditNoteContextProps>(null as unknown as EditNoteContextProps)

export const App: FC = () => {
	const [edit, setEdit] = useState<NoteType>()
	return (
		<BrowserRouter>
			<StylesProvider injectFirst>
				<SnackbarProvider
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					autoHideDuration={3000}
					maxSnack={3}
				>
					<Theme>
						<EditNoteContext.Provider value={{edit: edit, setEdit: setEdit}}>
							<Layout>
								<Switch>
									{routeList.map((route) => (
										<Route
											exact
											key={route.routeName}
											path={route.routeName}
											component={route}
										/>
									))}
									<Route path={NoteDetails.routeName}>
										<NoteDetails/>
									</Route>
									<Route>
										<Typography variant='h1'>404 Not Found</Typography>
									</Route>
								</Switch>
							</Layout>
						</EditNoteContext.Provider>
					</Theme>
				</SnackbarProvider>
			</StylesProvider>
		</BrowserRouter>
	)
}
