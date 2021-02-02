import {css} from '@emotion/react'
import {Card, Typography, useTheme} from '@material-ui/core'
import React, {useContext} from 'react'
import {Route} from '../../../../../types/Route'
import '../../../../../hoc/Theme/Theme'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {notesSelector} from '../../../../../redux/notes/notesSelector'
import {Fragment} from 'react'

export const NoteDetails: Route = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          height: 400px;
          width: 400px;
          margin-top: ${theme.spacing(10)}px;
          display: flex;
          flex-direction: column;
          border-radius: 30px;
          background: linear-gradient(135deg, #d79e50 15%, #C3802A 80%);
          opacity: 95%;
          ${theme.customMixins.flexCentered};
		`,
	}
	const {_id}: any = useParams()
	const notes = useSelector(notesSelector)
	
	return (
		
		<Card css={styles.root} elevation={7}>
			{notes.filter(note => note.id === _id && note.note).map(note => (
				<Fragment>
					<Typography variant='h6' color='secondary'>
						Details of note:
					</Typography>
					<Typography variant='h5' color='textPrimary'>
						{note.note}
					</Typography>
					<Typography variant='h6' color='secondary'>
						Date:
					</Typography>
					<Typography align='center' variant='h6' color='inherit'>
						{new Date(note.dateCreated).toString()}
					</Typography>
				</Fragment>))}
		</Card>
	)
}

NoteDetails.displayName = ''
NoteDetails.icon = 'details'
NoteDetails.routeName = '/notes/details/:_id'