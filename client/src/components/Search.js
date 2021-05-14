import React from 'react'

function Search(props) {
    return (
        <div>
            <div class="container" id="Search">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Search book title!</h2>
                        <form class="form-inline d-flex">
                            <input
                                class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                                id="inputSearch"
                                type="text"
                                placeholder="Search book title!"
                                name="search"
                                value={props.search}
                                onChange={props.handleInputChange}
                            />
                            <button
                                class="btn btn-primary mx-auto"
                                type="submit"
                                onClick={props.handleFormSubmit}
                            >Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
