import React from "react"

const Home = (props) => {
  return (
    <div className="homePage">
      <h3>Instructions</h3>
      <p>1) Create 1 Todo - POST /todos</p>
      <p>2) Delete 1 Todo - DELETE /todos/:id</p>
      <p>3) View 1 and Edit 1 Todo - GET /todos/:id</p>
      <p>4) Update 1 Todo - PUT /todos/:id</p>
      <p>5) View All Todo /todos - GET /todos</p>
    </div>
  )
}

export default Home
