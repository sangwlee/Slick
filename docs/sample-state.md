currentUser: {
  id: 1,
  username: 'slick-bot',
  email: 'sbot@gmail.com',
  photo_url: 'slick.io/user/slick-bot/photo'
},

channels: {
  1: {
    name: 'general',
    description: 'general chat',
    private: false
  },

  2: {
    name: 'direct-chat-123',
    private: true
  }
},

users: {
  1: {
    id: 1,
    username: 'Harry Potter',
    email: 'hpotter@gmail.com',
    photo_url: ''
  },

  2: {
    id: 2,
    username: 'Voldemort',
    email: 'hewhomustnotbenamed@gmail.com',
    photo_url: ''
  }
},

messages: {
  1: {
    id: 1,
    type: 'normal',
    user_id: 1,
    channel_id: 1,
    content: 'hello'
  },

  2: {
    id: 2,
    type: 'link',
    user_id: 2,
    channel_id: 1,
    content: 'bye'
  }
}
