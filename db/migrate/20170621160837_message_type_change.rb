class MessageTypeChange < ActiveRecord::Migration
  def change
    rename_column :messages, :type, :kind
  end
end
