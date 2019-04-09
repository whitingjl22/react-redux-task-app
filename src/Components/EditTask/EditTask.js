import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import "./EditTask.css"

class EditTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      title: "",
      completed: null,
      toTaskList: false
    }
  }

  componentDidMount = () => {
    let title = ""
    let id = null
    let completed = null

    for (let i = 0; i < this.props.tasks.length; i++) {
      if (parseInt(this.props.match.params.id) === this.props.tasks[i].id) {
        console.log(this.props.tasks[i])

        title = this.props.tasks[i].title
        id = this.props.tasks[i].id
        completed = this.props.tasks[i].completed

        this.setState({ title: title, id: id, completed: completed })
        break
      }
    }
  }

  onSubmit(e) {
    e.preventDefault()
  }

  updateProduct = () => {}

  handleChange = (e) => {
    console.log(`changing ${e.target.name}`)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (this.state.toTaskList) {
      return <Redirect to="/tasks" />
    }
    return (
      <div>
        <h3>Edit Task</h3>
        <form onSubmit={this.onSubmit}>
          <table className="editTask-table">
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="Update" onClick={this.updateProduct} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTask)
