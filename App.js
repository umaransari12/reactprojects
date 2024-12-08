// import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TdoList';
import React ,{ useState } from 'react';

function App() {
const [listTodo, setListTodo] = useState([]);

let addList = (inputText) =>{
  if(inputText!=="")
  setListTodo([...listTodo, inputText]);
}
const deleteListItem = (key) =>{
  let newListTodo = [...listTodo];
  newListTodo.splice(key, 1)
  setListTodo([...newListTodo])
}

  return (
    <div>
    <h1 className="app-heading">TODOLIST</h1>
    <div className="main-container">
      <div className="center-container">
      <TodoInput addList={addList}/>
      
        <hr/>
        {listTodo.map((listItem, i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          )
        })}

      </div>
      
    </div>
    </div>
  );
}

export default App;
