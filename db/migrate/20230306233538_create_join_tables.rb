class CreateJoinTables < ActiveRecord::Migration[7.0]
  def change
    create_table :join_tables do |t|
      # t.references :playlist, null: false, foreign_key: true
      # t.references :song, null: false, foreign_key: true
      t.integer :playlist_id
      t.integer :song_id

      t.timestamps
    end
  end
end
