// You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]
const pokes = getPokes()
console.log('Pokes', pokes)

// Problem 1: Filter by type
// - Populate `answer1` with Pokemon names that contain the type string
const type = 'grass'
const pokesHasType = getPokesHasType(pokes, type)
const answer1 = getNameListFromPokes(pokesHasType)

/**
 * @param {Array<poke>} pokes
 * @param {string} type
 * @returns {Array<string>}
 */
function getPokesHasType(pokes, type) {
  const filteredPokes = pokes.filter((poke) => poke.types.includes(type))
  return filteredPokes
}

// Problem 2: Filter by types (AND / OR)
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ['bug', 'poison']

const pokesBy2OrTypes = getPokesHas2OrTypes(pokes, types)
const answer2Or = getNameListFromPokes(pokesBy2OrTypes)

const pokesBy2AndTypes = getPokesHas2AndTypes(pokes, types)
const answer2And = getNameListFromPokes(pokesBy2AndTypes)

/**
 * @param {Array<poke>} pokes
 * @param {Array<string>} filterTypes
 * @returns {Array<string>}
 */
function getPokesHas2OrTypes(pokes, filterTypes) {
  const filteredPokes = pokes.filter((poke) => {
    return filterTypes.some((filterType) => poke.types.includes(filterType))
  })
  return filteredPokes
}

/**
 * @param {Array<poke>} pokes
 * @param {Array<string>} filterTypes
 * @returns {Array<string>}
 */
function getPokesHas2AndTypes(pokes, filterTypes) {
  const filteredPokes = pokes.filter((poke) => {
    return filterTypes.every((filterType) => poke.types.includes(filterType))
  })
  return filteredPokes
}

/**
 * @param {Array<poke>} pokes
 * @returns {Array<string>}
 */
function getNameListFromPokes(pokes) {
  const nameList = []
  for (const poke of pokes) {
    nameList.push(poke.name)
  }
  return nameList
}

// See your results in your DevTools console
console.log('Answer 1', answer1)
console.log('Answer 2 (OR)', answer2Or)
console.log('Answer 2 (AND)', answer2And)

// --------------------------------

function getPokes() {
  const elScript = document.querySelector('#pokes')
  const json = elScript.text
  const data = JSON.parse(json)
  return data
}
