# find-pokes-by-types

Please solve JavaScript problems described in the CodePen link below, and send us your work in any ways. You can fork on CodePen, paste your JS code in email, create a Gist, etc. (To fork, log in and press the Fork button at the bottom.)

https://codepen.io/ginpei/pen/LYXwyKQ?editors=0010

Here is a copy of the question code:

```js
// You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]
const pokes = getPokes()
console.log('Pokes', pokes)

// Problem 1: Filter by type
// - Populate `answer1` with Pokemon names that contain the type string
const type = 'grass'
const answer1 = [] // TODO

// Problem 2: Filter by types (AND / OR)
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ['bug', 'poison']
const answer2Or = [] // TODO
const answer2And = [] // TODO
```
