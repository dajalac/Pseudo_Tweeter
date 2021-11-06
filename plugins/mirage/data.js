
import faker from 'faker'

// get just first name
const userName = (name) => {
  const nameList = name.split(' ')
  return '@' + nameList[0].toLowerCase()
}
/** **************************** data setup **************** */
// user Set up
const user = {
  name: faker.name.findName(),
  userName: '@ilovecandy4ever',
  profile: faker.image.avatar()

}

// All tweets initial data
const allTweets = []
for (let i = 0; i < 5; i++) {
  let fullName = faker.name.findName()
  let profilePhoto = faker.image.avatar()
  let postPicture = null

  if (i % 2 === 0) {
    postPicture = faker.random.image()
  }
  // set up user tweets
  if (i % 3 === 0) {
    postPicture = faker.random.image()
    fullName = user.name
    profilePhoto = user.profile
  }
  allTweets.push({
    id: faker.datatype.uuid(),
    name: fullName,
    userName: userName(fullName) + faker.datatype.number(),
    profilePhoto,
    tweet: faker.lorem.sentence(),
    postMedia: postPicture,
    liked: false

  })
}

// to follow suggestions
const suggestions = []
for (let i = 0; i < 2; i++) {
  const fullName = faker.name.findName()
  suggestions.push({
    name: fullName,
    userName: userName(fullName) + faker.datatype.number(),
    profilePhoto: faker.image.avatar()
  })
}

/** *************************** to send to mirage **************/

// currente user
export const setUpUser = () => {
  return user
}

// user tweets
export const getUserTweets = () => {
  const userTweets = allTweets.filter((tweet) => {
    return tweet.name === user.name
  })
  return userTweets
}
// all tweets
export const getAllTweets = () => {
  return allTweets
}

// who to follow
export const getFollowSuggestions = () => {
  return suggestions
}

export const getFavorites = () => {
  const favorites = allTweets.filter((tweet) => {
    return tweet.liked
  })

  return favorites
}

export const postNewTweeter = (newTweet) => {
  allTweets.unshift(newTweet)
}

export const newFavorite = (favorite) => {
  // eslint-disable-next-line array-callback-return
  allTweets.map((tweet) => {
    if (tweet.id === favorite) {
      tweet.liked = !tweet.liked
    }
  })
}
