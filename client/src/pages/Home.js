import React, { Component } from 'react';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Results from '../components/Results'
import API from "../utils/API";;



class Home extends Component {

  state = {
    myBooks: [],
    search: "",
    mySaved: []
  };

  componentDidMount() {
    this.search();
    API.myBooks()
      .then(myBooks =>
        this.setState({ myBooks: myBooks }))
      .catch(err =>
        console.error(err));
  }

  bookData = bookData => {
    return {
      _id: bookData.id,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description
    }
  }

  search = bookSearch => {
    API.getBooks(bookSearch)
      .then(res =>
        this.setState({
          myBooks: res.data.items.map(bookData =>
            this.bookData(bookData))
        }))
      .catch(err =>
        console.error(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.search(this.state.search);
    this.setState({ search: "" })
  };

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    this.setState({ search: event.target.value })
  };

  handleSave = savedBook => {
    savedBook.preventDefault();
    console.log(savedBook);
    API.saveBook(savedBook)
      .then(saved => 
        this.setState({ mySaved: this.state.mySaved.concat([saved]) }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Hero />
        <Search
          title="Search"
          id="Search"
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <br></br>
        <br></br>
        <Results
          myBooks={this.state.myBooks}
          handleSave={this.state.mySaved}
        />
      </div>
    )
  }
}

export default Home
