import React, {FC, useContext} from 'react'
import {Button, Card, CardActionArea, CardContent, Icon, Typography, useTheme} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import {css} from '@emotion/react'
import {NoteType} from '../../../../redux/notes/notesReducers'
import {useDispatch} from 'react-redux'
import {removeNote} from '../../../../redux/notes/notesActions'
import {useSnackbar} from 'notistack'
import {EditNoteContext} from '../../../../App'

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
          margin-left: ${theme.spacing(4)}px;
		`,
	}
	const {setEdit} = useContext(EditNoteContext)
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
	const handleEditNote = () => {
		setEdit(props)
	}
	
	return (
		<Card css={styles.root} elevation={7}>
			<CardActionArea onClick={handleRedirectToDetails}>
				<CardContent css={styles.card}>
					<Typography color='primary' align='center' variant='h5'>
						{props.note}
					</Typography>
					<Typography color='inherit' align='center' variant='h5'>
						Date:{new Date(props.dateCreated).toString()}
					</Typography>
					<Typography color='secondary'
					            align='center'
					            variant='subtitle2'>
						ID:{props.id}
					</Typography>
				</CardContent>
			</CardActionArea>
			<Button css={styles.delete}
			        startIcon={<Icon color='error'>delete</Icon>}
			        onClick={handleDelete}>
				Delete
			</Button>
			<Button startIcon={<Icon color='action'>edit</Icon>}
			        onClick={handleEditNote}>
				Edit
			</Button>
		</Card>
	
	)
}