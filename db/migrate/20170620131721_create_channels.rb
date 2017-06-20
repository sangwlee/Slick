class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.boolean :private, default: false

      t.timestamps null: false
    end
  end
end
