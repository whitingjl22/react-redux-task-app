// import React from "react"

// import { connect } from "react-redux"
// import { updateNewTaskValue, createTask, resetNewTaskValue } from "../../redux"

// const CreateTask = ({ value, handleChange, handleSubmit, handleReset }) => {
//   return (
//     <div>
//       <h3>Create a Task</h3>
//       <input type="text" value={value} onChange={(event) => handleChange(event.target.value)} />
//       <button onClick={handleSubmit}>Add Task</button>
//       <button onClick={handleReset}>Reset Input</button>
//     </div>
//   )
// }

// const mapStateToProps = (state) => ({
//   value: state.newTaskValue
// })

// const mapDispatchToProps = (dispatch) => ({
//   handleChange: (value) => dispatch(updateNewTaskValue(value)),
//   handleReset: () => dispatch(resetNewTaskValue()),
//   handleSubmit: () => dispatch(createTask())
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CreateTask)

import React from "react"
import { connect } from "react-redux"
import { createTask } from "../../redux"
import { Redirect } from "react-router-dom"

class CreateTask extends React.Component {
  constructor(props) {
    super(props)

    const { handleSubmit } = props
    Object.assign(this, { handleSubmit })

    this.state = { title: "", toTaskList: false }
  }

  preHandleSubmit = () => {
    this.handleSubmit({ title: this.state.title })
    this.setState({
      toTaskList: true
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleReset = (e) => {
    this.setState({
      title: "",
      toTaskList: false
    })
  }

  render() {
    if (this.state.toTaskList === true) {
      return <Redirect to="/tasks" />
    }
    return (
      <div>
        <h3>Create a Task</h3>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <button onClick={this.preHandleSubmit}>Add Task</button>
        <button onClick={this.handleReset}>Reset Input</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // value: state.newTaskValue
})

const mapDispatchToProps = (dispatch) => ({
  // handleChange: (value) => dispatch(updateNewTaskValue(value)),
  // handleReset: () => dispatch(resetNewTaskValue()),
  handleSubmit: (newTask) => dispatch(createTask(newTask))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTask)
