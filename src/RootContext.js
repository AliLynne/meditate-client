import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'

export const RootContext = React.createContext()

export default ({ children }) => {
  const [auth, setAuth] = useState(false)
  const [message, setMessage] = useState('')

  const checkAuth = () => {
    const token = localStorage.FBIdToken
    if (token) {
      const decodedToken = jwtDecode(token)
      if (decodedToken.exp * 1000 < Date.now()) {
        setMessage('please log in to save a session')
      } else {
        setAuth(true)
        setMessage('')
      }
    } else {
      setAuth(false)
      setMessage('please log in to save a session')
    }
  }

  useEffect(
    () => {
      checkAuth()
    },
    [auth]
  )

  const defaultContext = {
    auth,
    setAuth,
    message,
    setMessage
  }

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  )
}