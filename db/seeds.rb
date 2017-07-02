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
channel6 = Channel.create(name: 'hpotter, hgranger, rweasely', description: 'Direct Message', kind: 'dm')
channel7 = Channel.create(name: 'hpotter, voldemort', description: 'Direct Message', kind: 'dm')

#NEW
channel8 = Channel.create(name: 'the order of pheonix', description: 'Chat Room for the Order of Pheonix', kind: 'private')

channel9 = Channel.create(name: 'hufflepuff', description: 'Chat Room for Hufflepuffs', kind: 'public')
channel10 = Channel.create(name: 'ravenclaw', description: 'Chat Room for Ravenclaws', kind: 'public')
channel11 = Channel.create(name: 'wizards', description: 'Chat Room for Wizards', kind: 'private')
channel12 = Channel.create(name: 'muggles', description: 'Chat Room for Muggles', kind: 'public')
channel13 = Channel.create(name: 'hpotter, ddursley', description: 'Direct Message', kind: 'dm')

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
message3 = Message.create(content: 'Harry, Professor Dumbledore wants to see you!', kind: 'normal', user_id: user4.id, channel_id: channel6.id)

# trio replies
message21 = Message.create(content: "What now..", kind: 'normal', user_id: user1.id, message_id: message3.id)
message22 = Message.create(content: "He seemed mad", kind: 'normal', user_id: user4.id, message_id: message3.id)
message23 = Message.create(content: "Do you want me to go with you?", kind: 'normal', user_id: user5.id, message_id: message3.id)
message24 = Message.create(content: "No", kind: 'normal', user_id: user1.id, message_id: message3.id)

# mortal enemies convo
message4 = Message.create(content: 'Avada Kedavra!', kind: 'normal', user_id: user9.id, channel_id: channel7.id)
message5 = Message.create(content: 'Avada Kedavra!!', kind: 'normal', user_id: user1.id, channel_id: channel7.id)
message6 = Message.create(content: 'Avada Kedavra!!!', kind: 'normal', user_id: user9.id, channel_id: channel7.id)
message7 = Message.create(content: 'Avada Kedavra!!!!', kind: 'normal', user_id: user1.id, channel_id: channel7.id)
message8 = Message.create(content: 'Avada Kedavra!!!!!', kind: 'normal', user_id: user9.id, channel_id: channel7.id)
message9 = Message.create(content: 'Avada Kedavra!!!!!!', kind: 'normal', user_id: user1.id, channel_id: channel7.id)
message10 = Message.create(content: 'Avada Kedavra!!!!!!!', kind: 'normal', user_id: user9.id, channel_id: channel7.id)
message11 = Message.create(content: 'Avada Kedavra!!!!!!!!', kind: 'normal', user_id: user1.id, channel_id: channel7.id)

#mortal enemies reply
message25 = Message.create(content: "I don't recall casting this spell in the book or in the movies..", kind: 'normal', user_id: user1.id, message_id: message11.id)


# general chat convo
message12 = Message.create(content: 'WOW THIS IS AMAZING!', kind: 'normal', user_id: user5.id, channel_id: channel0.id)
message13 = Message.create(content: 'Now we can chat here without worrying about professors..!', kind: 'normal', user_id: user1.id, channel_id: channel0.id)
message14 = Message.create(content: 'Ehem..', kind: 'normal', user_id: user6.id, channel_id: channel0.id)
message15 = Message.create(content: "(whisper) Oh no.. let's go make ourselves a private channel..", kind: 'normal', user_id: user5.id, channel_id: channel0.id)
message16 = Message.create(content: "They won't be able to find us there!", kind: 'normal', user_id: user1.id, channel_id: channel0.id)

# general chat replies
message17 = Message.create(content: 'We can still see your chat..', kind: 'normal', user_id: user6.id, message_id: message15.id)
message18 = Message.create(content: 'Precisely.', kind: 'normal', user_id: user10.id, message_id: message15.id)
message19 = Message.create(content: '-50 points for Gryffindor!!', kind: 'normal', user_id: user7.id, message_id: message15.id)
message20 = Message.create(content: 'Oh no..', kind: 'normal', user_id: user4.id, message_id: message15.id)
message21 = Message.create(content: "Hurry guys!", kind: 'normal', user_id: user5.id, message_id: message16.id)

# chat for Potter Family
message26 = Message.create(content: "Harry.. make sure you eat your breakfast.", kind: 'normal', user_id: user3.id, channel_id: channel3.id)
message27 = Message.create(content: "okie", kind: 'normal', user_id: user1.id, channel_id: channel3.id)
message28 = Message.create(content: ":)", kind: 'normal', user_id: user2.id, channel_id: channel3.id)

