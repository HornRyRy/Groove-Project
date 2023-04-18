class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :playlist_img
  # has_one :user
  # belongs_to :user
  has_many :songs
  has_many :join_tables
end
