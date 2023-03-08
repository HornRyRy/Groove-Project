class Playlist < ApplicationRecord
  belongs_to :user
  has_many :join_tables, dependent: :destroy
  has_many :songs, through: :join_tables
end
