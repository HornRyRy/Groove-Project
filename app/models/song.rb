class Song < ApplicationRecord
    has_many: :join_tables
    has_many: :playlists, through: :join_tables
end
