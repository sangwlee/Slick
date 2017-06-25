# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
User.destroy_all
Channel.destroy_all
Message.destroy_all
Subscription.destroy_all

# USERS
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  photo_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstname       :string
#  lastname        :string
#
user0 = User.create(username: 'sortinghat', email: 'sortinghat@hogwarts.com', firstname: 'Sorting', lastname: 'Hat', password: 'sortinghat')
user1 = User.create(username: 'hpotter', email: 'hpotter@hogwarts.com', firstname: 'Harry', lastname: 'Potter', password: 'hpotter')
user2 = User.create(username: 'jpotter', email: 'jpotter@hogwarts.com', firstname: 'James', lastname: 'Potter', password: 'jpotter')
user3 = User.create(username: 'lpotter', email: 'lpotter@hogwarts.com', firstname: 'Lily', lastname: 'Potter', password: 'lpotter')
user4 = User.create(username: 'hgranger', email: 'hgranger@hogwarts.com', firstname: 'Hermione', lastname: 'Granger', password: 'hgranger')
user5 = User.create(username: 'rweasely', email: 'rweasely@hogwarts.com', firstname: 'Ron', lastname: 'Weasely', password: 'rweasely')
user6 = User.create(username: 'adumbledore', email: 'adumbledore@hogwarts.com', firstname: 'Albus', lastname: 'Dumbledore', password: 'adumbledore')
user7 = User.create(username: 'ssnape', email: 'ssnape@hogwarts.com', firstname: 'Severus', lastname: 'Snape', password: 'ssnape')
user8 = User.create(username: 'dmalfoy', email: 'dmalfoy@hogwarts.com', firstname: 'Draco', lastname: 'Malfoy', password: 'dmalfoy')
user9 = User.create(username: 'voldemort', email: 'HeWhoMustNotBeNamed@hogwarts.com', firstname: 'Tom', lastname: 'Riddle', password: 'voldemort')

# assign pictures
user0.image = File.open("app/assets/images/seed_images/sortinghat.jpg")
user1.image = File.open("app/assets/images/seed_images/hpotter.jpg")
user2.image = File.open("app/assets/images/seed_images/jpotter.jpg")
user3.image = File.open("app/assets/images/seed_images/lpotter.jpg")
user4.image = File.open("app/assets/images/seed_images/hgranger.jpg")
user5.image = File.open("app/assets/images/seed_images/rweasely.jpg")
user6.image = File.open("app/assets/images/seed_images/adumbledore.jpg")
user7.image = File.open("app/assets/images/seed_images/ssnape.jpg")
user8.image = File.open("app/assets/images/seed_images/dmalfoy.jpg")
user9.image = File.open("app/assets/images/seed_images/voldemort.jpg")

user0.save!
user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!
user7.save!
user8.save!
user9.save!


# CHANNELS
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string           not null
#  private     :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

# PUBLIC CHANNELS
channel0 = Channel.create(name: 'general', description: 'General Chat for All', kind: 'public')
channel1 = Channel.create(name: 'gryffindor', description: 'Chat Room for Gryffindors', kind: 'public')
channel2 = Channel.create(name: 'slytherin', description: 'Chat Room for Slytherins', kind: 'public')

# PRIVATE CHANNELS
channel3 = Channel.create(name: 'potter family', description: 'Chat Room for Potters', kind: 'private')
channel4 = Channel.create(name: 'professors only', description: 'Chat Room for Professors at Hogwarts', kind: 'private')
channel5 = Channel.create(name: 'death eaters', description: 'Chat Room for Death Eaters', kind: 'private')

# DIRECT MESSAGES
channel6 = Channel.create(name: 'hgranger, rweasely', description: 'Harry - Ron - Hermione', kind: 'dm')
channel7 = Channel.create(name: 'voldemort', description: 'Harry - Voldemort', kind: 'dm')

# MESSAGES
#  id         :integer          not null, primary key
#  content    :string
#  kind       :string           not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

# the trio convo
message1 = Message.create(content: 'Hi Harry!', kind: 'normal', user_id: user4.id, channel_id: channel6.id)
message2 = Message.create(content: 'Hi Hermione!', kind: 'normal', user_id: user1.id, channel_id: channel6.id)
message3 = Message.create(content: 'What about me?!', kind: 'normal', user_id: user5.id, channel_id: channel6.id)

