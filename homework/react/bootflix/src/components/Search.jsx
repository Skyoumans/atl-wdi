import React, { Component } from 'react'

<<<<<<< HEAD
// Update the forms to utilize methods being passed down from App.js
class Search extends Component {
  constructor (props) {
    super()
    this.state = {
      title: '',
      id: ''
    };
  }

  render() {
=======
class Search extends Component {
  // Update the forms to utilize methods being passed down from App.js,
  // along with the Handle Change Functions to update state
  state = {
    title: "",
    id: ""
  }

    // Use this function to update the state as a user types in the "title" input
  handleTitleChange = (event) => {
    event.preventDefault()

  }


    // Use this function to update the state as a user types in the "id" input
  handleIdChange = (event) => {
    event.preventDefault()

  }
  render () {
>>>>>>> c569e4649a1376002a16d79743c367fd0e7e438f
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID

        <div className="search">
<<<<<<< HEAD
          <form onSubmit={this.props.searchByTitle} id="title-search-form" method="get">
=======
          <form id="title-search-form" method="get">
            /* Use "Value" to make the Title input update as state updates*/
>>>>>>> c569e4649a1376002a16d79743c367fd0e7e438f
            <input type="text" name="title" placeholder="Enter movie title" />
            <input type="submit" value="Search for this title" />
          </form>
        </div>

        <div className="search">
<<<<<<< HEAD
          <form onSubmit={this.props.searchById} id="id-search-form" method="get">
=======
          <form id="id-search-form" method="get">
            /* Use "Value" to make the ID input update as state updates*/
>>>>>>> c569e4649a1376002a16d79743c367fd0e7e438f
            <input type="text" name="id" placeholder="Enter omdb movie ID" />
            <input type="submit" value="Search by ID" />
          </form>
        </div>

      </section>
<<<<<<< HEAD
    )
  }
}

export default Search;
=======
    );
  }
}

export default Search;
>>>>>>> c569e4649a1376002a16d79743c367fd0e7e438f
