import Link from 'next/link';
import './header.scss';


function Header() {
  return (
    <header className='header'>
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
    </header>
)};

export default Header;