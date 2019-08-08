import React from 'react'
import { Chip, Icon, TableRow, TableCell} from '@material-ui/core'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import moment from 'moment'

const SessionItem = (item) => {
  const icon = <CheckCircleOutline color="secondary" />
  const guided = item.session.guided ? icon : null
  return (
    <TableRow>
      <TableCell>{moment(item.session.startedAt).calendar()}</TableCell>
      <TableCell>{item.session.duration / 100000} min.</TableCell>
      <TableCell align="center">{guided}</TableCell>
    </TableRow>
  )
}

export default SessionItem