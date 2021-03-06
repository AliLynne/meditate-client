import React, { useContext } from 'react'
import { RootContext } from './RootContext'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import Grid from '@material-ui/core/Grid'

import Login from './Login'
import Navbar from './Navbar'
import MeditationWidget from './MeditationWidget'

const theme = {
  palette: {
    primary: {
      dark: '#752f47',
      main: '#a84466',
      light: '#b96984',
      contrastText: '#fff'
    },
    secondary: {
      dark: '#57427c',
      main: '#7d5fb2',
      light: '#977fc1',
      contrastText: '#fff'
    },
    error: {
      main: '#a84466',
      contrastText: '#ffffff'
    }
  }
}

const myTheme = createMuiTheme(theme)

const App = () => {

  const logout = () => {
    localStorage.removeItem('FBIdToken')
    setAuth(false)
  }

    const { auth, setAuth } = useContext(RootContext)
    const Auth = auth ? <button onClick={logout}>Logout</button> : <Login auth={auth} />
    return (
      <MuiThemeProvider theme={myTheme}>
        <Navbar />
        <div className="container">
          <Grid container spacing={2}>
            <Grid item sm={4}>
              {Auth}
            </Grid>
            <Grid item sm={4}>
              <MeditationWidget/>
            </Grid>
            <Grid item sm={4}>
              Stats coming soon...
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
}

export default App;
