import{ FaTrashAlt} from 'react-icons/fa';

const Task = ({task , onDelete , onComplete}) => {
    
    return (
        <div className='task'>
           

            <input type="checkbox" id={task.id} className='check' checked={task.complete ? true:false} onChange ={() =>onComplete(task.id)}/>
            <label htmlFor={task.id} className='check-label'></label>

            <div style={task.complete ? {textDecoration: 'line-through' , color:'red' } : {}}>
                <h3>{task.text}</h3>
                <h3>{task.date} ,{task.time}</h3>
            </div>
            
            <FaTrashAlt style={{fontSize:'2em'}} onClick={() => onDelete(task.id)}/>
            
        
        </div>
    )
}

export default Task
