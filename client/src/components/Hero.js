import React from 'react';
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

function Hero() {
    return (
        <div>
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Google Book Search</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Search for books on Google Books and save them as a favourite to purchase at a later date.</h2>
                        <Link
                            to="Search"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <button className="btn btn-primary js-scroll-trigger">Get Started</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Hero
