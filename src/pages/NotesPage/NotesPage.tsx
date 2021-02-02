import React from 'react'
import {Route} from '../../types/Route'
import {Box, useTheme} from '@material-ui/core'
import {NoteForm} from './NoteForm/NoteForm'
import {NoteCardsList} from './NoteCardsList/NoteCardsList'
import {css} from '@emotion/react'

export const NotesPage: Route = (props) => {
	const theme = useTheme()
	const styles = {
		root: css`
          display: flex;
          ${theme.customMixins.flexCentered};
		`,
		items: css`
          justify-content: space-evenly;
		`,
		
	}
	return (
		<Box css={styles.root}>
			<Box css={styles.items}>
				<NoteForm/>
				<NoteCardsList/>
			</Box>
		</Box>
	)
}

NotesPage.routeName = '/'
NotesPage.displayName = 'Notes'
NotesPage.icon = 'text_snippet'
