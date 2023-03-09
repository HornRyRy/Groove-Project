class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :playlist_img
  has_one :user
end
