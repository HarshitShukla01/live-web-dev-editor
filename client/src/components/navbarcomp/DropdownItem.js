import React from 'react';

const DropdownItem = (props) => {

return (
    <a href="#" className="navbar_dropdown_menu-item" onClick={() => props.goToMenu && props.activeMenuFunc(props.goToMenu)}>
        <span className="navbar_gen_icon_btn">{props.leftIcon}</span>
        {props.children}
        <span className="navbar_dropdown_item_icon_right">{props.rightIcon}</span>
    </a>
);
};

export default DropdownItem;
//navbar_gen_icon_btn