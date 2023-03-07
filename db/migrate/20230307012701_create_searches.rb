class CreateSearches < ActiveRecord::Migration[7.0]
  def change
    create_table :searches do |t|
      t.string :name
      t.string :artist
      t.string :album
      t.string :picture
      t.integer :duration
      t.string :preview

      t.timestamps
    end
  end
end
