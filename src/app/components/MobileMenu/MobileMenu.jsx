import { useState } from 'react';
import Link from 'next/link';
import './MobileMenu.scss';

export const MobileMenu = ({ menuToggler }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('home');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className={`mobileMenu ${menuToggler ? 'open':''}`}>
      <ul className={`${menuToggler ? 'open':''}`}>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
      </ul>
    </div>
  )
}