# chat for gryffindor
message29 = Message.create(content: "Hey guys, who lost us 50 points today?", kind: 'normal', user_id: user18.id, channel_id: channel1.id)
message30 = Message.create(content: ";;", kind: 'normal', user_id: user1.id, channel_id: channel1.id)
message31 = Message.create(content: ";;", kind: 'normal', user_id: user5.id, channel_id: channel1.id)
message32 = Message.create(content: "Sigh..", kind: 'normal', user_id: user4.id, channel_id: channel1.id)
message33 = Message.create(content: ";; hey anyone wanna explore the dungeons today?", kind: 'normal', user_id: user1.id, channel_id: channel1.id)

# replies for gryffindor
message34 = Message.create(content: "Not again..", kind: 'normal', user_id: user4.id, message_id: message33.id)
message35 = Message.create(content: "Sigh.. This is how I always almost end up dying", kind: 'normal', user_id: user5.id, message_id: message33.id)
message36 = Message.create(content: "Go to sleep on time for once, Harry.", kind: 'normal', user_id: user10.id, message_id: message33.id)
message37 = Message.create(content: "Seriously..", kind: 'normal', user_id: user4.id, message_id: message33.id)

# chat for the order of pheonix
message38 = Message.create(content: "Hi guys! ^^", kind: 'normal', user_id: user15.id, channel_id: channel8.id)
message39 = Message.create(content: ".. anyone here ...?", kind: 'normal', user_id: user15.id, channel_id: channel8.id)

# chat for HufflePuff
message40 = Message.create(content: "No one cares about hufflepuff", kind: 'normal', user_id: user0.id, channel_id: channel9.id)

# chat for Ravenclaw
message41 = Message.create(content: "No one cares about ravenclaw", kind: 'normal', user_id: user0.id, channel_id: channel10.id)

# chat for Harry Dudley
message42 = Message.create(content: "Mom, Dad.. WHERE ARE YOU?!?!!!", kind: 'normal', user_id: user21.id, channel_id: channel13.id)
message43 = Message.create(content: "Dudley.. we are finally alone.", kind: 'normal', user_id: user1.id, channel_id: channel13.id)
message44 = Message.create(content: "Harry..!", kind: 'normal', user_id: user21.id, channel_id: channel13.id)
message45 = Message.create(content: "Stupefy!!", kind: 'normal', user_id: user1.id, channel_id: channel13.id)
message46 = Message.create(content: "Crucio!!", kind: 'normal', user_id: user1.id, channel_id: channel13.id)
message47 = Message.create(content: "... Petrificus Totalus!", kind: 'normal', user_id: user1.id, channel_id: channel13.id)

# chat for Muggles
message48 = Message.create(content: "Muggles... sigh. Why do they exist?", kind: 'normal', user_id: user0.id, channel_id: channel12.id)

# chat for Slytherin
message50 = Message.create(content: "For Lord Voldemort.", kind: 'normal', user_id: user11.id, channel_id: channel2.id)
message49 = Message.create(content: "For Lord Voldemort.", kind: 'normal', user_id: user8.id, channel_id: channel2.id)
message51 = Message.create(content: "For Lord Voldemort.", kind: 'normal', user_id: user7.id, channel_id: channel2.id)
message52 = Message.create(content: "For Lord Voldemort.", kind: 'normal', user_id: user13.id, channel_id: channel2.id)
message53 = Message.create(content: "For Me. :D", kind: 'normal', user_id: user9.id, channel_id: channel2.id)

# replies for Slytherin
message54 = Message.create(content: "Liar..", kind: 'normal', user_id: user8.id, message_id: message51.id)
#
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
Subscription.create(user_id: user10.id, channel_id: channel1.id)
Subscription.create(user_id: user15.id, channel_id: channel1.id)
Subscription.create(user_id: user18.id, channel_id: channel1.id)
Subscription.create(user_id: user14.id, channel_id: channel1.id)

# Slytherin Subscriptions
Subscription.create(user_id: user7.id, channel_id: channel2.id)
Subscription.create(user_id: user8.id, channel_id: channel2.id)
Subscription.create(user_id: user9.id, channel_id: channel2.id)
Subscription.create(user_id: user11.id, channel_id: channel2.id)
Subscription.create(user_id: user13.id, channel_id: channel2.id)

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

# The Order of Pheonix Subscriptions
Subscription.create(user_id: user15.id, channel_id: channel8.id)

# Hufflepuff subscription
Subscription.create(user_id: user0.id, channel_id: channel9.id)

# Ravenclaw subscription
Subscription.create(user_id: user0.id, channel_id: channel10.id)

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

# Muggles Subscriptions
Subscription.create(user_id: user0.id, channel_id: channel12.id)

# Harry Dudley Subscription
Subscription.create(user_id: user1.id, channel_id: channel13.id)
Subscription.create(user_id: user21.id, channel_id: channel13.id)
