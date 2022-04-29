import React from 'react'
import './loginStyle.css'
import {Link} from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const LoginMain = ({loginUser,setEmailLogin,setPassLogin,emailLogin,passLogin}) => {
  return (
    
    <Container component="main" maxWidth="xs" sx={{ 
        marginTop: '40px',
        fontFamily : 'Signika Negative'
       }}>
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
        <Typography component="h1" variant="h3" sx={{fontFamily: "Bree Serif"}}>SIGN IN</Typography>
        <img src={require('./login.png')} className="login_img" alt="login" />
        
        <div>
            <form onSubmit={loginUser}>
                <TextField 
                  margin="normal"
                  required
                  fullWidth
                  id="outlined-basic" 
                  label="Email" 
                  variant="outlined"  
                  type="email"
                  color="success"
                  sx={{ input: { color: 'black' } }}
                  value={emailLogin}
                  onChange={(e) => {setEmailLogin(e.target.value)}}
                />
                <TextField 
                  margin="normal"
                  required
                  fullWidth
                  id="outlined-basic" 
                  label="Password" 
                  variant="outlined"  
                  type="password"
                  color="success"
                  value={passLogin}
                  sx={{ input: { color: 'black' } }}
                  onChange={(e) => {setPassLogin(e.target.value)}}
                />
                 <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </form>
        </div>
        <Typography component="subtitle1" variant="div">
        Don't have an account? <Link to="/signup" exact="true" style={{color :"red"}}> SignUp </Link> 
        </Typography>
        </Box>
        </Paper>
    </Container>
    
  )
}

export default LoginMain