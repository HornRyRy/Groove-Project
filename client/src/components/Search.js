import React, { useState, useEffect } from 'react';
import SearchSongCard from './SearchSongCard';

function Search() { // pass down playlists, work w/ Colm

  const initialForm = {
    name: "",
    artist: "",
    album: "",
    picture: "",
    duration: "",
    preview: ""
  }

  // const [search, setSearch] = useState(""); // STRETCH GOAL
  const [songsList, setSongsList] = useState([]);
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    fetch(`http://localhost:3000/searches`)
    .then(res => res.json())
    .then(data => setSongsList(data))
  }, [])

  const sortSongsList = songsList.sort((a, b) => a.artist.localeCompare(b.artist))

  const searchSongsList = sortSongsList.map(song => {
    return (
      <SearchSongCard key={song.id} song={song} />
    )
  })

  const handleAddChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  const handleAddSubmit = (e) => {
    e.preventDefault();
    
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }
    
    fetch(`http://localhost:3000/searches`, config)
    .then(res => res.json())
    .then(data => {
      setSongsList([...songsList, data])
    })
    
    setForm(initialForm);
  }
  
  // const handleSearchSubmit = (e) => { // STRETCH GOAL
  //   e.preventDefault()
  //   setSearch("")
  // }
  
  // const handleSearchChange = (e) => { // STRETCH GOAL
  //   setSearch(e.target.value)
  // }
  
  return (
    <div>
      <h2>Songs List</h2>

      {/* <h3>Search More Songs:</h3> ** STRETCH GOAL **
      <form onSubmit={handleSearchSubmit}>
        <input
          onChange={handleSearchChange}
          type="text"
          name="search"
          placeholder="Search"
          value={search}
        />
        <button>Search</button>
      </form> */}

      <h3>Add a Song:</h3>
      <form onSubmit={handleAddSubmit}>
      <input
          onChange={handleAddChange}
          type="text"
          name="name"
          placeholder="Enter Song Name"
          value={form.name}
        />
        <input
          onChange={handleAddChange}
          type="text"
          name="artist"
          placeholder="Enter Artist Name"
          value={form.artist}
        />
        <input
          onChange={handleAddChange}
          type="text"
          name="album"
          placeholder="Enter Album Name"
          value={form.album}
        />
        <input
          onChange={handleAddChange}
          type="text"
          name="picture"
          placeholder="Enter Album Image Source"
          value={form.picture}
        />
        <input
          onChange={handleAddChange}
          type="text"
          name="duration"
          placeholder="Enter Song Duration"
          value={form.duration}
        />
        <input
          onChange={handleAddChange}
          type="text"
          name="preview"
          placeholder="Enter Song Preview Source"
          value={form.preview}
        />
        <button type="submit">Add Song</button>
      </form>

      <table>
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