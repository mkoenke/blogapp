import React from "react"
import "./App.css"
import BlogList from "./Containers/BlogList"
import SavedList from "./Containers/SavedList"

class App extends React.Component {
  state = { blog: {} }
  appClickHandler = (blogObj) => {
    console.log("Clickety Click", blogObj)
    this.setState({ blog: blogObj })
  }

  render() {
    return (
      <div className="App">
        <SavedList blog={this.state.blog} />
        <BlogList appClickHandler={this.appClickHandler} />
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <SavedList />
//       <BlogList />
//     </div>
//   )
// }

export default App
