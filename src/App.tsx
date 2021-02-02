import React, {FC} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {routeList} from './hoc/Layout/Navigation/NavigationItems/routeList'
import {SnackbarProvider} from 'notistack'
import {StylesProvider, Typography} from '@material-ui/core'
import {Layout} from './hoc/Layout/Layout'
import {Theme} from './hoc/Theme/Theme'

export const App: FC = () => {
	
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
								<Route>
									<Typography variant='h1'>404 Not Found</Typography>
								</Route>
							</Switch>
						</Layout>
					</Theme>
				</SnackbarProvider>
			</StylesProvider>
		</BrowserRouter>
	)
}
