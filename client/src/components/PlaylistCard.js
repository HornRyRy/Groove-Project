import React from 'react';
import MySongCard from './MySongCard';

function PlaylistCard({ playlist }) {

  const myPlaylistSongs = playlist.songs.map(song => {
    return (
      <MySongCard key={song.id} song={song} />
    )
  })

  return (
    <div>
      <h3>{playlist.name} - {playlist.description} - {playlist.playlist_img}</h3>
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