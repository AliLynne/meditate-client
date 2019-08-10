import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  render() {
    return (
      <form>
        <TextField 
          id="email" 
          name="email" 
          type="email" 
          label="Email"
          value={this.state.email} 
          onChange={this.handleChange}
        />
        <TextField 
          id="password" 
          name="password" 
          type="password" 
          label="Password" 
          value={this.state.password} 
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Login