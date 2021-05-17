import React, { Component } from 'react';
import API from '../utils/API';

class Saved extends Component {

    state = {
        mySaved: []
    };

    componentDidMount() {
        API.saveBook()
            .then(mySaved => this.setState({ mySaved: mySaved }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">My Saved Books</h1>
                        </div>
                    </div>
                </header>
                <br></br>
                <div>
                    {this.state.mySaved.map(result => (
                        <div class="row justify-content-center no-gutters" key={result._id}>
                            <div className="row">
                                <div class="col-lg-2"><img class="img-fluid" src={result.image} alt="..." /></div>
                                <div class="col-lg-10">
                                    <div class="bg-black text-center h-100 project">
                                        <div class="d-flex h-100">
                                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                                <h4 class="text-white">{result.title} by {result.authors}</h4>
                                                <p class="mb-0 text-white-50">{result.description}</p>
                                                <hr class="d-none d-lg-block mb-0" />
                                                <div>
                                                    <button className="btn badge-pill btn-primary mt-3 ml-3" > Save
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Saved
