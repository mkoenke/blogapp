import React from "react"
import BlogCard from "../Components/BlogCard"
import Form from "../Components/Form"
import Search from "../Components/Search"
import apiResponse from "../fakeAPI"
// let apiResonse = [{title: "mountain", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kkVoCf0tIBVgVV0lgMn-8wHaGL%26pid%3DApi&f=1" }, {title: "beaches", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.A6qYNGv8HGDX7k8uUc6F7gHaE7%26pid%3DApi&f=1"}]

class BlogList extends React.Component {
  state = {
    allBlogs: apiResponse,

    searchValue: "",
  }

  arrayOfBlogCards = () => {
    return this.filteredBlogList().map((obj) => (
      <BlogCard blogObj={obj} appClickHandler={this.props.appClickHandler} />
    ))
  }

  filteredBlogList = () => {
    return this.state.allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    )
  }

  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({ searchValue: e.target.value })
    // let newArray = this.state.filteredBlogList.filter((blog) =>
    //   blog.title.toLowerCase().includes(e.target.value)
    // )
    // this.setState({ filteredBlogList: newArray, searchValue: e.target.value })
  }

  submitHandler = (newBlog) => {
    console.log(newBlog)
    let newState = [...this.state.allBlogs, newBlog]
    this.setState({ allBlogs: newState })
  }
  render() {
    return (
      <>
        <Form submitHandler={this.submitHandler} />
        <h1>BLOG LIST</h1>
        <Search
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
        />
        {this.arrayOfBlogCards()}
      </>
    )
  }
}

export default BlogList
