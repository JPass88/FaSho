import './App.css';
import Tasks from './components/Tasks';
import NewTaskForm from './components/NewTaskForm';
import SnackySmores from './components/SnackySmores';
import { useState, useEffect } from 'react';

function App() {

  const [ tasks, setTasks ] = useState([]);

  const setNewTask = (taskName, taskDetails) => {
      if (taskName === "") { 
        //fire snackbar (bad)
      }
      else {
        let t = [...tasks];
        t.push({
            name: taskName, 
            details: taskDetails
        });
        setTasks(t);
    }
  }

  const editTask = (i, newTaskName, newTaskDetails) => {
    let t = [...tasks];
    t[i] = {
      name:     newTaskName,
      details:  newTaskDetails
    };
    setTasks(t);
  }

  /*
    TODO: Improve deletion. Currently, pops last
          into first position 
  */
  const deleteTask = (i) => {
    let t = [...tasks];

    t[i] = t[t.length-1];
    t.pop();
    setTasks(t);
  }

  return (
    <div className="App">
      <NewTaskForm setTask={setNewTask} />
      <Tasks tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      {/* <SnackySmores>
            (Snackbar 
                red("Enter a task name."), 
                green("Name Changed")
            )
        <SnackySmores /> 
      */}
    </div>
  );
}

export default App;