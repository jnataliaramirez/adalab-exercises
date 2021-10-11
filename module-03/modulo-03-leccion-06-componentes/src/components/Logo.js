import logoAdalab from '../images/imgLogoAdalab.png'

import '../styles/Logo.css'


const Logo = () => {
  return (
    <a href="https://adalab.es/">
    <img
      src={logoAdalab}
      alt="Logo de Adalab"
      className="header__logo"
      title="Ir a Adalab - Web Oficial"
    />
  </a>
  )
}

export default Logo;
