import React from 'react'
import {Link} from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Signtext from './Signtext'

const demo = ({
    nameField,
    emailField,
    passField,
    conPassField,
    setNameField,
    setEmailField,
    setPassField,
    setConPassField,
    registerUser
}) => {
  return (
<Container component="main" maxWidth="xs" sx={{ marginTop: '10px',marginBottom:'10px',fontFamily : 'Signika Negative'}}>
  <Paper elevation={5} sx={{
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: '#eaf5ff',
    fontFamily: 'Signika Negative',
  }}>
  <Box sx={{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }} >
    <Typography component="h1" variant="h3" sx={{fontFamily: "Bree Serif"}}>SIGN UP</Typography>
    <img src={require('../logincomp/login.png')} className="login_img" alt="login" />
    <div>
      <form onSubmit={registerUser}>
      
        <Signtext tlabel="Name" ttype="text" tvalue={nameField} tfunc={setNameField} />
        <Signtext tlabel="Email" ttype="email" tvalue={emailField} tfunc={setEmailField} />
        <Signtext tlabel="Password" ttype="password" tvalue={passField} tfunc={setPassField} />
        <Signtext tlabel="Confirm Password" ttype="password" tvalue={conPassField} tfunc={setConPassField} />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Register
        </Button>
      </form>
    </div>
    <Typography component="subtitle1" variant="div">
      Already have an account? <Link to="/login" exact="true" style={{color :"red"}}> Login </Link> 
    </Typography>
  </Box>
  </Paper>
</Container>
    
  )
}

export default demo