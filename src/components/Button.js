
const Button = ({text,show,showAddTask}) => {

    const style ={
        boxShadow:' 3px 3px 20px rgba(247, 3, 3, 0.5)',
        color:'red'
    }
    return (
        <input type='button' style={show ? style:{}} value={text} className='button' onClick={showAddTask}/>
    )
}

export default Button
