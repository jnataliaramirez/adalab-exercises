import Logo from './Logo'
import Nav from './Nav'

import '../styles/Header.css';


const Header = () => {
  return (
    <header className="header">

      <Logo />
      
      <Nav />

    </header>
  );
};

export default Header;
