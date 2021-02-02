import React, {FC, useState} from 'react'
import {Box, Grid, useTheme} from '@material-ui/core'
import {css} from '@emotion/react'
import {useSelector} from 'react-redux'
import {notesSelector} from '../../../redux/notes/notesSelector'
import {NoteCard} from './NoteCard/NoteCard'

export const NoteCardsList: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          ${theme.customMixins.flexCentered};
          margin-top: ${theme.spacing(2)}px;
		`,
		gridWrapper: css`
          padding: ${theme.spacing(2)}px;
		`,
	}
	const [loading, setLoading] = useState(false)
	const notes = useSelector(notesSelector)
	
	return (
		<Box css={styles.root}>
			<Grid css={styles.gridWrapper} container direction='row' justify='space-around' xs={12}>
				{notes.map((note) => (
					<Grid css={styles.gridWrapper} direction='column' item spacing={3} xs='auto'>
						<NoteCard key={note.id} id={note.id} note={note.note} dateCreated={note.dateCreated}
						          dateModified={note.dateModified}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}