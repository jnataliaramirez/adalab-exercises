// Fichero src/components/App.js
import '../styles/App.scss';
import { useEffect, useState } from 'react'
import ls from '../services/localStorage';


function App() {
  
  const [tasks, setTasks] = useState([
  { task: "Comprar harina, jamón y pan rallado", completed: true, id: "235" },
  { task: "Hacer croquetas ricas", completed: true, id: "355" },
  { task: "Ir a la puerta de un gimnasio", completed: false, id: "223" },
  {
    task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
    completed: false,
    id: "674",
  },
  ])

  // Estados
  // Explicación Miguel :)
  // En vez de leer la propiedad name leemos la propiedad data y su valor por defecto es un objeto vacío: ls.get('data', {})
  // Del objeto (vacío o relleno que nos devuelve ls.get) obtenemos la propiedad name: ls.get('data', {}).name
  // Si la propiedad name existe la usamos, si no, usamos un string vacío: ls.get('data', {}).name || ''

  const [lsTasks, setLsTasks] = useState(ls.get('tasks', '')

  // useEffect

  // Usamos useEffect para guardar los datos en el local storage
  useEffect(() => {
    // En vez de guardar el nombre por un lado y el email por otro
    // Guardamos en el local storage un objeto data con las propiedad name y email: { name: 'loquesea', email: 'loquefuere' }
    ls.set('tasks', {
      task: lsTasks, 
    });
  }, [lsTasks]);

  // Funciones manejadoras :P 
  function handleFav(ev) {
    // Buscar la tarea clickada 
    const findTask = tasks.find(task => ev.currentTarget.id == task.id) 
    // Cambiar el estado de true a false y viceversa
    findTask.completed = !findTask.completed;
    // Guardar la serie en el estado
    setTasks([...tasks])
    // Añadir a localStorage
    setLsTasks({...findTask})
  }


  const renderTasks = () => {
    return tasks.map((task) => {
      if (task.completed) {
        return ( 
        <li 
        key={task.id} 
        className="li_done"id={task.id} 
        onClick={handleFav} 
        >{task.task}</li> );
      } else {
        return <li 
        key={task.id} 
        id={task.id} 
        onClick={handleFav} 
        >{task.task}</li> 
      }
    })
  }

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>
        {renderTasks()}
      </ol>
    </div>
  );
}

export default App;