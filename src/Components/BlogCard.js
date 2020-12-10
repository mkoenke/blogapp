import React from "react"

class BlogCard extends React.Component {
  handleSaveClick = () => {
    this.props.appClickHandler(this.props.blogObj)
  }
  render() {
    console.log(this.props.blogObj)
    return (
      <div>
        <h1>{this.props.blogObj.title}</h1>
        <img
          src={this.props.blogObj.image}
          style={{ maxWidth: "70vw", maxHeight: "20vh" }}
        />
        <button onClick={this.handleSaveClick}>Save</button>
        <button>Visit</button>
      </div>
    )
  }
}

// function BlogCard({ blogObj }) {
//   //   console.log(props);
//   return (
//     <div>
//       <h1>{blogObj.title}</h1>
//       <img
//         src={blogObj.image}
//         style={{ maxWidth: "70vw", maxHeight: "20vh" }}
//       />
//       <button onClick={this.handleSaveClick}>Save</button>
//       <button>Visit</button>
//     </div>
//   )
// }

export default BlogCard
