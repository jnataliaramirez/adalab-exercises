// Fichero src/components/App.js
import { useState } from 'react';

// Componentes
import Preview from './Preview'
import Form from './Form'

const App = () => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Iniciamos el componente con la primera opción del select
  const [region, setRegion] = useState('España peninsular'); 
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = value => {
    setName(value);
  };

  const handleEmail = value => {
    setEmail(value);
  };

  const handleRegion = ev => {
    setRegion(ev.target.value);
  };

  const handlePaymentType = ev => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = ev => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = ev => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  // Funciones que nos ayudan a renderizar
  const renderPaymentTypeText = () => {
    if (paymentType === 'creditCard') {
      return 'Tarjeta de crédito';
    } else if (paymentType === 'cash') {
      return 'Efectivo';
    } else if (paymentType === 'cashOnDelivery') {
      return 'Contra reembolso';
    }
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (name !== '' && email !== '' && paymentType !== '' && legalTerms === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      < Form
        inputValue={name}
        handleChange={handleName}

      />

      < Preview 
        name={name} 
        email={email}
        region={region}
        paymentType={renderPaymentTypeText()}
        legalTerms={legalTerms === true ? 'Sí' : 'No'}
        />
    </div>
  );
};

export default App;