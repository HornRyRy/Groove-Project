import React, { useState, useEffect } from 'react';

function Search() {

  const [search, setSearch] = useState("");
  // const [searchResults, setResults] = useState([]);

  useEffect(() => {
    // fetch(`https://api.deezer.com/search/track/?q=${search}&index=0&limit=2`)
    fetch(`https://api.deezer.com/search?q=eminem&index=0&limit=2`)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [search])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    setSearch("")
  }

  return (
    <div>
      <h2>Search Component</h2>
      <h3>Search Field:</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="search"
          placeholder="Search"
          value={search}
        />
        <button>Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Search Results</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Album Image</th>
            <th>Duration</th>
            <th>Release Date</th>
            <th>BPM</th>
            <th>Preview</th>
            <th>Add to Playlist</th>
          </tr>
          <tr>
            {/* {searchResults} */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Search;