# mortal enemies convo
message1 = Message.create(content: 'Avada Kedavra!', kind: 'normal', user_id: user9.id, channel_id: channel7.id)
message1 = Message.create(content: 'Avada Kedavra!!', kind: 'normal', user_id: user1.id, channel_id: channel7.id)
message1 = Message.create(content: 'Avada Kedavra!!!', kind: 'normal', user_id: user9.id, channel_id: channel7.id)
message1 = Message.create(content: 'Avada Kedavra!!!!', kind: 'normal', user_id: user1.id, channel_id: channel7.id)
message1 = Message.create(content: 'Avada Kedavra!!!!!', kind: 'normal', user_id: user9.id, channel_id: channel7.id)
message1 = Message.create(content: 'Avada Kedavra!!!!!!', kind: 'normal', user_id: user1.id, channel_id: channel7.id)
message1 = Message.create(content: 'Avada Kedavra!!!!!!!', kind: 'normal', user_id: user9.id, channel_id: channel7.id)
message1 = Message.create(content: 'Avada Kedavra!!!!!!!!', kind: 'normal', user_id: user1.id, channel_id: channel7.id)

# SUBSCRIPTIONS
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

# Gryffindor Subscriptions
subscription1 = Subscription.create(user_id: user1.id, channel_id: channel1.id)
subscription2 = Subscription.create(user_id: user2.id, channel_id: channel1.id)
subscription3 = Subscription.create(user_id: user3.id, channel_id: channel1.id)
subscription4 = Subscription.create(user_id: user4.id, channel_id: channel1.id)
subscription5 = Subscription.create(user_id: user5.id, channel_id: channel1.id)
subscription6 = Subscription.create(user_id: user6.id, channel_id: channel1.id)

# Slytherin Subscriptions
subscription7 = Subscription.create(user_id: user7.id, channel_id: channel2.id)
subscription8 = Subscription.create(user_id: user8.id, channel_id: channel2.id)
subscription9 = Subscription.create(user_id: user9.id, channel_id: channel2.id)

# PotterFamily Subscriptions
subscription10 = Subscription.create(user_id: user1.id, channel_id: channel3.id)
subscription11 = Subscription.create(user_id: user2.id, channel_id: channel3.id)
subscription12 = Subscription.create(user_id: user3.id, channel_id: channel3.id)

# ProfessorsOnly Subscriptions
subscription13 = Subscription.create(user_id: user6.id, channel_id: channel4.id)
subscription14 = Subscription.create(user_id: user7.id, channel_id: channel4.id)

# DeathEaters Subscriptions
subscription15 = Subscription.create(user_id: user7.id, channel_id: channel5.id)
subscription16 = Subscription.create(user_id: user8.id, channel_id: channel5.id)
subscription17 = Subscription.create(user_id: user9.id, channel_id: channel5.id)

# The Trio Subscriptions
subscription18 = Subscription.create(user_id: user1.id, channel_id: channel6.id)
subscription19 = Subscription.create(user_id: user4.id, channel_id: channel6.id)
subscription20 = Subscription.create(user_id: user5.id, channel_id: channel6.id)

# Mortal Enemies Subscriptions
subscription21 = Subscription.create(user_id: user1.id, channel_id: channel7.id)
subscription22 = Subscription.create(user_id: user9.id, channel_id: channel7.id)

# General Chat Subscriptions
subscription23 = Subscription.create(user_id: user0.id, channel_id: channel0.id)
subscription24 = Subscription.create(user_id: user1.id, channel_id: channel0.id)
subscription25 = Subscription.create(user_id: user2.id, channel_id: channel0.id)
subscription26 = Subscription.create(user_id: user3.id, channel_id: channel0.id)
subscription27 = Subscription.create(user_id: user4.id, channel_id: channel0.id)
subscription28 = Subscription.create(user_id: user5.id, channel_id: channel0.id)
subscription29 = Subscription.create(user_id: user6.id, channel_id: channel0.id)
subscription30 = Subscription.create(user_id: user7.id, channel_id: channel0.id)
subscription31 = Subscription.create(user_id: user8.id, channel_id: channel0.id)
subscription32 = Subscription.create(user_id: user9.id, channel_id: channel0.id)
