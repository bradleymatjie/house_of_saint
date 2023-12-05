import Link from 'next/link';
import './header.scss';

interface HeaderProps {
  menuTogglerFunction: React.Dispatch<React.SetStateAction<boolean>>;
  menuTogglerValue: boolean;
}

function Header({ menuTogglerFunction, menuTogglerValue }: HeaderProps) {
  return (
    <header className='header'>
      <div>
        <h2 className='logo'>HOUSE OF SAINT</h2>
      </div>
      <nav>
        <ul className='header-navItems'>
          <li>
            <Link href='/'>Home</Link>
          </li>

          <li id='loginDesktop'>
            <Link href='/auth/login'>Sign In</Link>
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
)};

export default Header;