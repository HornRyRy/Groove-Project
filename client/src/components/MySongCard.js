import React from 'react';

function MySongCard({ song, onSongDelete }) {

  const handleSongDelete = () => {
    onSongDelete(song);
  }

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
        <button onClick={handleSongDelete}>Delete</button>
      </td>
    </tr>
  )
}

export default MySongCard;