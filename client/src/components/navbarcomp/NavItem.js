import React, { useState} from 'react';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="navbar_item_li">
      <span href="#" className="navbar_gen_icon_btn" onClick={() => setOpen(!open)}>
        {props.icon}
      </span>

      {open && props.children}
    </li>
  );
};

export default NavItem;
