function InputGroupCheck(props) {

  const handleCheck = ev => {
    props.handleChange(ev.target.checked);
  }

  return (
    <div className="input-group-checkbox">
      <label className="label-check" htmlFor="legalTerms">
        Debes aceptar nuestros términos legales para completar la compra:
      </label>
      {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
      <input
        type="checkbox"
        name="legalTerms"
        id="legalTerms"
        checked={props.legalTerms}
        onChange={handleCheck}
      />
    </div>
  );
}

export default InputGroupCheck;
