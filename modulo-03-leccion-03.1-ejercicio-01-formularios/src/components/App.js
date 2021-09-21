// Fichero src/components/App.js
import '../styles/App.scss';
import { useState } from 'react';


function App() {
  // Constante para cada checkbox a marcar
  const [patata, setPatata] = useState(false);
  const [huevo, setHuevo] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [macarron, setMacarron] = useState(false);
  const [nuez, setNuez] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  // Constante para imprimir en pantalla
  const [mensaje, setMensaje] = useState('¿Eres humano?');

  // Función manejadora para todos los checkbox
  const handleIngredients = ev => {
    let idValue = ev.currentTarget.id;
    let checked = ev.target.checked;

    if (idValue === 'patatas') {
      setPatata(checked);
      if (cebolla && huevo && !macarron && !nuez && !cerveza) {
        setMensaje('Eres una persona concebollista');
      } else {
        setMensaje('Eres un robot sin paladar');
      }

    } else if (idValue === 'macarrones') {
      setMacarron(checked);
      if (cebolla && huevo && patata) {
        setMensaje('Eres un robot sin paladar');
      } else {
        setMensaje('Eres un robot sin paladar');
      }

    } else if (idValue === 'nueces') {
      setNuez(checked);
      if (cebolla && huevo && patata) {
        setMensaje('Eres un robot sin paladar');
      }

    } else if (idValue === 'huevos') {
      setHuevo(checked);
      if (cebolla && patata && !macarron && !nuez && !cerveza) {
        setMensaje('Eres una persona concebollista');
      } else {
        setMensaje('Eres un robot sin paladar');
      }

    } else if (idValue === 'cebollas') {
      setCebolla(checked);
      if (patata && huevo && !macarron && !nuez && !cerveza) {
        setMensaje('Eres una persona concebollista');
      } else {
        setMensaje('Eres un robot sin paladar');
      }

    } else if (idValue === 'cervezas') {
      setCerveza(checked);
      if (cebolla && huevo && patata) {
        setMensaje('Eres un robot sin paladar');
      }
    }

  }


  return (
    <>
      <h2>Selecciona los ingredientes de la tortilla de patatas</h2>
      <form>

        <div>
          <label htmlFor="macarrones">Macarrones</label>
          <input type="checkbox" name="macarrones" id="macarrones" checked={macarron} onChange={handleIngredients} />
        </div>


        <div>
          <label htmlFor="patatas">Patatas</label>
          <input type="checkbox" name="patatas" id="patatas" checked={patata} onChange={handleIngredients} />
        </div>


        <div>
          <label htmlFor="nueces">Nueces</label>
          <input type="checkbox" name="nueces" id="nueces" checked={nuez} onChange={handleIngredients} />
        </div>


        <div>
          <label htmlFor="huevos">Huevos</label>
          <input type="checkbox" name="huevos" id="huevos" checked={huevo} onChange={handleIngredients} />
        </div>


        <div>
          <label htmlFor="cebolla">Cebolla</label>
          <input type="checkbox" name="cebolla" id="cebollas" checked={cebolla} onChange={handleIngredients} />
        </div>


        <div>
          <label htmlFor="cerveza">Cerveza</label>
          <input type="checkbox" name="cerveza" id="cervezas" checked={cerveza} onChange={handleIngredients} />
        </div>

      </form>

      <p>{mensaje}</p>
    </>
  );
}

export default App;