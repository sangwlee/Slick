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
user10 = User.create(username: 'mmcgonagall', email: 'mmcgonagall@hogwarts.com', firstname: 'Minerva', lastname: 'McGonagall', password: 'mmcgonagall')
user11 = User.create(username: 'lmalfoy', email: 'lmalfoy@hogwarts.com', firstname: 'Lucius', lastname: 'Malfoy', password: 'lmalfoy')
user12 = User.create(username: 'cchang', email: 'cchang@hogwarts.com', firstname: 'Cho', lastname: 'Chang', password: 'cchang')
user13 = User.create(username: 'nlupin', email: 'nlupin@hogwarts.com', firstname: 'Nymphadora', lastname: 'Lupin', password: 'nlupin')
user14 = User.create(username: 'rhagrid', email: 'rhagrid@hogwarts.com', firstname: 'Rubeus', lastname: 'Hagrid', password: 'rhagrid')
user15 = User.create(username: 'sblack', email: 'sblack@hogwarts.com', firstname: 'Sirius', lastname: 'Black', password: 'sblack')
user16 = User.create(username: 'dumbridge', email: 'dumbridge@hogwarts.com', firstname: 'Dolores', lastname: 'Umbridge', password: 'dumbridge')
user17 = User.create(username: 'llovegood', email: 'llovegood@hogwarts.com', firstname: 'Luna', lastname: 'Lovegood', password: 'llovegood')
user18 = User.create(username: 'nlongbottom', email: 'nlongbottom@hogwarts.com', firstname: 'Neville', lastname: 'Longbottom', password: 'nlongbottom')
user19 = User.create(username: 'mweasely', email: 'mweasely@hogwarts.com', firstname: 'Molly', lastname: 'Weasely', password: 'mweasely')
user20 = User.create(username: 'amoody', email: 'amoody@hogwarts.com', firstname: 'Alastor', lastname: 'Moody', password: 'amoody')
user21 = User.create(username: 'ddursley', email: 'ddursley@hogwarts.com', firstname: 'Dudley', lastname: 'Dursley', password: 'ddursley')
user22 = User.create(username: 'kreacher', email: 'kreacher@hogwarts.com', firstname: 'Kreacher', lastname: '', password: 'kreacher')

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
user10.image = File.open("app/assets/images/seed_images/mmcgonagall.jpg")
user11.image = File.open("app/assets/images/seed_images/lmalfoy.jpg")
user12.image = File.open("app/assets/images/seed_images/cchang.jpg")
user13.image = File.open("app/assets/images/seed_images/nlupin.jpg")
user14.image = File.open("app/assets/images/seed_images/rhagrid.jpg")
user15.image = File.open("app/assets/images/seed_images/sblack.jpg")
user16.image = File.open("app/assets/images/seed_images/dumbridge.jpg")
user17.image = File.open("app/assets/images/seed_images/llovegood.jpg")
user18.image = File.open("app/assets/images/seed_images/nlongbottom.jpg")
user19.image = File.open("app/assets/images/seed_images/mweasely.jpg")
user20.image = File.open("app/assets/images/seed_images/amoody.jpg")
user21.image = File.open("app/assets/images/seed_images/ddursley.jpg")
user22.image = File.open("app/assets/images/seed_images/kreacher.jpg")

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
user10.save!
user11.save!
user12.save!
user13.save!
user14.save!
user15.save!
user16.save!
user17.save!
user18.save!
user19.save!
user20.save!
user21.save!
user22.save!


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
channel6 = Channel.create(name: 'hpotter, hgranger, rweasely', description: 'Harry - Ron - Hermione', kind: 'dm')
channel7 = Channel.create(name: 'hpotter, voldemort', description: 'Harry - Voldemort', kind: 'dm')

