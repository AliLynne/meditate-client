import React, { Component } from 'react'

import moment from 'moment'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Typography, Button, Switch, FormControlLabel } from '@material-ui/core';

import axios from 'axios'
const URL = `/startSession`

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    guided: false
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: new Date() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: new Date() - this.state.timerStart,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  toggleGuided = e => {
    this.setState({ guided: !this.state.guided})
  }

  handleSave = () => {
    const newSession = {
      startedAt: this.state.timerStart,
      duration: this.state.timerTime,
      guided: this.state.guided
    }

    axios.post('/newSession', newSession)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
  render() {
    const { timerTime, timerOn, timerStart } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <Card>
        <CardContent className="timer">
          <Typography variant="h4">Timer</Typography>
          <Typography variant="h2">{hours} : {minutes} : {seconds}</Typography>
          <CardActions className="timer-actions">
            <div className="timer-controls">
              {
                this.state.timerOn === false && this.state.timerTime === 0 && (
                  <Button onClick={this.startTimer} variant="contained" color="primary">Start</Button>
                )
              }
              {
                this.state.timerOn === true && (
                  <Button onClick={this.stopTimer} variant="contained" color="primary">Stop</Button>
                )
              }
              {
                this.state.timerOn === false && this.state.timerTime > 0 && (
                  <Button onClick={this.startTimer} variant="contained" color="primary" className="btn-resume">Resume</Button>
                )
              }
              {
                this.state.timerOn === false && this.state.timerTime > 0 && (
                  <Button onClick={this.resetTimer} variant="contained" color="secondary">Reset</Button>
                )
              }
            </div>
            
            
            <FormControlLabel
              control={
                <Switch checked={this.state.guided} onChange={this.toggleGuided}value="guided" />
                }
              label="Guided"
            />
            <Button onClick={this.handleSave} variant="contained" color="primary">
              Save
            </Button>
          </CardActions>
          
        </CardContent>
      </Card>
    )
  }
}


export default Timer
