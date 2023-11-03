import { memo, ReactNode, useState } from 'react';
import Link from 'next/link';
// import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo.png';

interface HeaderProps {
  menuTogglerFunction: React.Dispatch<React.SetStateAction<boolean>>;
  menuTogglerValue: boolean;
}

export const Header: React.FC<HeaderProps> = memo(({ menuTogglerFunction, menuTogglerValue }) => {
  return (
    <header className='header'>
      <div>
        <h2>Perspective Pulse</h2>
      </div>

      <nav>
        <ul className='header-navItems'>
          <li>
            <Link href='/blog/'>Home</Link>
          </li>

          <li>
            <Link href='/blog/posts'>Blog</Link>
          </li>

          <li id='loginDesktop'>
            <Link href='/blog/login'>Sign In</Link>
          </li>
        </ul>
      </nav>

      <div
        className={`toggle ${menuTogglerValue ? "toggled" : ""}`}
        onClick={() => {
          menuTogglerFunction((state: boolean) => !state);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
});
