class FinalizeKindColumnChannel < ActiveRecord::Migration
  def change
    remove_column :channels, :kind, :string
    add_column :channels, :kind, :string, presence: true
  end
end
