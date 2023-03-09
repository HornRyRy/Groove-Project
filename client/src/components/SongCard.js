import React, { useState } from 'react';

function SongCard({ song }) { // pass down playlists, work w/ Colm

  const [playlist, setPlaylist] = useState(1)

  const handleChange = (e) => {
    // const playlistId = playlists.findIndex(p => {
    //   p.name = e.target.value
    // })
    // OR .find array method? .some?
    // const playlistId = playlists.find(p => {
    //   p.name = e.target.value
    //   return p.id
    // })
    setPlaylist(e.target.value)
    // setPlaylist(playlistId)
  }

  const handleClick = (e) => {
    const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: song.name,
        artist: song.artist,
        album: song.album,
        picture: song.picture,
        duration: song.duration,
        preview: song.preview
      })
    }

    fetch(`server/playlists/${playlist.id}`, config) // POST song to playlist, URL and playlist.id is not correct
    .then(res => res.json())
    .then(data => console.log(data))
  }

  // const playlistOptions = playlists.map(playlist => { // work w/ Colm
  //   return (
  //     <option key={playlist.id} value={playlist.name}>{playlist.name}</option>
  //   )
  // })

  const durationMin = Math.floor(song.duration / 60);
  const durationSec = (song.duration % 60 > 10 ? song.duration % 60 : "0" + song.duration % 60 );

  return (
    <tr>
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
          <option>Placeholder 1</option>
          <option>Placeholder 2</option>
          <option>Placeholder 3</option>
          {/* {playlistOptions} work w/ Colm */}
        </select>
        <button onClick={handleClick}>Add</button>
      </td>
    </tr>
  )
}

export default SongCard;