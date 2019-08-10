import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

const Navbar = () => {
  return (
    <AppBar color="primary">
      <Toolbar className="nav-toolbar">
        

        <Typography variant="h6" color="inherit" component="h1">
          Meditation
        </Typography>
        <Button color="inherit">Sessions</Button>
        <Button color="inherit">Stats</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar