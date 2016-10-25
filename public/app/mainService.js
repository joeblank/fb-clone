angular.module('fb-clone')
.service('mainService', function($http, $q) {

this.users = [
  {
    firstName: 'Joe',
    lastName: 'Blank',
    profilePic: 'http://uc48.net/europeana/images/fpo_avatar.png',
    friends: []
  }
];

this.samplePosts = [
  {
    name: 'Dallin',
    post: 'i speed on my scooter!',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  },
  {
    name: 'Matt',
    post: 'I like to drive fast',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  },
  {
    name: 'Eliza',
    post: 'I want a scooter',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  },
  {
    name: 'Beth',
    post: 'i am all about oregon',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  },
  {
    name: 'John',
    post: 'ready to retire',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  },
  {
    name: 'Claudia',
    post: 'i like to ride my bike',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  },
  {
    name: 'Warren',
    post: 'Accountant for life',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  },
  {
    name: 'Will',
    post: 'football football football',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }
];

this.postPost = (newPost) => {
  this.samplePosts.unshift(
    {
      name: 'Joe B',
      post: newPost,
      profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
    }
  )
}





})
