import React from 'react'

const DisplayList = (props) => {
    return (
        <fieldset>
            <div>DisplayList</div>
            {props.list.map((toDo,num) =>{
                return<div key = {num}>
                    <p >{toDo}</p>
                    <input type = "checkbox"
                    checked= {toDo.status}
                    onChange={(li) => props.updateEntry(li,num)}/>
                    <button onClick={(li) => {props.deleteEntry(li,num)}}>Delete</button>

            </div> 

            })}
        </fieldset>
    )
}

export default DisplayList