import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'
import axios from  'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: {}
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (event) => {
    event.preventDefault()
    const title = event.target.title.value
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`)
    .then((response) => {
      console.log(response)
      this.setState({
        movie: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
    }

  searchById = (event) => {
    event.preventDefault()
    const id = event.target.id.value
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${id}`)
    .then((response) => {
      console.log(response)
      this.setState({
        movie: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentWillMount() {

  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search 
          searchByTitle={this.searchByTitle}
          searchById={this.searchById}
        />
        <Movie 
          movie={this.state.movie}
        />
      </div>
    );
  }
}

export default App;
