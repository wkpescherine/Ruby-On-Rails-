class CreateUserChars < ActiveRecord::Migration[5.2]
  def change
    create_table :user_chars do |t|
      t.string :user_id
      t.string :character_id

      t.timestamps
    end
  end
end
