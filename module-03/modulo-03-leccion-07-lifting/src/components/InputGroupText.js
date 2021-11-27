function InputGroupText(props) {

  const handleInput = (ev) => {
    props.handleChange(ev.target.value);
  };

  return (
    <div className="input-group-text">
    <label 
    className="label-text" 
    htmlFor={props.htmlFor}>
      Escribe un {props.labelInput}:
    </label>
    <input
      className="input-text"
      type={props.inputType}
      name={props.inputName}
      id={props.inputId}
      placeholder={props.inputPlaceholder}
      value={props.inputValue}
      onChange={handleInput}
    />
  </div>
  );
}

export default InputGroupText;
