require 'json'
require 'net/http'
require 'open-uri'

puts "☠️ Deleting old data..."
User.destroy_all
Song.destroy_all
Playlist.destroy_all
JoinTable.destroy_all

# Helper Methods for Seeding
def fetch_json url
  JSON.parse(URI.open(url).read)
end

def fetch_songs name
  url = "http://api.deezer.com/search?q=#{name}&index=0&limit=4"
  song_data = fetch_json(url)["data"]
  .map do |s|
    Song.create(
      name: s["title"],
      artist: s["artist"]["name"],
      album: s["album"]["title"],
      picture: s["album"]["cover_small"],
      duration: s["duration"],
      preview: s["preview"]
    )
  end
end

# Seed Data
puts "🌱 Seeding data..."

puts "seeding users"
user1 = User.create(name: "Luke", username: "luke@gmail.com", password: "1234")
user2 = User.create(name: "Yoda", username: "yoda@gmail.com", password: "1234")

puts "seeding songs"
# fetch_songs("acdc")
# fetch_songs("badbunny")
# fetch_songs("cure")
# fetch_songs("davidbowie")
fetch_songs("eminem")
# fetch_songs("franksinatra")
# fetch_songs("greenday")
# fetch_songs("harrystyles")
# fetch_songs("ironmaiden")
# fetch_songs("justinbieber")
fetch_songs("kendricklamar")
# fetch_songs("lanadelrey")
# fetch_songs("metallica")
# fetch_songs("nickiminaj")
# fetch_songs("onerepublic")
# fetch_songs("pinkfloyd")
# fetch_songs("queen")
fetch_songs("rihanna")
# fetch_songs("slipknot")
fetch_songs("thebeatles")
# fetch_songs("u2")
# fetch_songs("vanhalen")
# fetch_songs("weeknd")
# fetch_songs("xxxtentacion")
# fetch_songs("youngthug")
fetch_songs("zedd")

puts "seeding playlists"
playlist1 = user1.playlists.create(name: "Workout", description: "Playlist for working out", playlist_img: "https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png", user_id: user1.id)
playlist2 = user1.playlists.create(name: "Chill", description: "Playlist for chilling", playlist_img: "https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png", user_id: user2.id)
playlist3 = user2.playlists.create(name: "Party", description: "Playlist for partying", playlist_img: "https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png", user_id: user1.id)
playlist4 = user2.playlists.create(name: "Relax", description: "Playlist for relaxing", playlist_img: "https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png", user_id: user2.id)

puts "seeding join_tables"
JoinTable.create(playlist_id: playlist1.id, song_id: Song.ids.sample)
JoinTable.create(playlist_id: playlist1.id, song_id: Song.ids.sample)
JoinTable.create(playlist_id: playlist2.id, song_id: Song.ids.sample)
JoinTable.create(playlist_id: playlist3.id, song_id: Song.ids.sample)
JoinTable.create(playlist_id: playlist4.id, song_id: Song.ids.sample)
JoinTable.create(playlist_id: playlist4.id, song_id: Song.ids.sample)

puts "✅ Done seeding!"