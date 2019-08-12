import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { RootContext } from './RootContext'

import axios from 'axios'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginTop: theme.spacing(2),
    marginRight: "auto",
    marginLeft: "auto"
  },
  typography: {
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: "auto",
    marginLeft: "auto" 
  }
}))

const Login = (props) => {
  const classes = useStyles()
  const { setAuth } = React.useContext(RootContext)
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    loading: false,
    error: ''
  })

  const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleSubmit = event => {
    
    event.preventDefault()
    const userData = {
      email: values.email,
      password: values.password 
    }
    setValues({ ...values, loading: true})
    axios
      .post('/login', userData)
      .then(res => {
        setValues({ ...values, loading: false })
        setAuth(true)
        setAuthorizationHeader(res.data.token)
      })
      .catch(err => {
        console.log(err)
        setValues({ ...values, errors: err })
      })
  }

    return (
        <form className={classes.container} noValidate onSubmit={handleSubmit}>
          <Typography className={classes.typography} variant="h4" align="center" color="primary">Login</Typography>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            value={values.email}
            onChange={handleChange('email')}
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            value={values.password}
            onChange={handleChange('password')}
            variant="outlined"
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Submit
            {values.loading && (
            <CircularProgress size={30}/>
          )}
          </Button>
        </form>
    )
}


export default Login