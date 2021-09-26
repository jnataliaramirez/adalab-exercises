import Links from './Links'

import '../styles/Nav.css'



const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="header__ul">
        
        <Links nameClass="blog" hrefExt="Blog" openInNewTab={true}/>
        
        <Links nameClass="contact" hrefExt="Contacto" openInNewTab={false}/>

      </ul>
    </nav>
  );
};

export default Nav;
