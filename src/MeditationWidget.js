import React, { Fragment, useState } from 'react'
import Sessions from './Sessions'
import Timer from './Timer'

import Button from '@material-ui/core/Button'


const MeditationWidget = () => {
  const [timer, setTimer] = useState(false)

  const handleClick = () => { setTimer(!timer) }

  const closeButton = <Button color="secondary" onClick={handleClick}>Close Timer</Button>

  const openButton = <Button color="secondary" onClick={handleClick}>Show Timer</Button>

  const button = timer ? closeButton : openButton

  return (
    <Fragment>
      {button}
      
      {timer && <Timer />}

      <Sessions />
    </Fragment>
  )
}


export default MeditationWidget
