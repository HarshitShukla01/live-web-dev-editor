import './navbar_style.css';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ProfileIcon } from './icons/profile.svg';
import { ReactComponent as EditIcon2 } from './icons/edit2.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import React from 'react';
import {Link} from 'react-router-dom';
import NavbarComponents from './NavbarComponents';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function NavbarMenu({dataDownload,dataSave,logoutFunc,chkStatus}) {
  return (
    <NavbarComponents>
      <Tooltip title="Home">
        <Link to="/" exact="true"> <NavItem icon={<HomeIcon />} /> </Link>
      </Tooltip>
      {chkStatus ? (<>
        <Tooltip title="Profile">
          <Link to="/profile" exact="true">
            <NavItem icon={<ProfileIcon />} />
          </Link></Tooltip>
        <Tooltip title="Editor">
          <Link to="/editor" exact="true">
            <NavItem icon={<EditIcon2 />} />
          </Link>
        </Tooltip>
      </>):null}
      
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu 
          dataDownload={dataDownload}
          dataSave={dataSave}
          logoutFunc={logoutFunc}
          chkStatus={chkStatus} />
      </NavItem>
      
    </NavbarComponents>
  );
}



export default NavbarMenu;
