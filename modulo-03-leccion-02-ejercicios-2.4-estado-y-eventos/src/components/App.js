// ! Ejercicio 1 - El contador

// Importar useState desde React
import { useState } from 'react';
// Fichero src/components/App.js
import '../styles/App.scss';

// Se inicializa la variable en 0
// para que sea sumada en el handler
let countClick = parseInt(0); 

function App() {
  const [contador, setContador] = useState(0);

  // Funciones manejadoras
  const handleContador = () => {
    countClick += 1;
    console.log(countClick);
  }
  const handleDecrementar = () => {
    countClick -= 1; 
    console.log(countClick);
  }
  const handleReset = () => {
    countClick = 0;
    console.log(countClick);
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