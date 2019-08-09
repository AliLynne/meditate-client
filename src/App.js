import React from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Navbar from './Navbar'
import Sessions from './Sessions'
import Timer from './Timer'



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
  constructor(){
    super()
    this.state = {
      timer: false,
    }
  }

  handleClick = () => {
    this.setState({
      timer: !this.state.timer
    })
  }

  render() {
    const button = this.state.timer ? <Button color="secondary" onClick={this.handleClick}>Close Timer</Button> : <Button color="secondary" onClick={this.handleClick}>Show Timer</Button>
    return (
      <MuiThemeProvider theme={myTheme}>
        <Navbar />
        <div className="container">
          <Grid container>
            <Grid item sm={4} />
            <Grid item sm={4}>
              {button}
              { this.state.timer && <Timer /> }
              
              <Sessions />
            </Grid>
            <Grid item sm={4} />
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
