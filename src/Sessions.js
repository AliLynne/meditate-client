import React, { Component} from 'react'
import SessionItem from './SessionItem'

import { Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'

import Axios from 'axios';
Axios.defaults.baseURL = `https://us-central1-meditate-46519.cloudfunctions.net/app`

class Sessions extends Component {
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Guided?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.state.sessions && this.state.sessions.map(item => {
              console.log(item)
              return <SessionItem key={item.sessionId} session={item} />
            })
          }
        </TableBody>
      </Table>
    )
  }
  
}


export default Sessions

