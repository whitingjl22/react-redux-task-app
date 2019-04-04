import { createStore } from "redux"

// Initial State
let id = 2
const initialState = {
  tasks: [{ id: 1, title: "first task", completed: false }, { id: 2, title: "second task", completed: true }],

  taskToEdit: null
}

// ACTIONS -- actions.js
export const createTask = (newTask) => ({
  type: "CREATE_TASK",
  newTask
})
export const updateTask = (id) => ({
  type: "UPDATE_TASK",
  id
})
export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  id
})
export const toggleCompleteTask = (id) => ({
  type: "TOGGLE_COMPLETE_TASK",
  id
})
export const editTask = (id) => ({
  type: "EDIT_TASK",
  id
})

// REDUCERS -- reducers.js
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      console.log(" -- REDUCER -- CREATE_TASK | state: ", state)
      console.log(" -- REDUCER -- CREATE_TASK | action", action)
      id++
      return {
        ...state,
        tasks: [...state.tasks, { id, title: action.newTask.title, completed: false }]
      }

    case "DELETE_TASK":
      let deleteIndex = state.tasks.findIndex((obj) => obj["id"] === action.id)
      return {
        ...state,
        tasks: [...state.tasks.slice(0, deleteIndex), ...state.tasks.slice(deleteIndex + 1)]
      }

    case "TOGGLE_COMPLETE_TASK":
      let toggleIndex = state.tasks.findIndex((obj) => obj["id"] === action.id)
      state.tasks[toggleIndex].completed = !state.tasks[toggleIndex].completed
      return {
        ...state,
        tasks: [...state.tasks]
      }

    case "UPDATE_TASK":
      console.log(" -- REDUCER -- UPDATE_TASK | state: ", state)
      console.log(" -- REDUCER -- UPDATE_TASK | action", action)
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return { ...task, title: action.title }
          }
          return task
        })
      }

    case "EDIT_TASK":
      let editIdx = state.tasks.findIndex((task) => {
        console.log(action.id)
        console.log(task.id === action.id)
        return task.id === action.id
      })
      console.log(editIdx)
      return {
        ...state,
        taskToEdit: Object.assign({}, state.tasks[editIdx])
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
