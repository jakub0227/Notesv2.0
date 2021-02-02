import React, {FC} from 'react'
import {Button, Card, CardActionArea, CardContent, Icon, Typography, useTheme} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import {css} from '@emotion/react'
import {NoteType} from '../../../../redux/notes/notesReducers'
import {useDispatch} from 'react-redux'
import {removeNote} from '../../../../redux/notes/notesActions'
import {useSnackbar} from 'notistack'

export const NoteCard: FC<NoteType> = props => {
	const theme = useTheme()
	const styles = {
		root: css`
          border-style: solid;
          border-color: #565151;
          border-radius: 30px;
          background: linear-gradient(135deg, #d79e50 15%, #C3802A 80%);;
          z-index: 10;
          margin: ${theme.spacing(3)}px;
          opacity: 95%;
		`,
		card: css`
          height: 250px;
          width: 250px;
          padding: ${theme.spacing(1.5)}px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
		`,
		delete: css`
          margin-left: ${theme.spacing(10)}px;
		`,
	}
	const {enqueueSnackbar} = useSnackbar()
	const dispatch = useDispatch()
	const {push} = useHistory()
	const handleRedirectToDetails = () => {
		push(`/notes/details/${props.id}`)
		enqueueSnackbar(`Redirecting to note details!`, {variant: `info`})
	}
	const handleDelete = () => {
		dispatch(removeNote(props.id))
		enqueueSnackbar(`Note deleted!`, {variant: `warning`})
		push('/')
	}
	return (
		<Card css={styles.root} elevation={7}>
			<CardActionArea onClick={handleRedirectToDetails}>
				<CardContent css={styles.card}>
					<Typography color='textPrimary' align='center' variant='h5'>
						{props.note}
					</Typography>
					<Typography color='textSecondary' align='center' variant='h5'>
						{props.dateCreated}
					</Typography>
				</CardContent>
			</CardActionArea>
			<Button css={styles.delete}
			        startIcon={<Icon color='error'>delete</Icon>}
			        color='secondary'
			        onClick={handleDelete}>
				Delete
			</Button>
		</Card>
	
	)
}