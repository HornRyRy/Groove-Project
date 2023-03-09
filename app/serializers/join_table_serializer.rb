class JoinTableSerializer < ActiveModel::Serializer
  attributes :id
  has_one :playlist
  has_one :song
end
