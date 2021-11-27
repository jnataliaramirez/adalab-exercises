function Button(props) {

  const handleChange = ev => {
    props.handleChange(ev);
  }

  return (
    <button 
    className={`button ${props.class}`}  
    onClick={handleChange}
    disabled={props.disabled}
    >
    {props.text}
    </button>
  );
}

export default Button;
