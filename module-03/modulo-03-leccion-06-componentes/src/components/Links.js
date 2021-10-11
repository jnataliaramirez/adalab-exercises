import '../styles/Links.css'

const Links = (props) => {

  const openNewWindow = (openInNewTab) => {
    if (openInNewTab) {
      return "_blank"
    } else {
      return ""
    }
  }

  return (
    <li className={`header__li-${props.nameClass}`}>
      <a
        className="header__a"
        href={`https://adalab.es/${props.hrefExt}/`}
        target={openNewWindow(props.openInNewTab)}
        title={`Ir al ${props.hrefExt} de Adalab - Web Oficial`}
      >
        {props.hrefExt}
      </a>
    </li>
  );
};

export default Links;