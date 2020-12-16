import React from 'react'

const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Cutco </div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
);

function Header () {
    return (
        <div>
            <NavBar/>
        </div>
    );
}

export default Header;