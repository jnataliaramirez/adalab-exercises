import "../styles/App.scss";
import data from "./data.json";
import { useEffect, useState } from "react";
import ls from "../services/localStorage"

function App() {
  // * Variables
  // Variable para que traer la info de data.json o de localStorage
  const [people, setPeople] = useState(ls.get('contact', data));
  // Variable para filtrar por nombres
  const [search, setSearch] = useState("");
  // Variable para añadir nuevos contactos
  const [newPeople, setNewPeople] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  // * Funciones manejadoras
  // Funcion para traer el value de filtro
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  // Funcion para añadir nuevo contacto
  const handleSubmitContact = (ev) => {
    ev.preventDefault();
    // Sirve para añadir nueva información al array original
    setPeople([...people, newPeople]);

    setNewPeople({
      name: "",
      lastname: "",
      phone: "",
      email: "",
    })

  }

  // Funcion para escuchar nuevo contacto, por parametros
  const handleAddContact = (ev) => {
    let clickID = ev.currentTarget.id;
    let clickValue = ev.currentTarget.value;

    if (clickID === "name") {
      setNewPeople({
        ...newPeople,
        name: clickValue,
      });
    } else if (clickID === "lastname") {
      setNewPeople({
        ...newPeople,
        lastname: clickValue,
      });
    } else if (clickID === "phone") {
      setNewPeople({
        ...newPeople,
        phone: clickValue,
      });
    } else if (clickID === "email") {
      setNewPeople({
        ...newPeople,
        email: clickValue,
      });
    }

    // Codigo más optimo
    // setNewPeople( {
    //   ...newPeople,
    //   [clickID]: clickValue
    // } )
  };

  // * Funciones render
  // Funcion para pintar las tarjetas
  const renderData = () => {
    return (
      people
        // Filtro para la busqueda de personas
        .filter((person) => {
          return (
            person.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            person.lastname
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          );
        })
        // Map para el pintado del html
        .map((person, index) => {
          return (
            <li key={index} className="contact__item">
              <p className="contact__name">
                <label className="contact__label">Nombre:</label>
                <span> {` ${person.name} ${person.lastname}`} </span>
              </p>

              <p className="contact__phone">
                <a
                  href={`tel: ${person.phone}`}
                  title={`Pulsa aquí para llamar a ${person.name}`}
                >
                  <label className="contact__label">Teléfono:</label>
                  {person.phone}
                </a>
              </p>

              <p className="contact__mail">
                <a
                  href={`mailto:${person.email}`}
                  title={`Pulsa aquí para escribirle a ${person.name}`}
                >
                  <label className="contact__label">Email:</label>
                  {person.email}
                </a>
              </p>
            </li>
          );
        })
    );
  };

  // * Local Storage
  // Obtener informacion de local Storage
  // Se hace desde la info que traemos de data.json
  // linea 9

  // Guardar información en local Storage
  useEffect(() => {
    ls.set('contact', people)
  }, [people] );

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={handleSearch}
            value={search}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{renderData()}</ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={newPeople.name}
            onChange={handleAddContact}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            value={newPeople.lastname}
            onChange={handleAddContact}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            value={newPeople.phone}
            onChange={handleAddContact}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={newPeople.email}
            onChange={handleAddContact}
          />
          <input className="new-contact__btn" type="submit" value="Añadir" onClick={handleSubmitContact} />
        </form>
      </main>
    </div>
  );
}

export default App;
