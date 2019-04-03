import { createStore } from "redux"
import TaskList from "./Components/TaskList/TaskList"

// Initial State
let id = 2
const initialState = {
  tasks: [{ id: 1, title: "first task", completed: false }, { id: 2, title: "second task", completed: true }],
  newTaskValue: ""
}

// ACTIONS -- actions.js
export const updateNewTaskValue = (value) => ({
  type: "UPDATE_NEW_TASK_VALUE",
  value
})
export const createTask = (newTask) => ({
  type: "CREATE_TASK",
  newTask
})
export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  id
})
export const resetNewTaskValue = () => ({
  type: "RESET_NEW_TASK_VALUE"
})
export const toggleCompleteTask = (id) => ({
  type: "TOGGLE_COMPLETE_TASK",
  id
})

// REDUCERS -- reducers.js
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_TASK_VALUE":
      return { ...state, newTaskValue: action.value }

    case "CREATE_TASK":
      console.log(" -- REDUCER -- CREATE_TASK | state: ", state)
      console.log(" -- REDUCER -- CREATE_TASK | action", action)
      id++
      return {
        ...state,
        tasks: [...state.tasks, { id, title: action.newTask.title, completed: false }],
        newTaskValue: "" // reset input box
      }

    case "DELETE_TASK":
      let deleteIndex = state.tasks.findIndex((obj) => obj["id"] === action.id)
      return {
        ...state,
        tasks: [...state.tasks.slice(0, deleteIndex), ...state.tasks.slice(deleteIndex + 1)]
      }

    case "RESET_NEW_TASK_VALUE":
      return { ...state, newTaskValue: "" }

    case "TOGGLE_COMPLETE_TASK":
      let toggleIndex = state.tasks.findIndex((obj) => obj["id"] === action.id)
      state.tasks[toggleIndex].completed = !state.tasks[toggleIndex].completed
      return {
        ...state,
        tasks: [...state.tasks]
      }

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.title === action.title) {
            return { ...task, title: action.title }
          }
          return task
        })
      }

    default:
      return state
  }
}

// STORE -- store.js
export function configureStore(initialState = initialState) {
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store
}

export const store = configureStore()
