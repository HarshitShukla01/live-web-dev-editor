import React, { useEffect, useState } from 'react'
import {user_login_check} from './helper'
import { downloadInstantData } from './filehelp';
import { saveInstantData } from './profilecomp/helperProj';
import NavbarMenu from './navbarcomp/NavbarMenu';

const Navbar = ({setUserStatus}) => {
    
    const [chkStatus,setChkStatus] = useState(false);
    const [onLogout,setOnLogout] = useState(false);

    const logoutFunc = () =>{
      localStorage.removeItem('codepen-clone-html');
      localStorage.removeItem('codepen-clone-css');
      localStorage.removeItem('codepen-clone-js');
      localStorage.removeItem('uniqueidval');
      localStorage.removeItem('token');
      setUserStatus(false);
      setOnLogout(p =>!p)
    }
    
    const dataDownload = () =>{
      downloadInstantData()
    }
    const dataSave = () =>{
      let projectName = window.prompt("Enter project name", "Project Name");
      saveInstantData(projectName)
    }
    

    useEffect(()=>{
      const getAuthCheck = async (userToken)=>{
        const userData =  await user_login_check(userToken,"authchk")
        if(userData.status==='ok'){
         setChkStatus(true);
         setUserStatus(true);
        }
        else{
         setChkStatus(false);
         setUserStatus(false);
        }
  
      }
      const userToken = localStorage.getItem('token');
      getAuthCheck(userToken)
    },[onLogout])


    return (
        <>
        <NavbarMenu
                dataDownload={dataDownload} 
                dataSave={dataSave} 
                logoutFunc={logoutFunc} 
                chkStatus={chkStatus}
              />  
        </>
    )
}

export default Navbar
// export {StatusVariable}
