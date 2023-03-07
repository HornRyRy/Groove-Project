# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding users"
user1 = User.create(name: "Luke", password: "password1")
user2 = User.create(name: "Yoda", password: "password2")

puts "seeding playlists"
playlist1 = user1.playlists.create(name: "Workout", description: "Playlist for working out", playlist_img: "workout.jpg")
playlist2 = user1.playlists.create(name: "Chill", description: "Playlist for relaxing", playlist_img: "chill.jpg")
playlist3 = user2.playlists.create(name: "Party", description: "Playlist for partying", playlist_img: "party.jpg")

puts "seeding songs"
song1 = Song.create(name: "Rockin' the Machine", artist: "rockin", album: "machine rockin", picture: "picture1.png", duration: 210, preview: "preview1")
song2 = Song.create(name: "Antoher song", artist: "that guy", album: "an album", picture: "picture2.png", duration: 191, preview: "preview2")
song3 = Song.create(name: "woohoo", artist: "another guy", album: "a differnent album", picture: "picture3.png", duration: 228, preview: "preview3")

JoinTable.create(playlist_id: playlist1.id, song_id: song1.id)
JoinTable.create(playlist_id: playlist1.id, song_id: song2.id)
JoinTable.create(playlist_id: playlist2.id, song_id: song3.id)
JoinTable.create(playlist_id: playlist3.id, song_id: song2.id)