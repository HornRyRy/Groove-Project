class JoinTableSerializer < ActiveModel::Serializer
  attributes :id
  # has_one :playlist
  # has_one :song
  belongs_to :playlist
  belongs_to :song
end
