class AddChannelIdToEmoticons < ActiveRecord::Migration
  def change
    add_column :emoticons, :channel_id, :integer, null: false 
  end
end
