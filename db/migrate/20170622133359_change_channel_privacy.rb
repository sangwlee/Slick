class ChangeChannelPrivacy < ActiveRecord::Migration
  def change
    rename_column :channels, :private, :boolean
    add_column :channels, :kind, :string
  end
end
