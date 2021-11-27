// ! Ejercicio 1 - El contador

// Importar useState desde React
import { useState } from 'react';
// Fichero src/components/App.js
import '../styles/App.scss';

function App() {
  const [contador, setContador] = useState(0);
  
  let countClick = parseInt(0); 

  // Funciones manejadoras
  const handleContador = () => {
    countClick = contador + 1;
    setContador(countClick)
  }
  const handleDecrementar = () => {
    countClick = contador - 1;
    setContador(countClick)
  }
  const handleReset = () => {
    countClick = parseInt(0);
    setContador(countClick)
  }

  // HTML
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleContador} >Añadir 1</button>
      <button onClick={handleDecrementar}>Quitar 1</button>
      <button type="reset" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

// ! Ejercicio 2 - Dark mode
 // Fichero src/components/App.js
//  import '../styles/App.scss';

//  function App() {
//    return (
//      <div>
//        <h1>Hola 🌍</h1>
//      </div>
//    );
//  }

//  export default App;