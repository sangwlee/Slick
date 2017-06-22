class RemoveBooleanColumnChannels < ActiveRecord::Migration
  def change
    remove_column :channels, :boolean, :boolean
  end
end
