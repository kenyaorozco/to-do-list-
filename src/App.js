import './App.css';
import {useState} from 'react'
import ToDoForm from './component/ToDoForm';
import DisplayList from './component/DisplayList';

function App() {

  const [list,setList] = useState([
  "Clean the house","Do the Laundry","Pick up groceries"])

// Updating the status of the entry 
  const updateList = (li,entry) =>{
    const entryUpdate = [...list];
    entryUpdate[entry].staus = !entryUpdate[entry].status;
    setList(entryUpdate)
  }

// Creating a function to delete list
  const deleteEntry = (li,entry) => {
    const filterList = list.filter((l,listNum) => {
      if( entry === listNum){
        return false
      }else{
        return true
      }
    })
    setList(filterList)
  } 
// calling our old function that holds our list that our form is using and the const that was created in our function and get them to work together

  return (
    <div className="App">
      <ToDoForm 
      list ={list} 
      setList ={setList}/>
      <DisplayList 
      list ={list}
      deleteEntry= {deleteEntry}
      updateList = {updateList}
      />
      
    </div>
  );
}

export default App;
