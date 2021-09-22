import '../styles/App.scss';
import callToApi from '../services/api';
// import ls from '../services/localStorage';
import { useEffect, useState } from 'react';

function App() {

  // Estados 
  const [moviesData, setMoviesData] = useState([]);
  const [searchData, setSearchData] = useState('');

  // Llamar al api con useEffect
  useEffect(() => {
    // Dentro de useEffect se llama al API 
    callToApi(searchData).then(response => {
      setMoviesData(response);
    });
  }, [searchData]);

  const handleSearch = (ev) => {
    setSearchData(ev.target.value)
  }

  
  console.log(moviesData)
  const renderSearch = () => {
    return (
      moviesData
        .map(movieData => {
          return (
            <li>
              <p>Su serie buscada es: {movieData.name}</p>
              <p>Esta en idioma: {movieData.language}</p>
            </li>
          )
        })
    )
  }

  return (
    <div>
      <h1>Buscador de series 📺 </h1>
      <form>
        <input type="text" onChange={handleSearch}/>
      </form>
      <ol>
        {renderSearch()}
      </ol>
    </div>
  );
}

export default App;