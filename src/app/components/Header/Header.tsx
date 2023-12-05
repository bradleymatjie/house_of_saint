import Link from 'next/link';
import './header.scss';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    className='header'
    >
      <div>
        <h2 className='logo'>HOUSE OF SAINT</h2>
      </div>
      <nav>
        <ul className='header-navItems'>
          <li id='loginDesktop'>
            <Link href='/auth/login'>Sign In</Link>
          </li>
        </ul>
      </nav>

      <Link href='/auth/login' className='toggle'>
        <i className="bi bi-person-circle"></i>
      </Link>
    </motion.header>
)};

export default Header;