import React from "react"
import BlogCard from "../Components/BlogCard"

class SavedList extends React.Component {
  arrayOfBlogCards = () => {
    // return this.apiResponse().map((obj) => <h1>BlogList</h1>);
    return this.props.blogArray.map((blogObj) => <BlogCard blogObj={blogObj} />)
  }

  render() {
    console.log("Props in SavedList:", this.props, this.arrayOfBlogCards)
    return (
      <>
        <h1>SAVED LIST</h1>
        {/* <BlogCard blogObj={this.props.blog} /> */}
        {this.arrayOfBlogCards()}
      </>
    )
  }
}

// function SavedList(props) {
//   console.log("Props in SavedList:", props)
//   return (
//     <>
//       <h1>Saved List</h1>
//       <BlogCard blogObj={props.blog} />
//     </>
//   )
// }

export default SavedList
