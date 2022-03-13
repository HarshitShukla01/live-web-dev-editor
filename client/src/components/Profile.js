import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {user_login_check} from './helper'

const Profile = () => {

    const Navigate = useNavigate();
    const [productVal,setProductVal] = useState('')

    const productUpdate = (userProduct) =>{
        if(!userProduct) setProductVal("No Element Present");
        else setProductVal(userProduct);
    }

    useEffect(() =>{
     
      const getAuthCheck = async (userToken) =>{
        const userData =  await user_login_check(userToken,"product")
    
        if(userData.status==='ok'){
          productUpdate(userData.product); 
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
      <h1>{productVal}</h1>
    </>;
  };
  
export default Profile;