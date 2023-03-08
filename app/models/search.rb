class Search < ApplicationRecord
  # has_many :join_tables
  # has_many :playlists, through: :join_tables

  def self.alphabetize
    self.all.order(artist: :asc)
  end
end
