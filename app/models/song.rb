class Song < ApplicationRecord
    has_many :join_tables
    has_many :playlists, through: :join_tables

    validates :name, :artist, presence: true
    validates :duration, numericality: true

    def self.alphabetize
        self.all.order(artist: :asc)
    end
end
