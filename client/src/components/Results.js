import React, { Component } from 'react';
import API from "../utils/API";;

class Results extends Component {
    state = {
        myBooks: [],
        value: ""
    };

    componentDidMount() {
        API.myBooks()
            .then(myBooks => this.setState({ myBooks: myBooks }))
            .catch(err => console.error(err));
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
            .then(res => this.setState({ myBooks: res.data.items.map(bookData => this.bookData(bookData)) }))
            .catch(err => console.error(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.search(this.state.search);
    };

    render() {
        return (
            <div>
                {this.state.myBooks.map(result => (
                    <div class="row justify-content-center no-gutters mb-5 mb-lg-0" key={result._id}>
                        <div className="row">
                            <div class="col-lg-6"><img class="img-fluid" src={result.image} alt="..." /></div>
                            <div class="col-lg-6">
                                <div class="bg-black text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 class="text-white">{result.title} by {result.authors}</h4>
                                            <p class="mb-0 text-white-50">{result.description}</p>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

};

export default Results;
