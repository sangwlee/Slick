class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :content
      t.string :type, null: false
      t.integer :user_id, null: false
      t.integer :channel_id, null: false

      t.timestamps null: false
    end

    add_index :messages, :user_id
  end
end
