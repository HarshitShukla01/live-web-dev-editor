import React, { useState, useEffect, useRef } from 'react';
import DropdownItem from './DropdownItem';
import { ReactComponent as LogoutIcon } from './icons/logout.svg';
import { ReactComponent as DownloadIcon } from './icons/download.svg';
import { ReactComponent as SaveIcon } from './icons/save.svg';
import { ReactComponent as LoginIcon } from './icons/login.svg';
import { ReactComponent as SignupIcon } from './icons/signup.svg';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const DropdownMenu = ({dataDownload,dataSave,logoutFunc,chkStatus}) => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    const activeMenuFunc = (menuVal) =>{
        setActiveMenu(menuVal)
    }
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
return (
<div className="navbar_dropdown_main_div" style={{ height: menuHeight }} ref={dropdownRef}>

  <CSSTransition
    in={activeMenu === 'main'}
    timeout={500}
    classNames="navbar_dropdown_menu-primary"
    unmountOnExit
    onEnter={calcHeight}>

      <div className="navbar_dropdown_menu">
      {chkStatus ? (<>
        <DropdownItem leftIcon={<DownloadIcon />}>
          <span onClick={dataDownload}>Download</span>
        </DropdownItem>
        <DropdownItem leftIcon={<SaveIcon />}>
          <span onClick={dataSave}>Save</span>
        </DropdownItem>
        <Link to="/" exact="true"> 
          <DropdownItem leftIcon={<LogoutIcon/>}>
            <span onClick={logoutFunc}>Logout</span>
          </DropdownItem>
        </Link>
      </>):null}
      {!chkStatus ? (<>
        <Link to="/login" exact="true"> 
          <DropdownItem leftIcon={<LoginIcon />}>Login</DropdownItem>
        </Link>
        <Link to="/signup" exact="true"> 
          <DropdownItem leftIcon={<SignupIcon />}>Signup</DropdownItem> 
        </Link>
      </>):null}
      </div>
  </CSSTransition>

 

 
</div>
);
};

export default DropdownMenu;
