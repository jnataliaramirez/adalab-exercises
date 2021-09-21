// Fichero src/components/App.js
import '../styles/App.scss';
import { useState } from 'react'

function App() {
  // Array y estados
  // Variables de estado
  const [tasks, setTasks] = useState( [ 
    { task: 'Comprar harina, jamón y pan rallado', completed: true, id:'235' },
    { task: 'Hacer croquetas ricas', completed: true, id:'355' },
    { task: 'Ir a la puerta de un gimnasio', completed: false, id:'223' },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false, id:'674' }
  ]);
   // Filtrado por nombre
   const [searchTasks, setSearchTasks] = useState('');
   const [tasksCompleted, setTasksCompleted] = useState(false);

   const handleSearch = ev => {
     setSearchTasks(ev.target.value);
   }
 
  const handleSearchCompleted = ev => {
    setTasksCompleted(ev.target.completed)
  }

  // Funciones manejadoras :P 
  function handleFav(ev) {
    // Buscar la tarea clickada 
    const findTask = tasks.find(task => ev.currentTarget.id == task.id) 
    // Cambiar el estado de true a false y viceversa
    findTask.completed = !findTask.completed;
    // Guardar la serie en el estado
    setTasks([...tasks])
  }

  const renderTasks = () => {
    return (
    tasks
    // Filtro por tarea
      .filter((task) => {
        return task.task.toLocaleLowerCase().includes(searchTasks.toLowerCase());
      })
    // Filtro por completado
      .filter((task) => {
        if (task.completed === true) {
          return task.completed === true; 
        } else {
          return true
        }
      })
      .map((task) => {
        if (task.completed) {
          return ( <li key={task.id} className="li_done"id={task.id} completed={task.completed} onClick={handleFav} >{task.task}</li> );
        } else {
          return <li key={task.id} id={task.id} completed={task.completed} onClick={handleFav} >{task.task}</li> 
        }
    })
    )}

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>
        {renderTasks()}
      </ol>
      <input type="text" name="tasks" id="tasks" onChange={handleSearch}/>
    </div>
  );
}

export default App;