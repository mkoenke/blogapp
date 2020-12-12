import React from "react"

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    image: "",
    url: "",
  }

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // let blogObj = {
    //   title: e.target.title.value,
    //   author: e.target.author.value,
    //   image: e.target.image.value,
    //   url: e.target.url.value,
    // }

    this.props.submitHandler(this.state)
    this.setState({ title: "", author: "", image: "", url: "" })
  }
  render() {
    return (
      <>
        <h1>Add New Blog</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={this.state.author}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={this.state.image}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="url"
            placeholder="Blog URL"
            value={this.state.url}
            onChange={this.changeHandler}
          />
          <input type="submit" />
        </form>
      </>
    )
  }
}
export default Form
