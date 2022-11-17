import React, {useState} from 'react'

const ToDoForm = (props) => {

    const [addToList,setAddToList] = useState("")


    const newListAdd = (i) => {
        i.preventDefault();
        props.setList([...props.list,addToList])
    }

    return (
        <fieldset>
            <legend>To Do Form</legend>
        <form onSubmit={newListAdd}>
            <input type ="text" onChange={(i) => setAddToList(i.target.value)} />
            <button>Add</button>

        </form>
        </fieldset>

    )
}

export default ToDoForm