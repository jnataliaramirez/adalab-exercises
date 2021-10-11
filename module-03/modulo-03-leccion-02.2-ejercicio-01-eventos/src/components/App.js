// Fichero src/components/App.js
import '../styles/App.scss';

function App() {
  // ** Crear funciones manejadoras
  // * Crear funcion para el formulario, para prevenir el evento de enviar. 
  const handleSubmit = e => e.preventDefault();
  
  // * Crear funcion para escuchar el input
  const handleInput = (e) => {
    // * Entrar al evento y tomar su valor key, el cual es el que nos devuelve la última letra.
    console.log(e.key);
  }

  return (
    <div className="root">
      <form onSubmit={handleSubmit} /* Form le ponemos el listener de preventDefault, con un event onSubmit */>
        <input type="text" name="text" id="text" onKeyUp={handleInput} />
        <label htmlFor="text"></label>
      </form>
    </div>
  );
}

export default App;

