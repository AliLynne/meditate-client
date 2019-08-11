import React, { Component, Fragment } from 'react'
import Sessions from './Sessions'
import Timer from './Timer'

import Button from '@material-ui/core/Button'


class MeditationWidget extends Component {
  constructor(props){
    super(props)
    this.state = {
      timer: false
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
      <Fragment>
        {button}
        { this.state.timer && <Timer /> }
              
        <Sessions />
      </Fragment>
    )
  }
  
}

export default MeditationWidget
