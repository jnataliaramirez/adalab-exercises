// Fichero src/components/App.js
import '../styles/App.scss';

function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: false },
    { task: 'Ir a la puerta de un gimnasio', completed: true },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      if (task.completed) {
        return ( <li key={index} className="li_done" >{task.task}</li> );
      } else {
        return <li key={index}>{task.task}</li> 
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