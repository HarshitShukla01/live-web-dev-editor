import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {user_login_check,user_register_func} from './helper'
import MainSignup from './signupcomp/MainSignup'

const Signup = () => {
    const Navigate = useNavigate();

    const [nameField,setNameField] = useState('');
    const [emailField,setEmailField] = useState('');
    const [passField,setPassField] = useState('');
    const [conPassField,setConPassField] = useState('');
    
    const registerUser = async (e) =>{
       e.preventDefault();
       const userData = await user_register_func(nameField,emailField,passField);

       if(userData.status === 'ok'){
            Navigate('/login');
       }
    }
    
    useEffect(() =>{
        const getAuthCheck = async (userToken)=>{
           const userData =  await user_login_check(userToken,"authchk")
           if(userData.status==='ok'){
            Navigate('/')
           }  
        }

        const userToken = localStorage.getItem('token');
        getAuthCheck(userToken)

      },[])
    return (
        <div>
        <MainSignup 
            nameField={nameField}
            emailField={emailField}
            passField={passField}
            conPassField={conPassField}
            setNameField={setNameField}
            setEmailField={setEmailField}
            setPassField={setPassField}
            setConPassField={setConPassField}
            registerUser={registerUser}
         />
         </div>
    )
}

export default Signup

/*
     <div>
            <h1>Signup</h1>
            <form onSubmit={registerUser}>
             <input type="text" value={nameField} placeholder='Name' 
                onChange={(e) => {setNameField(e.target.value)}}/>
             <br/><br/>
             <input type="email" value={emailField} placeholder='Email' 
                onChange={(e) => {setEmailField(e.target.value)}}/>
             <br/><br/>
             <input type="password" value={passField} placeholder='Password' 
                onChange={(e) => {setPassField(e.target.value)}}/>
             <br/><br/>
             <input type="password" value={conPassField} placeholder='Confirm Password' 
                onChange={(e) => {setConPassField(e.target.value)}}/>
             <br/><br/>
             <input type="Submit" value="Register" onChange={()=>{}}/>
            </form>
            
        </div>
*/