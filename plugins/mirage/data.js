import faker from 'faker'

// get just first name
const userName = (name) => {
  const nameList = name.split(' ')
  return '@' + nameList[0].toLowerCase()
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

// follow suggestions
const suggestions = []
for (let i = 0; i < 2; i++) {
  const fullName = faker.name.findName()
  suggestions.push({
    name: fullName,
    userName: userName(fullName) + faker.datatype.number(),
    profilePhoto: faker.image.avatar()
  })
}

export const getAllTweets = () => {
  return allTweets
}

export const getFollowSuggestions = () => {
  return suggestions
}
