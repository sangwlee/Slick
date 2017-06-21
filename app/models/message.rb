# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  content    :string
#  kind       :string           not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ActiveRecord::Base
  validates :kind, :user, :channel, presence: true

  belongs_to :user
  belongs_to :channel
  # has_many :subscriptions, through: :channel
end
