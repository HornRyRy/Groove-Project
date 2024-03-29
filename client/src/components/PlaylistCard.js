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
  const [mySongs, setMySongs] = useState(playlist.songs);
  
  const handleUpdateChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  const handleUpdate = (e) => {
    e.preventDefault()
    
    onUpdate(form)
  }
  
  const handleEdit = () => {
    console.log('Update (not working) button clicked')
  }
  
  const handleDelete = () => {
    onDelete(playlist)
  }
  
  const onSongDelete = (songObj) => {
    const joinTable = playlist.join_tables.find(jt => jt.song_id === songObj.id)

    // Frontend Render DELETE Song
    setMySongs(mySongs.filter(song => song.id !== songObj.id))

    // Backend DELETE Song
    const config = {
      method: "DELETE"
    }
    
    fetch(`/join_tables/${joinTable.id}`, config)
  }

  const sortMySongs = mySongs.sort((a, b) => a.artist.localeCompare(b.artist))
  
  const myPlaylistSongs = sortMySongs.map(song => {
    return (
      <MySongCard key={song.id} song={song} onSongDelete={onSongDelete}/>
    )
  })

  return (
    <div>
      <h3>{playlist.name} - {playlist.description} - <img src={playlist.playlist_img} alt={playlist.name} className="playlistImg"/> -
        <button onClick={handleEdit}>Update (not working)</button>
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
            <th>Delete Song</th>
          </tr>
          {myPlaylistSongs}
        </tbody>
      </table>
    </div>
  )
}

export default PlaylistCard;