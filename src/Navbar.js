import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

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

export default Navbar