import {useState} from 'react'
const AddTask = ({addtask}) => {

    const [addTask,setNewTask] = useState('');
    const [addDate,setNewDate] = useState('');
    const [addTime,setNewTime] = useState('');

    const onSubmit =(e)=>{
            e.preventDefault();
            if(!addTask){
                alert('enter task')
                return
            }

            addtask(addTask,addTime,addDate);
            setNewTime('');
            setNewDate('');
            setNewTask('');
            e.target.reset();
    }
    
    return (
        <form className='add-data' onSubmit={onSubmit}>
            <div>
           <label htmlFor='add-task'>enter task</label> 
           <input id='add-task' type='text' placeholder='task' onChange={(e) =>setNewTask(e.target.value)}/>
           </div>
           <div>
           <label htmlFor='add-date'>enter date</label> 
           <input id='add-date' type='date' onChange={(e) =>setNewDate(e.target.value)}/>
           </div>
           <div>
           <label htmlFor='add-time'>enter time</label> 
           <input id='add-time' type='time' onChange={(e) =>setNewTime(e.target.value)}/>
           </div>
           <div>
           
           <input id='save' value='submit' type='submit' className='button submit' />
           </div>
        </form>
    )
}

export default AddTask
