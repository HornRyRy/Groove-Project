class UserSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :username, :password
end
