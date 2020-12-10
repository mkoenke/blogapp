import React from "react"
import "./App.css"
import BlogList from "./Containers/BlogList"
import SavedList from "./Containers/SavedList"

class App extends React.Component {
  state = { blogArray: [] }
  appClickHandler = (blogObj) => {
    console.log("Clickety Click", blogObj)
    if (!this.state.blogArray.includes(blogObj)) {
      this.setState((prevState) => ({
        blogArray: [...prevState.blogArray, blogObj],
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <SavedList blogArray={this.state.blogArray} />
        <BlogList appClickHandler={this.appClickHandler} />
      </div>
    )
  }
}

export default App
