import React, { useState } from 'react';
import MySongCard from './MySongCard';

function PlaylistCard({ playlist, onUpdate, onDelete }) {

  const initialForm = {
    id: playlist.id,
    name: playlist.name,
    description: playlist.description,
    playlist_img: playlist.playlist_img,
  }

  const [form, setForm] = useState(initialForm);

  const myPlaylistSongs = playlist.songs.map(song => {
    return (
      <MySongCard key={song.id} song={song} />
    )
  })

  const handleUpdateChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    onUpdate(form)
  }

  const handleDelete = () => {
    onDelete(playlist)
  }

  return (
    <div>
      <h3>{playlist.name} - {playlist.description} - <img src={playlist.playlist_img} alt={playlist.name} className="playlistImg"/> -
        <button onClick={handleDelete}>Delete</button>
      </h3>
      <form onSubmit={handleUpdate}>
        <input 
          onChange={handleUpdateChange}
          type="text"
          name="name"
          placeholder="Enter Playlist Name"
          value={form.name}
        />
        <input
          onChange={handleUpdateChange}
          type="text"
          name="description"
          placeholder="Enter Playlist Description"
          value={form.description}
        />
        <input
          onChange={handleUpdateChange}
          type="text"
          name="playlist_img"
          placeholder="Enter Playlist Image"
          value={form.playlist_img}
        />
        <button>Update</button>
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
          </tr>
          {myPlaylistSongs}
        </tbody>
      </table>
    </div>
  )
}

export default PlaylistCard;