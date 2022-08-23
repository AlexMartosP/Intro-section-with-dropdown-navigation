import React from "react";
// Images
import closeIcon from '../../../images/icon-close-menu.svg';
import Navigation from "../navigation/Navigation";

const MobileMenu = ({ toggleMenu }) => {

    return (
        <div className="mobile-menu padding-400">
            <div className="text-align-right">
                <button className="mobile-nav-toggle" onClick={toggleMenu}>
                    <img src={closeIcon} alt="" />
                </button>
            </div>
            <Navigation />
            <div className="text-align-center">
                <div className="padding-block-400">
                    <button>Login</button>
                </div>
                <button className="button fullwidth" datatype='secondary'>Register</button>
            </div>
        </div>
    )
}

export default MobileMenu;