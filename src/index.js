
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
        <li id=${newTask}>
          ${newTask}
          <button data-description=${newTask}>X</button>
        </li>
      `
      newTaskDescription.value = ""
  }
  tasks.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON"){
      // debugger
      document.getElementById(`${event.target.dataset.description}`).remove()
      // console.log("hello there")
    }

  })
  

}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  

  createTaskForm.addEventListener('submit', submitNewTask)

});
