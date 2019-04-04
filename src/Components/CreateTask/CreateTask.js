import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import { createTask } from "../../redux"

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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (newTask) => dispatch(createTask(newTask))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTask)
