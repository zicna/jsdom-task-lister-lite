
const createTaskForm = document.getElementById('create-task-form')
const newTaskDescription = document.getElementById('new-task-description')
const tasks = document.getElementById('tasks')


let submitNewTask = (event) => {
  // debugger
  event.preventDefault()
  // console.log("hello")
  let newTask = newTaskDescription.value
  if (newTask !== ""){
    tasks.innerHTML += 
      `
        <li>
          ${newTask}
          <button data-description=${newTask}>X</button>
        </li>
      `
      newTaskDescription.value = ""
  }
  

}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  

  createTaskForm.addEventListener('submit', submitNewTask)

});
