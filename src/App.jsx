import './App.css'
import { useState } from 'react'
import Todo from './Todo';

function App() {
  let [inputTask, setInputTask] = useState('');
  let [todolist, setTodolist] = useState([]);


  const addTask = () => {
    const nextID = todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1;

    console.log("next id : ", nextID);
    console.log("input Task Name: ", inputTask);

    todolist.push({ id: nextID, task: inputTask, complete: false });
    setTodolist([...todolist]);

    console.log("Todo List : ", todolist);

    setInputTask(''); // Clear the input after adding a task and it is set the value attribute
  }

  const removeTask = (id) => {
    console.log("Task Id : ", id);

    setTodolist(todolist.filter((current) => current.id !== id));
    console.log(todolist.filter((current) => current.id !== id));
  }

  const toggleComplete = (id) => {
    setTodolist((prevTasks) =>
      prevTasks.map((item) => item.id === id ? { ...item, complete: !item.complete } : item)
    );
    console.log(todolist);
  }

  return (
    <div className='w-1/3 mx-auto'>
      <section className='text-center '>
        <h1 className='text-3xl font-bold p-2'>List Your Daily Task</h1>
        <div className='bg-cyan-800 py-4'>
          <input onChange={(e) => setInputTask(e.target.value)} type="text" value={inputTask} placeholder='enter a task...' className="border border-slate-500 px-1 py-1 rounded-lg m-1" />
          <button onClick={addTask} className="px-2 py-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md m-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Add Task
          </button>
        </div>
        <div>
          {
            todolist.length !== 0 ? (
              todolist.map((item, index) => {
                return (
                  <Todo item={item} removeTask={removeTask} toggleComplete={toggleComplete} key={index}></Todo>
                );
              })
            ) : (<></>)
          }
        </div>
        
      </section>
      <hr />
      <hr />
      <label className=''>Your total task is : {todolist.length}</label>
    </div>
  )
}

export default App
