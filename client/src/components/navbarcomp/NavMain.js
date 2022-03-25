import React from 'react'

const NavMain = ({dataDownload,dataSave,logoutFunc}) => {
  return (
    <>
      <div>
        <Link to="/profile" exact="true">
          <span className='navbar_link_span'>Profile</span> &nbsp;&nbsp;
        </Link>
        <span className='navbar_link_span' onClick={dataDownload} >Download &nbsp;&nbsp; </span>
        <span className='navbar_link_span' onClick={dataSave} >SAVE &nbsp;&nbsp; </span>
        <Link to="/editor" exact="true">
          <span className='navbar_link_span'>Editor</span> &nbsp;&nbsp;
        </Link>
        <Link to="/" exact="true">
          <span className='navbar_link_span' onClick={logoutFunc}>Logout</span> &nbsp;&nbsp;
        </Link>
      </div>
    </>
  )
}

export default NavMain