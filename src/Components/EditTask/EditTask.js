import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import "./EditTask.css"

// import { editTask } from "../../redux" // TEST

class EditTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      toTaskList: false
    }
  }

  componentDidMount = () => {
    // this.props.editTask(parseInt(this.props.match.params.id))
    console.log("-- " + this.props.match.params.id + " --")
  }

  // static getDerivedStateFromProps(props, current_state) {
  //   // console.log(current_state.title)
  //   // console.log(props.taskToEdit.title)
  //   console.log(props)
  //   if (current_state.title !== props.taskToEdit.title) {
  //     return { title: props.taskToEdit.title }
  //   }
  //   return null
  // }

  onSubmit(e) {
    e.preventDefault()
  }

  updateProduct = () => {}

  handleChange = (e) => {
    console.log(`changing ${e.target.name}`)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    // if (this.props.taskToEdit !== null && this.state.title !== this.props.taskToEdit.title) // TEST
    //   this.setState({ title: this.props.taskToEdit.title })

    // console.log(this.props.taskToEdit)
    console.log(this.state)

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
  // taskToEdit: state.taskToEdit // TEST
})

const mapDispatchToProps = (dispatch) => ({
  // editTask: (id) => dispatch(editTask(id)) // TEST
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTask)
