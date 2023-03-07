require "open-uri"

puts "☠️ Deleting old data..."
Search.destroy_all

puts "🌱 Seeding data..."

# Helper Method
# def fetch_json url
#   JSON.parse(URI.open(url, "X-API-Key"=> API_KEY).read)
# end

# def fetch_search
#   url = "https://api.deezer.com/search?q=#{rand}&index=0&limit=4"
#   fetch_json(url)["data"]
# end

puts "Creating searches..."
Search.create(
  name: "Without Me",
  artist: "Eminem",
  album: "The Eminem Show",
  picture: "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
  duration: 290,
  preview: "https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3"
)
Search.create(
  name: "Back In Black",
  artist: "AC/DC",
  album: "Back In Black",
  picture: "https://e-cdns-images.dzcdn.net/images/cover/41041b14873956eff0459c8ea2c296a8/56x56-000000-80-0-0.jpg",
  duration: 255,
  preview: "https://cdns-preview-c.dzcdn.net/stream/c-cfc0e5baab3f7ce7758e259482bd8681-5.mp3"
)
Search.create(
  name: "Stairway to Heaven (Remaster)",
  artist: "Led Zeppelin",
  album: "Led Zeppelin IV (Deluxe Edition)",
  picture: "https://e-cdns-images.dzcdn.net/images/cover/460a0edd96f743be03b7405eac38c633/56x56-000000-80-0-0.jpg",
  duration: 482,
  preview: "https://cdns-preview-0.dzcdn.net/stream/c-00bd440c9ec8b85f26d638febfda5e7c-6.mp3"
)

puts "✅ Done seeding!"