import React, { useContext, useState } from 'react'
import { RootContext } from './RootContext'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

const Navbar = () => {
  const { auth, setAuth, showLogin, setShowLogin, comp, setComp } = useContext(RootContext)


  const toggleComp = (component) => {
    setComp(component)
  }

  const toggleLogin = () => setShowLogin(!showLogin)

  const buttonText = showLogin ? "Login" : "Logout"
  return (
    <AppBar color="primary">
      <Toolbar className="nav-toolbar">
        
        <Button color="inherit" onClick={toggleLogin}>{buttonText}</Button>
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