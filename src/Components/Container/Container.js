import React from "react"
import "react-router"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import CreateTask from "./../CreateTask/CreateTask"
import NavBar from "../NavBar/NavBar"

import Home from "./../Home/Home"
import TaskList from "./../TaskList/TaskList"
// import EditTask from "./../EditTask/EditTask" // need to create

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Task App With Redux</h1>

        <BrowserRouter>
          <NavBar />
          <div className="contentContainer">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/home" component={Home} />

              {/* <Route path="/products/edit/:id" render={(props) => <EditProduct {...props} />} /> */}

              <Route path="/tasks/new" component={CreateTask} />

              <Route path="/tasks" component={TaskList} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Container
