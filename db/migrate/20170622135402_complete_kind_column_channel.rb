class CompleteKindColumnChannel < ActiveRecord::Migration
  def change
    remove_column :channels, :kind, :string
    add_column :channels, :kind, :string, null: false
  end
end
