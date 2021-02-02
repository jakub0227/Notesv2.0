import React, {FC} from 'react'
import {CssBaseline, Paper} from '@material-ui/core'
import {css} from '@emotion/react'
import {Navigation} from './Navigation/Navigation'
import {Footer} from './Footer/Footer'

export const Layout: FC = (props) => {
	const styles = {
		root: css`
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
		`,
		page: css`
          display: flex;
          width: 100%;
          justify-content: center;
          background: #867cb6; /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #928DAB, #1F1C2C); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #928DAB, #1F1C2C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background-clip: border-box;
          background-attachment: fixed;
          flex: 1;
		`,
	}
	
	return (
		
		<Paper css={styles.root}>
			<CssBaseline/>
			<Navigation/>
			<Paper css={styles.page}>
				{props.children}
			</Paper>
			<Footer/>
		</Paper>
	
	)
}