class JoinTableSerializer < ActiveModel::Serializer
  attributes :id, :playlist_id, :song_id
  # belongs_to :playlist
  belongs_to :song
end
