import React from 'react';

const NavbarComponents = (props) => {
  return <>
    <nav className="navbar_nav_main">
      <ul className="navbar_nav_ul">{props.children}</ul>
    </nav>
  </>;
};

export default NavbarComponents;
