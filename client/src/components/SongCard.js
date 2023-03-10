import React, { useState } from 'react';

function SongCard({ song, myPlaylists }) {

  const [playlist, setPlaylist] = useState(1)

  const handleChange = (e) => {
    setPlaylist(e.target.value)
  }

  const handleClick = (e) => {
    const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        id: song.id,
        name: song.name,
        artist: song.artist,
        album: song.album,
        picture: song.picture,
        duration: song.duration,
        preview: song.preview
      })
    }

    const playlistId = myPlaylists.filter( pl => pl.name == playlist ) // Answer: playlistId[0]["id"]
        
    fetch(`/playlists/${playlistId[0]["id"]}/songs`, config) // POST song to playlist, revisit URL
    // fetch(`/playlists`, config) // POST song to playlist, revisit URL
    .then(res => res.json())
    .then(data => {
      // console.log(playlist)
      // console.log(playlistId)
      console.log(playlistId[0]["id"])
      console.log(data)
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
    
    <tr id="songCard">
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