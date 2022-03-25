import React, { useEffect, useState } from 'react'
import { Link} from "react-router-dom";
import {user_login_check} from './helper'
import { downloadInstantData } from './filehelp';
import { saveInstantData } from './profilecomp/helperProj';

const Navbar = () => {
    
    const [chkStatus,setChkStatus] = useState(false);
    const [onLogout,setOnLogout] = useState(false);

    const logoutFunc = () =>{
      localStorage.removeItem('codepen-clone-html');
      localStorage.removeItem('codepen-clone-css');
      localStorage.removeItem('codepen-clone-js');
      localStorage.removeItem('uniqueidval');
      localStorage.removeItem('token');
      setOnLogout(p =>!p)
    }
    
    const dataDownload = () =>{
      downloadInstantData()
    }
    const dataSave = () =>{
      saveInstantData("goodproj1")
    }


    useEffect(()=>{
      const getAuthCheck = async (userToken)=>{
        const userData =  await user_login_check(userToken,"authchk")
        if(userData.status==='ok'){
         setChkStatus(true);
        }
        else{
         setChkStatus(false);
        }
  
      }
      const userToken = localStorage.getItem('token');
      getAuthCheck(userToken)
    },[onLogout])


    return (
        <>
        <div style={{height:"6vh", backgroundColor:"lightgreen"}}>
          <Link to="/" exact="true"> 
             <span className='navbar_link_span'>Home</span> &nbsp;&nbsp;
          </Link>
          {chkStatus ?<Link to="/profile" exact="true">
             <span className='navbar_link_span'>Profile</span> &nbsp;&nbsp;
          </Link>:null}
          {chkStatus ?
             <span className='navbar_link_span' onClick={dataDownload} >Download &nbsp;&nbsp; </span> 
          :null}
          {chkStatus ?
             <span className='navbar_link_span' onClick={dataSave} >SAVE &nbsp;&nbsp; </span> 
          :null}
          {chkStatus ?<Link to="/editor" exact="true">
             <span className='navbar_link_span'>Editor</span> &nbsp;&nbsp;
          </Link>:null}
          {!chkStatus ?<Link to="/login" exact="true">
             <span className='navbar_link_spans'>Login</span> &nbsp;&nbsp;
           </Link>:null}
           {!chkStatus ? <Link to="/signup" exact="true"> 
             <span className='navbar_link_span'>Signup</span> &nbsp;&nbsp;
          </Link>:null}
          {chkStatus ?<Link to="/" exact="true">  
             <span className='navbar_link_span' onClick={logoutFunc}>Logout</span> &nbsp;&nbsp;
          </Link>:null} 
        </div> 
        </>
    )
}

export default Navbar
