// Fichero src/components/App.js
import '../styles/App.scss';
import { useEffect, useState } from 'react'
import ls from '../services/localStorage';
// import data from './data.js'

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
  ]);

  // Se crea un clon de tasks, ya que los datos son guardados y 
  // manipulados para despues poder tomarlos del localStorage
  const [cloneTasks, setCloneTasks] = useState(ls.get('tasks', ''))

  // Permite añadir info a localStorage, 
  // se crea un clon de tasks que se puede guardar con useState en lS, 
  // ya que el original no se puede modificar porque esta fijo
  useEffect(() => {
    ls.set('tasks', cloneTasks)
  }, [cloneTasks]);

  // Funciones manejadoras :P 
  function handleFav(ev) {
    // Buscar la tarea clickada 
    const findTask = tasks.find(task => ev.currentTarget.id == task.id) 
    // Cambiar el estado de true a false y viceversa
    findTask.completed = !findTask.completed;
    // Guardar la serie en el estado (temporal/Mientras la sesión)
    setTasks([...tasks])
    // Añadir a variable usestate para localStorage
    setCloneTasks([...tasks])
  }


  const renderTasks = () => {
    // Se renderiza con cloneTasks, ya que es la que esta guardando la info en lS, 
    // recuerda: que en este ejercicio tasks solo se esta guardando de manera temporal. 
    return cloneTasks.map((cloneTask) => {
      if (cloneTask.completed) {
        return ( 
        <li 
        key={cloneTask.id} 
        className="li_done"id={cloneTask.id} 
        onClick={handleFav} 
        >{cloneTask.task}</li> );
      } else {
        return <li 
        key={cloneTask.id} 
        id={cloneTask.id} 
        onClick={handleFav} 
        >{cloneTask.task}</li> 
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