require 'json'
require 'net/http'
require 'open-uri'

puts "☠️ Deleting old data..."
Search.destroy_all

puts "🌱 Seeding data..."

# Helper Methods
def fetch_json url
  JSON.parse(URI.open(url).read)
  # byebug
end

def fetch_songs name
  # url = "http://api.deezer.com/search?q=eminem&index=0&limit=4"
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

puts "✅ Done seeding!"