import React, { useState } from 'react';
import '../App.css'

function SongCard({ song, myPlaylists, setMyPlaylists }) {

  const [playlist, setPlaylist] = useState("")

  const handleChange = (e) => {
    setPlaylist(value => value = e.target.value)
  }

  const handleClick = () => {
    const playlistObj = myPlaylists.find(pl => pl.name === playlist)
    const playlistId = playlistObj.id

    // Frontend Render and Backend CREATE Song (pessimistic)
    const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        playlist_id: playlistId,
        song_id: song.id
      })
    }

    fetch(`/join_tables`, config)
    .then(res => res.json())
    .then(data => {
      // Frontend render is not working properly; Ex: when adding a new playlist then adding a new song
      myPlaylists[playlistId-1].songs.push(data.song)
      setMyPlaylists([...myPlaylists])
    })
  }

  const playlistOptions = myPlaylists.map(playlist => {
    return (
      <option key={playlist.id} value={playlist.name}>{playlist.name}</option>
    )
  })

  const durationMin = Math.floor(song.duration / 60);
  const durationSec = (song.duration % 60 > 10 ? song.duration % 60 : "0" + song.duration % 60 );

  return (
    <tr id="songCard" className= "songCard">
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td><img src={song.picture} alt={song.album}/></td>
      <td>{durationMin}:{durationSec}</td>
      <td>
        <audio
          controls
          src={song.preview}
        />
      </td>
      <td>
        <select
          onChange={handleChange}
          name="playlist"
          value={playlist}
        >
          <option>Enter Playlist</option>
          {playlistOptions}
        </select>
        <button onClick={handleClick}>Add</button>
      </td>
    </tr>
  )
}

export default SongCard;