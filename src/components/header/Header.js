import React, { useState } from 'react';
// Hooks
import useWindowSize from '../../hooks/useWindowSize';
// Components
import MobileMenu from './mobile-menu/Mobile-menu';
// Images
import logo from '../../images/logo.svg';
import toggleIcon from '../../images/icon-menu.svg';
import Navigation from './navigation/Navigation';

const Header = () => {
    const { width } = useWindowSize();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        if (open === false) {
            setOpen(true);
            document.body.dataset.menuOpen = 'true';
        } else {
            setOpen(false);
            document.body.dataset.menuOpen = 'false';
        }
    }

    return (
        <>
            {open && <div className="backdrop"></div>}
            <header className='padding-block-400'>
                <div className="container-lg">
                    <div className='nav-wrapper'>
                        <button><img src={logo} alt="" /></button>
                        {width <= 800 && (
                            <button className="mobile-nav-toggle" onClick={toggleMenu}>
                                <img src={toggleIcon} alt="" />
                            </button>
                        )}
                        {width >= 800 && (
                            <>
                                <Navigation />
                                <div>
                                    <button>Login</button>
                                    <button className="button margin-left-500" datatype='secondary'>Register</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {width <= 800 && open && <MobileMenu toggleMenu={toggleMenu} />}
            </header>
        </>
    )
}

export default Header;