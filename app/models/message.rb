# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  content    :string
#  kind       :string           not null
#  user_id    :integer          not null
#  channel_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  message_id :integer
#

class Message < ActiveRecord::Base
  validates :kind, :user_id, presence: true

  belongs_to :user
  belongs_to :channel
  belongs_to :message,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :message_id

  has_many :replies,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :message_id
end
