import React from "react"
import BlogCard from "../Components/BlogCard"
import apiResponse from "../fakeAPI"
// let apiResonse = [{title: "mountain", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kkVoCf0tIBVgVV0lgMn-8wHaGL%26pid%3DApi&f=1" }, {title: "beaches", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.A6qYNGv8HGDX7k8uUc6F7gHaE7%26pid%3DApi&f=1"}]

class BlogList extends React.Component {
  arrayOfBlogCards = () => {
    // return this.apiResponse().map((obj) => <h1>BlogList</h1>);
    return apiResponse.map((obj) => (
      <BlogCard blogObj={obj} appClickHandler={this.props.appClickHandler} />
    ))
  }
  render() {
    console.log("In BlogList render:", this.props)
    return <>{this.arrayOfBlogCards()}</>
  }
}

export default BlogList
