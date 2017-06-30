class AddMessageColumnToMessage < ActiveRecord::Migration
  def change
    add_column :messages, :message_id, :integer
    change_column :messages, :channel_id, :integer, null: true
  end
end
