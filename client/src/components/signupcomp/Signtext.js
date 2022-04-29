import React from 'react'
import TextField from '@mui/material/TextField';

const Signtext = ({tlabel,ttype,tvalue,tfunc}) => {
  return (
    <TextField 
    margin="none"
    required
    fullWidth
    size='small'
    id="outlined-basic" 
    label={tlabel} 
    variant="outlined"  
    type={ttype}
    color="success"
    sx={{ input: { color: 'black' }, marginTop: '10px',marginBottom:'10px' }}
    value={tvalue}
    onChange={(e) => {tfunc(e.target.value)}}
  />
  )
}

export default Signtext