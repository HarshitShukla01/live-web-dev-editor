import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {user_login_func,user_login_check} from './helper'
import LoginMain from './logincomp/LoginMain'

const Login = () => {
    const Navigate = useNavigate();
    const [emailLogin,setEmailLogin] = useState('');
    const [passLogin,setPassLogin] = useState('');
   
    const loginUser = async(e) =>{
        e.preventDefault();
        const userData =await user_login_func(emailLogin,passLogin);
    
        if(userData.user){
            localStorage.setItem('token',userData.user)
            alert("Login successful");
            window.location.href="/profile"
        }
        else{
            alert("Email or Password is wrong");
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
        <LoginMain 
            loginUser={loginUser}
            setEmailLogin={setEmailLogin}
            setPassLogin={setPassLogin}
            emailLogin={emailLogin}
            passLogin={passLogin}
        />
       
    )
}

export default Login

 /* <div>
            
            <h1>Login</h1>
            <form onSubmit={loginUser}>
             <input type="email" value={emailLogin} placeholder='Email' 
                onChange={(e) => {setEmailLogin(e.target.value)}}/>
                <br/><br/>
             <input type="password" value={passLogin} placeholder='Password' 
                onChange={(e) => {setPassLogin(e.target.value)}}/>
                <br/><br/>
             <input type="Submit" value="Signin"/>
            </form>
        </div> */