#NEW
channel8 = Channel.create(name: 'the order of pheonix', description: 'Chat Room for the Order of Pheonix', kind: 'private')

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
message3 = Message.create(content: 'Hi Ron!', kind: 'normal', user_id: user5.id, channel_id: channel6.id)

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
Subscription.create(user_id: user1.id, channel_id: channel1.id)
Subscription.create(user_id: user2.id, channel_id: channel1.id)
Subscription.create(user_id: user3.id, channel_id: channel1.id)
Subscription.create(user_id: user4.id, channel_id: channel1.id)
Subscription.create(user_id: user5.id, channel_id: channel1.id)
Subscription.create(user_id: user6.id, channel_id: channel1.id)

# Slytherin Subscriptions
Subscription.create(user_id: user7.id, channel_id: channel2.id)
Subscription.create(user_id: user8.id, channel_id: channel2.id)
Subscription.create(user_id: user9.id, channel_id: channel2.id)

# PotterFamily Subscriptions
Subscription.create(user_id: user1.id, channel_id: channel3.id)
Subscription.create(user_id: user2.id, channel_id: channel3.id)
Subscription.create(user_id: user3.id, channel_id: channel3.id)

# ProfessorsOnly Subscriptions
Subscription.create(user_id: user6.id, channel_id: channel4.id)
Subscription.create(user_id: user7.id, channel_id: channel4.id)

# DeathEaters Subscriptions
Subscription.create(user_id: user7.id, channel_id: channel5.id)
Subscription.create(user_id: user8.id, channel_id: channel5.id)
Subscription.create(user_id: user9.id, channel_id: channel5.id)

# The Trio Subscriptions
Subscription.create(user_id: user1.id, channel_id: channel6.id)
Subscription.create(user_id: user4.id, channel_id: channel6.id)
Subscription.create(user_id: user5.id, channel_id: channel6.id)

# Mortal Enemies Subscriptions
Subscription.create(user_id: user1.id, channel_id: channel7.id)
Subscription.create(user_id: user9.id, channel_id: channel7.id)

# General Chat Subscriptions
Subscription.create(user_id: user0.id, channel_id: channel0.id)
Subscription.create(user_id: user1.id, channel_id: channel0.id)
Subscription.create(user_id: user2.id, channel_id: channel0.id)
Subscription.create(user_id: user3.id, channel_id: channel0.id)
Subscription.create(user_id: user4.id, channel_id: channel0.id)
Subscription.create(user_id: user5.id, channel_id: channel0.id)
Subscription.create(user_id: user6.id, channel_id: channel0.id)
Subscription.create(user_id: user7.id, channel_id: channel0.id)
Subscription.create(user_id: user8.id, channel_id: channel0.id)
Subscription.create(user_id: user9.id, channel_id: channel0.id)
Subscription.create(user_id: user10.id, channel_id: channel0.id)
Subscription.create(user_id: user11.id, channel_id: channel0.id)
Subscription.create(user_id: user12.id, channel_id: channel0.id)
Subscription.create(user_id: user13.id, channel_id: channel0.id)
Subscription.create(user_id: user14.id, channel_id: channel0.id)
Subscription.create(user_id: user15.id, channel_id: channel0.id)
Subscription.create(user_id: user16.id, channel_id: channel0.id)
Subscription.create(user_id: user17.id, channel_id: channel0.id)
Subscription.create(user_id: user18.id, channel_id: channel0.id)
Subscription.create(user_id: user19.id, channel_id: channel0.id)
Subscription.create(user_id: user20.id, channel_id: channel0.id)
Subscription.create(user_id: user21.id, channel_id: channel0.id)
Subscription.create(user_id: user22.id, channel_id: channel0.id)

# The Order Of Pheonix Subscriptions
Subscription.create(user_id: user1.id, channel_id: channel8.id)
Subscription.create(user_id: user2.id, channel_id: channel8.id)
Subscription.create(user_id: user3.id, channel_id: channel8.id)
Subscription.create(user_id: user6.id, channel_id: channel8.id)
