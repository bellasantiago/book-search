import React, { Component } from 'react';

class Results extends Component {

    render() {
        return (
            <div>
                {this.props.myBooks.map(result => (
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
                                                <button className="btn badge-pill btn-primary mt-3 ml-3"
                                                    onClick={this.props.handleSave}> Save
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
        )
    }

};

export default Results;
