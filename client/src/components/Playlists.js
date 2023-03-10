import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';

function Playlists({ user, myPlaylists, setMyPlaylists }) {

  const initialForm = {
    name: "",
    description: "",
    playlist_img: "",
    user_id: user.id
  }

  // const [myPlaylists, setMyPlaylists] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState([]);

  // GET
  useEffect(() => {
    fetch(`/users/${user.id}/playlists`)
    // fetch(`/playlists`)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => setMyPlaylists(data))
      } else {
        res.json().then(json => setErrors(json["errors"]))
      }
    })
  }, [user.id])
  
  const handleAddChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  // CREATE
  const handleAddSubmit = (e) => {
    e.preventDefault();
    // Frontend Render and Backend CREATE (pessimistic)
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }
    
    // fetch(`http://localhost:3000/users/${user.id}/playlists`, config)
    fetch(`/users/${user.id}/playlists`, config)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => {
          setMyPlaylists([...myPlaylists, data])
          setErrors([])
        })
      } else {
        res.json().then(json => setErrors(json["errors"]))
      }
    })
    
    setForm(initialForm);
  }

  // UPDATE
  const onUpdate = (playlistObj) => {
    // Frontend Render and Backend UPDATE (pessimistic)
    const config = {
    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playlistObj)
    }

    fetch(`/playlists/${playlistObj.id}`, config)
    .then(res => res.json())
    .then(data => {
      const updatedPlaylists = myPlaylists.map(playlist => playlist.id === data.id ? data : playlist)
      setMyPlaylists(updatedPlaylists)
    })
  }
  
  // DELETE
  const onDelete = (playlistObj) => {
    // Frontend Render DELETE
    setMyPlaylists(myPlaylists.filter(playlist => playlist.id !== playlistObj.id))
    
    // Backend DELETE
    const config = {
        method: "DELETE"
      }
      
      fetch(`/playlists/${playlistObj.id}`, config)
    }

    const renderMyPlaylists = myPlaylists.map(playlist => {
      return (
        <PlaylistCard key={playlist.id} playlist={playlist} onUpdate={onUpdate} onDelete={onDelete} />
      )
    })
    
    return (
      <div>
      <h2>My Playlists</h2>

      {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")}
      <h3>Add a Playlist:</h3>
      <form onSubmit={handleAddSubmit}>
        <input 
          onChange={handleAddChange}
          type="text"
          name="name"
          placeholder="Enter Playlist Name"
          value={form.name}
        />
        <input
          onChange={handleAddChange}
          type="text"
          name="description"
          placeholder="Enter Playlist Description"
          value={form.description}
        />
        <input
          onChange={handleAddChange}
          type="text"
          name="playlist_img"
          placeholder="Enter Playlist Image"
          value={form.playlist_img}
        />
        <button type="submit">Add Playlist</button>
      </form>
      {renderMyPlaylists}
    </div>
  )
}

export default Playlists;