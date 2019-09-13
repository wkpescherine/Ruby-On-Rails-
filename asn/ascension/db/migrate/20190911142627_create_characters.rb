class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :style
      t.string :race
      t.string :prof
      t.integer :str
      t.integer :dex
      t.integer :fort
      t.integer :wis

      t.timestamps
    end
  end
end
