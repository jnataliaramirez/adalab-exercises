function InputGroupRadio(props) {

  const handleChange = ev => {
    props.handleChange(ev.target.value);
  }

  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor={props.value}>
        {props.labelText}
      </label>

      <input
        type="radio"
        name="paymentType"
        id={props.inputId}
        value={props.value}
        checked={props.checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputGroupRadio;
