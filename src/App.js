import{useState} from 'react'
import Header from"./components/Header"
import AddTask from './components/AddTask'
import Tasks from"./components/Tasks"


function App() {
  const [tasks,setTask] = useState([
    {
      id:1,
      text:'write assignment',
      date:'2021-05-25',
      time:'14:15',
      complete:false
    },
    {
      id:2,
      text:'workout',
      date:'2021-05-27',
      time:'11:15',
      complete:true
    },
    {
      id:3,
      text:'write assignment',
      date:'2021-05-25',
      time:'13:15',
      complete:false
    }
  ]);

const deleteTask = (id) =>{
  setTask(tasks.filter((task)=>(id !== task.id)));
}

const completeTask =(id)=>{
  setTask(
    tasks.map(
    (task) => (
      task.id === id ? {...task,complete : !task.complete}:task)
    )
    )
}

const addNewTask = (text,time,date)=>{
      const newTask ={
        id:`${Math.floor(1000*Math.random()) + 2 }`,
        text:text,
        date:date,
        time:time,
        complete:false
      }

      setTask([...tasks,newTask])
}

const [showAddTask,setAddTask] = useState(false);

const showToAdd =()=>{
  setAddTask(!showAddTask);
  console.log(showAddTask)
}
  return (
    <div className="container">
      <Header showAddTask={showToAdd} show={showAddTask}/>
      {showAddTask && <AddTask addtask={addNewTask}/>}
     {tasks.length ?  <Tasks tasks={tasks} onDelete={deleteTask} onComplete={completeTask}/> : <div className='task' style={{textTransform:"uppercase"}}>nothing to do... </div>}
    </div>
  );
}

export default App;
