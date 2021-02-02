import {css} from '@emotion/react'
import {Card, Typography, useTheme} from '@material-ui/core'
import React from 'react'
import {Route} from '../../../types/Route'
import '../../../hoc/Theme/Theme'

export const NoteDetails: Route = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          height: 325px;
          width: 325px;
          ${theme.customMixins.flexCentered};
          margin: ${theme.spacing(1)}px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          background: linear-gradient(135deg, #d79e50 15%, #C3802A 80%);
          opacity: 95%;
          text-transform: capitalize;`,
	}
	
	return (
		<Card elevation={7} component='form'>
			<Typography>
				Details of note:
			</Typography>
		</Card>
	)
}

NoteDetails.displayName = ''
NoteDetails.icon = 'details'
NoteDetails.routeName = '/notes/details/:id'