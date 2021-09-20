// Fichero src/components/App.js
import '../styles/App.scss';
import { useState } from 'react';


function App() {
  // Constante para cada checkbox a marcar
  const [patata, setPatata] = useState(false);
  const [huevo, setHuevo] = useState(false);
  const [cebolla, setCebolla] = useState(false);

  // Constante para imprimir en pantalla
  const [mensaje, setMensaje] = useState('¿Eres humano?');


  // Función manejadora para cada checkbox a marcar
  const handlePatatas = ev => {
    setPatata(ev.target.checked);
    if (huevo === true && cebolla === true) {
      setMensaje('Eres una persona concebollista'); 
    } 
  }
  const handleHuevos = ev => {
    setHuevo(ev.target.checked);
    if (patata === true && cebolla === true) {
      setMensaje('Eres una persona concebollista'); 
    }
  }
  const handleCebollas = ev => {
    setCebolla(ev.target.checked);
    if (patata === true && huevo === true) {
      setMensaje('Eres una persona concebollista'); 

    }
  }

  const handleOtros = () => {
      setMensaje('Eres un robot sin paladar')
  }

  return (
    <>
      <h2>Selecciona los ingredientes de la tortilla de patatas</h2>
      <form>

        <div>
          <label htmlFor="macarrones">Macarrones</label>
          <input type="checkbox" name="macarrones" id="macarrones" onChange={handleOtros} />
        </div>


        <div>
          <label htmlFor="patatas">Patatas</label>
          <input type="checkbox" name="patatas" id="patatas" onChange={handlePatatas} />
        </div>


        <div>
          <label htmlFor="nueces">Nueces</label>
          <input type="checkbox" name="nueces" id="nueces" onChange={handleOtros}/>
        </div>


        <div>
          <label htmlFor="huevos">Huevos</label>
          <input type="checkbox" name="huevos" id="huevos" onChange={handleHuevos} />
        </div>


        <div>
          <label htmlFor="cebolla">Cebolla</label>
          <input type="checkbox" name="cebolla" id="cebolla" onChange={handleCebollas} />
        </div>


        <div>
          <label htmlFor="cerveza">Cerveza</label>
          <input type="checkbox" name="cerveza" id="cerveza" onChange={handleOtros}/>
        </div>

      </form>

    <p>{mensaje}</p>
    </>
  );
}

export default App;