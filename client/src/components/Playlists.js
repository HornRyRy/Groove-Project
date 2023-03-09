import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';

function Playlists() {

  const [myPlaylists, setMyPlaylists] = useState([]);
  
  useEffect(() => {
    fetch(`/playlists`)
    .then(res => res.json())
    .then(data => setMyPlaylists(data))
  }, [])

  const renderMyPlaylists = myPlaylists.map(playlist => {
    return (
      <PlaylistCard key={playlist.id} playlist={playlist} />
    )
  })

  return (
    <div>
      <h2>My Playlists</h2>
        {renderMyPlaylists}
    </div>
  )
}

export default Playlists;