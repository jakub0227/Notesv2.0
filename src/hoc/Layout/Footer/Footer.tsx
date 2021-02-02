import React, {FC} from 'react'
import {BottomNavigation, Typography, useTheme} from '@material-ui/core'
import {css} from '@emotion/react'

export const Footer: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          display: flex;
          flex-direction: row;
          width: 100%;
          padding: ${theme.spacing(1)}px;
          ${theme.customMixins.flexCentered};
          z-index: 1;
          background: #232526; /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #414345, #232526); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`,
		footerText: css`,
        font-weight: initial;
          color: #fff;
		`,
	}
	
	return (
		
		<BottomNavigation css={styles.root}>
			<Typography css={styles.footerText} variant='subtitle2' align='center'>
				Created with React, Redux, MongoDB, Emotion.sh, Material-UI, (C) Copyright {new Date().getFullYear()}
			</Typography>
		</BottomNavigation>
	
	)
}