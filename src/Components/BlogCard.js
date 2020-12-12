import React from "react"

class BlogCard extends React.Component {
  state = {
    counter: 0,
    beenClicked: false,
  }
  moreDetailsClickHandler = () => {
    console.log("clicking")
    this.setState((prevState) => ({ beenClicked: !prevState.beenClicked }))
  }
  renderMoreDetails = () => {
    const { blogObj } = this.props
    if (this.state.beenClicked) {
      return <h4>By: {blogObj.author}</h4>
    }
  }

  handleSaveClick = () => {
    this.props.appClickHandler(this.props.blogObj)
  }
  render() {
    console.log(this.props.blogObj)
    const { blogObj } = this.props
    return (
      <div>
        <h1>{blogObj.title}</h1>
        <img
          src={blogObj.image}
          style={{ maxWidth: "70vw", maxHeight: "20vh" }}
        />
        <br />
        {/* {this.state.beenClicked ? <h4> By: {blogObj.author}</h4> : null} */}
        {this.renderMoreDetails()}
        <button onClick={this.handleSaveClick}>Save</button>
        <button>Visit</button>
        <button onClick={this.moreDetailsClickHandler}>
          {this.state.beenClicked ? "Less Details" : "More Details"}
        </button>
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
