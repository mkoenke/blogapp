import React from "react"

class Search extends React.Component {
  render() {
    return (
      <>
        <h2>Search Form</h2>
        <form>
          <input
            type="text"
            placeholder="Seach by title"
            value={this.props.searchValue}
            onChange={this.props.handleSearch}
          />
          <input type="Submit" value="Seach" />
        </form>
      </>
    )
  }
}

export default Search
