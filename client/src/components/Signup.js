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

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    
    const validatePassword = (password) => {
      return password.match(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
   };

    const chkEmailVerfivcation = () => {
         if(emailField.length > 0){
            const c_valid_email = validateEmail(emailField);
            if(c_valid_email) return true;
            alert('Please enter valid email like "abc@def.xyz"');
            return false;
         }
         return false;
    }
   
    const chkPasswordVerfivcation = () => { 
         if(passField.length > 0){           
            const c_valid_pass = validatePassword(passField);
            if(c_valid_pass) return true;
            alert('Please enter valid password ,\nit must contain \n8 characters,\none uppercase , \none lowercase ,\none number and \none special character ');
         }
    }

    const chkConfirmPasswordVerfivcation = () => { 
         if(conPassField.length > 0 && passField.length > 0 && conPassField === passField){
            return true;
         }
         // alert('Password and Confirm Password does not match');
         return false;
      }

   const registerUserWithMail = async () =>{
      const userData = await user_register_func(nameField,emailField,passField);

       if(userData.status === 'ok'){
            alert('Registeration Successfully');
            Navigate('/login');
       }
   }


    const registerUser = (e) =>{
      e.preventDefault();

      const email_chk = chkEmailVerfivcation();
      const pass_chk = chkPasswordVerfivcation();
      const con_pass_chk = chkConfirmPasswordVerfivcation();
       
      if(email_chk && pass_chk && con_pass_chk){
         registerUserWithMail();
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