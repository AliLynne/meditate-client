import React, { Component } from 'react'
import TextField from '@material-ui/core'

class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  render() {
    return (
      <form>
        <TextField
          id="standard-name"
          label="Name"
          value={this.state.userName}
          onChange={this.handleChange}
          margin="normal"
        />
      </form>
    )
  }
}

export default Login