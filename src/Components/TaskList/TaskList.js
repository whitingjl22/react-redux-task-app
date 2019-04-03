import React from "react"

import { connect } from "react-redux"
import { deleteTask, toggleCompleteTask } from "../../redux"

const TaskList = ({ tasks, destroyTask, switchCompleteTask }) => {
  return (
    <div>
      <h3>TaskList</h3>
      <hr />
      <h5> -- Incomplete List -- </h5>
      {tasks
        .filter((task) => !task.completed)
        .map((task, index) => (
          <div key={index}>
            <h5>{task.title}</h5>
            <h5>{task.completed}</h5>
            <button
              onClick={() => {
                switchCompleteTask(task.id)
              }}>
              Mark Complete
            </button>
            <button
              onClick={() => {
                destroyTask(task.id)
              }}>
              Delete
            </button>
            <button>Edit</button>
          </div>
        ))}
      <hr />
      <h5> -- Complete List -- </h5>
      {tasks
        .filter((task) => task.completed)
        .map((task, index) => (
          <div key={index}>
            <h5>{task.title}</h5>
            <h5>{task.completed}</h5>
            <button
              onClick={() => {
                switchCompleteTask(task.id)
              }}>
              Mark Incomplete
            </button>
            <button
              onClick={() => {
                destroyTask(task.id)
              }}>
              Delete
            </button>
            <button>Edit</button>
          </div>
        ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  destroyTask: (id) => dispatch(deleteTask(id)),
  switchCompleteTask: (id) => dispatch(toggleCompleteTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
