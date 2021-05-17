import React from 'react';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Results from '../components/Results'

function Home() {
    return (
        <div>
          <Hero />
          <Search 
          title="Search"
          id="Search"
          />
          <br></br>
          <br></br>
          <Results />
        </div>
    )
}

export default Home
