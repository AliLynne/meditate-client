import React from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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

const Navbar = () => {
  return (
    <AppBar color="primary">
      <Toolbar className="nav-toolbar">
        <Typography variant="h6" color="inherit">
          Meditation Sessions
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const Sessions = ({list}) => {
  return (
    <ul>
      {
        list.map(item => {
          console.log(item)
          return <SessionItem key={item.sessionId} session={item} />
        })
      }
    </ul>
  )
  
}

const SessionItem = (item) => {
  const guided = item.session.guided ? <Chip size="small" color="secondary" label="Guided" className="guided" /> : null
  return (
    <li>
      <Card className="session-item">
        <CardContent className="session-content">
          <Typography variant="h6">{item.session.date}</Typography>
          <Typography variant="overline">Time: {item.session.duration}</Typography>
          {guided}
          
        </CardContent>
      </Card>
    </li>
  )
}

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
              {
                this.state.sessions && <Sessions list={this.state.sessions}/>
              }
            </Grid>
            <Grid item sm={4} />
          </Grid>
        </div>
        
        
        
      </MuiThemeProvider>
    );
  }
}

export default App;
