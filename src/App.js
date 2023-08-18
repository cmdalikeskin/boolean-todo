import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Go to gym', checked: true },
    { text: 'Drink coffee', checked: false },
    { text: 'test 3', checked: true },
    { text: 'test 4', checked: true },
    { text: 'test 5', checked: false },

  ])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    // TODO Add a new task to the tasks array
    // HINT: Spread the current tasks array into a new array, add this new task on there
    // then update the state of tasks
    const newObject = {
      text: event.target[0].value,
      checked: false
    }
    const taskObject = [...tasks, newObject]
    console.log(taskObject)
    event.target[0].value = ''

    setTasks(taskObject)
  }

  const handleDelete = (index) => {
    // TODO Using the provided index, remove the task from the array and update
    // state to re-render the component
    // HINT: .filter()
    let checker = tasks[index].text
    let checkedValue = tasks[index]

    // console.log(checkedValue)


    const delResult = tasks.filter((x, idx) => {

      if (x.text === checker && x.checked === false) {
        console.log(x[0])
        console.log(x.checked)
        return x
      }
    }
    )
    // console.log(delResult)
    setTasks(delResult)
  }

  const handleUpdate = (index, checked) => {
    // TODO Find the task by the provided index
    // Change the checked property on the task
    // Update the state array to re-render the component
    // HINT: .map() or access by index
  }

  return (
    <div className='app'>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" name="task" />
          <button type="submit">add task</button>
        </form>
        {
          tasks.map((todoItem, index) => {
            return (
              <div key={index}>
                <span>{todoItem.text}</span>


                <input onChange={(event) => handleUpdate(index, event.target.checked)} type="checkbox" checked={todoItem.checked} />



                <small onClick={() => handleDelete(index)}>Delete</small>
              </div>
            )
          })
        }
      </main>
    </div>
  );
}

export default App;