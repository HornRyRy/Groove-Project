require 'json'
require 'net/http'
require 'open-uri'

puts "☠️ Deleting old data..."
Search.destroy_all

puts "🌱 Seeding data..."

# Helper Methods
def fetch_json url
  JSON.parse(URI.open(url).read)
end

def fetch_songs name
  url = "http://api.deezer.com/search?q=#{name}&index=0&limit=4"
  song_data = fetch_json(url)["data"]
    .map do |s|
      Search.create(
        name: s["title"],
        artist: s["artist"]["name"],
        album: s["album"]["title"],
        picture: s["album"]["cover_small"],
        duration: s["duration"],
        preview: s["preview"]
      )
    end
end

puts "Creating searches..."
fetch_songs("acdc")
fetch_songs("badbunny")
fetch_songs("cure")
fetch_songs("davidbowie")
fetch_songs("eminem")
fetch_songs("franksinatra")
fetch_songs("greenday")
fetch_songs("harrystyles")
fetch_songs("ironmaiden")
fetch_songs("justinbieber")
fetch_songs("kendricklamar")
fetch_songs("lanadelrey")
fetch_songs("metallica")
fetch_songs("nickiminaj")
fetch_songs("onerepublic")
fetch_songs("pinkfloyd")
fetch_songs("queen")
fetch_songs("rihanna")
fetch_songs("slipknot")
fetch_songs("thebeatles")
fetch_songs("u2")
fetch_songs("vanhalen")
fetch_songs("weeknd")
fetch_songs("xxxtentacion")
fetch_songs("youngthug")
fetch_songs("zedd")

# puts "seeding songs"
# song1 = Song.create(name: "Rockin' the Machine", artist: "rockin", album: "machine rockin", picture: "picture1.png", duration: 210, preview: "preview1")
# song2 = Song.create(name: "Antoher song", artist: "that guy", album: "an album", picture: "picture2.png", duration: 191, preview: "preview2")
# song3 = Song.create(name: "woohoo", artist: "another guy", album: "a differnent album", picture: "picture3.png", duration: 228, preview: "preview3")

puts "seeding users"
user1 = User.create(name: "Luke", password: "password1")
user2 = User.create(name: "Yoda", password: "password2")

puts "seeding playlists"
playlist1 = user1.playlists.create(name: "Workout", description: "Playlist for working out", playlist_img: "workout.jpg")
playlist2 = user1.playlists.create(name: "Chill", description: "Playlist for relaxing", playlist_img: "chill.jpg")
playlist3 = user2.playlists.create(name: "Party", description: "Playlist for partying", playlist_img: "party.jpg")

JoinTable.create(playlist_id: playlist1.id, song_id: song1.id)
JoinTable.create(playlist_id: playlist1.id, song_id: song2.id)
JoinTable.create(playlist_id: playlist2.id, song_id: song3.id)
JoinTable.create(playlist_id: playlist3.id, song_id: song2.id)

puts "✅ Done seeding!"

