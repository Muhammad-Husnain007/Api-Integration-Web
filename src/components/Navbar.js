
import React, { useState, useEffect } from 'react';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Avatar from '@mui/material/Avatar';
import Profile from './Assests/profile.jpg';


const Navbar = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = isNavFixed ? 'navbar fixed' : 'navbar';

  return (
    <nav className={navbarClass}>
      <ul>
        <li className='icon'><ShoppingCartSharpIcon /></li>
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About</li>
        <li className='avatar'><Avatar><img src={Profile} alt="profile" /></Avatar></li>
      </ul>
    </nav>
  );
}

export default Navbar;
