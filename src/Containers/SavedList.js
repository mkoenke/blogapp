import React from "react"
import BlogCard from "../Components/BlogCard"

class SavedList extends React.Component {
  // arrayOfBlogCards = () => {
  //     // return this.apiResponse().map((obj) => <h1>BlogList</h1>);
  //     return apiResponse.map((obj) => (
  //       <BlogCard blogObj={obj} appClickHandler={this.props.appClickHandler} />
  //     ))
  //   }

  render() {
    console.log("Props in SavedList:", this.props)
    return (
      <>
        <h1>Saved List</h1>
        <BlogCard blogObj={this.props.blog} />
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
