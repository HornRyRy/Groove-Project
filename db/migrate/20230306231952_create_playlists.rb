class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :name
      t.string :description
      t.string :playlist_img
      t.integer :user_id 
      # t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
