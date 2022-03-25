import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {user_login_check} from './helper'
import ListProject from './profilecomp/ListProject';
import {Grid} from '@mui/material';
import ProfileInfo from './profilecomp/ProfileInfo';

const Profile = () => {

    const Navigate = useNavigate();
    const [profileName,setProfileName] = useState('')
    const [uniqueid,setUniqueid] = useState('')

    const profileUpdate = (userName,userUniqueid) =>{
        if(!userName) setProfileName("No Element Present");
        else setProfileName(userName);

        if(!userUniqueid) setUniqueid("No Element Present");
        else setUniqueid(userUniqueid);
    }

    useEffect(() =>{
     
      const getAuthCheck = async (userToken) =>{
        const userData =  await user_login_check(userToken,"profile")
    
        if(userData.status==='ok'){
          localStorage.setItem('uniqueidval',userData.uniqueid);
          profileUpdate(userData.filename,userData.uniqueid); 
        }
        else{
          Navigate('/login');
          alert("Authentication Invalid")
        }
      }
      const userToken = localStorage.getItem('token');
      getAuthCheck(userToken)
      
    },[])
  
    return <>
   <div className="proflie_Class"></div>
    <Grid container spacing={2} >
      <Grid item xs={12} md={6}>
        <ProfileInfo profileName={profileName} uniqueid={uniqueid}/>
      </Grid>
      <Grid item xs={12} md={6}>
        <ListProject uniqueid={uniqueid}/>
      </Grid>
    </Grid>
    
    </>;
  };
  
export default Profile;