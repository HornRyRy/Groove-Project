class SearchSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album, :picture, :duration, :preview
end
