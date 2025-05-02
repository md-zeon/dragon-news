import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-sm' src={logo} alt="logo" />
            <h4 className='text-accent'>Journalism without Fear or Favour</h4>
            <h3 className='text-accent font-semibold'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</h3>

        </div>
    );
};

export default Header;