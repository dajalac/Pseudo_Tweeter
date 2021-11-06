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

// user tweets
const userTweets = []
for (let i = 0; i < 5; i++) {
  userTweets.push({
    name: user.name,
    userName: user.userName,
    profilePhoto: user.profile,
    tweet: faker.lorem.sentence(),
    postMedia: faker.random.image()
  })
}

// All tweets initial data
const allTweets = []
for (let i = 0; i < 5; i++) {
  const fullName = faker.name.findName()
  let postPicture = null
  if (i % 2 === 0) {
    postPicture = faker.random.image()
  }
  allTweets.push({
    name: fullName,
    userName: userName(fullName) + faker.datatype.number(),
    profilePhoto: faker.image.avatar(),
    tweet: faker.lorem.sentence(),
    postMedia: postPicture

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

export const postNewTweeter = (newTweet) => {
  allTweets.unshift(newTweet)
  userTweets.unshift(newTweet)
}
