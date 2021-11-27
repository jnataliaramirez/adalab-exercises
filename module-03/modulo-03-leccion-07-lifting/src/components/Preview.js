function Preview(props) {
  return (
    <div className="preview">
    <h2>Tus datos son:</h2>
    <ul>
      <li>Nombre: {props.name}</li>
      <li>Email: {props.email}</li>
      <li>Región: {props.region}</li>
      <li>Método de pago: {props.paymentType}</li>
      <li>Has aceptado nuestros términos legales: {props.legalTerms}</li>
    </ul>
    </div>
  );
};

export default Preview;
