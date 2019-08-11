import React, { useContext } from 'react'
import { RootContext } from './RootContext'
import Button from '@material-ui/core/Button'

const SaveButton = (props) => {
  const { auth, message } = useContext(RootContext)
  return (
    <div>
      <Button onClick={props.click} color="primary" disabled={!auth}>Save</Button>
      <p>{message}</p>
    </div>
  )
}

export default SaveButton
