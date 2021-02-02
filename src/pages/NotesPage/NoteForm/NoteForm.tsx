import React, {FC} from 'react'
import {
	Box,
	Button,
	ButtonBase,
	FormControl,
	InputLabel,
	OutlinedInput, Paper, Typography, useTheme,
} from '@material-ui/core'
import {css} from '@emotion/react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSnackbar} from 'notistack'
import {addNote, replaceNotes} from '../../../redux/notes/notesActions'

export const NoteForm: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          margin-top: ${theme.spacing(5)}px;
          margin-left: 20px;
          margin-right: 20px;
          border-style: solid;
          border-color: ${theme.palette.primary.light};
          border-radius: 30px;
          max-width: content-box;
          background-color: rgba(86, 81, 81, 0.90);
          z-index: 10;
          padding: ${theme.spacing(1)}px;
		`,
		input: css`
          ${theme.customMixins.flexCentered};
          width: 100%;
          margin-bottom: ${theme.spacing(2)}px;
		`,
	}
	const dispatch = useDispatch()
	const {enqueueSnackbar} = useSnackbar()
	// const {edit, setEdit} = useContext(EditContext)
	const [inputText, setInputText] = useState('')
	const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value)
	}
	
	const handleDeleteAll = () => {
		dispatch(replaceNotes([]))
	}
	const handleSubmit = (e: React.ChangeEvent<{}>) => {
		e.preventDefault()
		if (inputText !== '') {
			dispatch(addNote(inputText))
			enqueueSnackbar(`New Note saved`, {variant: 'success'})
		} else {
			enqueueSnackbar(`Can't add empty note!`, {variant: `error`})
		}
	}
	
	return (
		<Paper css={styles.root}>
			<Box css={styles.input}>
				<form>
					<FormControl variant='outlined'>
						<InputLabel color='primary' htmlFor='note'>
							Type new note
						</InputLabel>
						<OutlinedInput css={styles.input}
						               type='text'
						               color='primary'
						               id='note'
						               label='Type new note'
						               value={inputText}
						               onChange={handleInputTextChange}
						               fullWidth
						/>
						<ButtonBase>
							<Button
								variant='contained'
								color='primary'
								type='submit'
								size='large'
								onClick={handleSubmit}
							>
								Add note
							</Button>
							<Button
								variant='contained'
								color='secondary'
								size='large'
								onClick={handleDeleteAll}
							>
								Erase all
							</Button>
						</ButtonBase>
					</FormControl>
				</form>
			</Box>
			<Typography variant='h4' align='center'>
				Notes:
			</Typography>
		</Paper>
	)
}