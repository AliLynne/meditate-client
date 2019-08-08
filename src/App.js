import React from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import Grid from '@material-ui/core/Grid'

import Navbar from './Navbar'
import Sessions from './Sessions'
import Timer from './Timer'

import Axios from 'axios';
Axios.defaults.baseURL = `https://us-central1-meditate-46519.cloudfunctions.net/app`



const theme = {
  palette: {
    primary: {
      dark: '#a84466',
      main: '#f06292',
      light: '#f381a7',
      contrastText: '#fff'
    },
    secondary: {
      dark: '#7d5fb2',
      main: '#b388ff',
      light: '#c29fff',
      contrastText: '#fff'
    },
    error: {
      main: '#a84466',
      contrastText: '#ffffff'
    }
  }
}

const myTheme = createMuiTheme(theme)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sessions: null
    }
  }

  componentDidMount() {
    Axios.get('/getSessions')
      .then(res => {
        this.setState({ sessions: res.data })
      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <Navbar />
        <div className="container">
          <Grid container>
            <Grid item sm={4} />
            <Grid item sm={4}>
              <Timer />
              {this.state.sessions && <Sessions list={this.state.sessions}/>}
            </Grid>
            <Grid item sm={4} />
          </Grid>
        </div>
        
        
        
      </MuiThemeProvider>
    );
  }
}

export default App;
