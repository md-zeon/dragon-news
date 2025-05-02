import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-sm' src={logo} alt="logo" />
            <h2>Journalism without Fear or Favour</h2>
        </div>
    );
};

export default Header;