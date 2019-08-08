import React from 'react'
import SessionItem from './SessionItem'

import { Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'

const Sessions = ({list}) => {
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
          list.map(item => {
            console.log(item)
            return <SessionItem key={item.sessionId} session={item} />
          })
        }
      </TableBody>
    </Table>
  )
}


export default Sessions

