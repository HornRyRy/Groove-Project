import React, { useState, useEffect } from 'react';
import SearchSongCard from './SearchSongCard';

function Search() {

  const [search, setSearch] = useState("");
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/searches`)
    // fetch(`https://api.deezer.com/search?q=eminem&index=0&limit=4`)
    .then(res => res.json())
    .then(data => setSongsList(data))
    // .then(data => console.log(data))
  }, [])

  const searchSongsList = songsList.map(song => {
    return (
      <SearchSongCard key={song.id} song={song} />
    )
  })

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
            <th>Preview</th>
            <th>Add to Playlist</th>
          </tr>
          {searchSongsList}
        </tbody>
      </table>
    </div>
  );
}

export default Search;