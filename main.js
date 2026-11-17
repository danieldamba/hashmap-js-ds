import { HashMap } from './hashmap.js'
const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


test.set('monkey', 'brown')
test.set('nut', 'brown')
test.set('orange', 'orange')
test.set('pear', 'green')
test.set('quilt', 'multicolor')
test.set('rabbit', 'white')
test.set('snake', 'green')
test.set('tiger', 'orange')
test.set('umbrella', 'black')
test.set('violin', 'brown')
test.set('watermelon', 'green and red')
test.set('xylophone', 'multicolor')
test.set('yarn', 'various colors')
test.set('zebra', 'black and white')

console.log(test.get('apple')) // Output: red
console.log(test.get('banana')) // Output: yellow
console.log(test.get('carrot')) // Output: orange
console.log(test.get('dog')) // Output: brown
console.log(test.get('elephant')) // Output: gray
console.log(test.get('frog')) // Output: green
console.log(test.get('grape')) // Output: purple
console.log(test.get('hat')) // Output: black
console.log(test.get('ice cream')) // Output: white
console.log(test.get('jacket')) // Output: blue
console.log(test.get('kite')) // Output: pink
console.log(test.get('lion')) // Output: golden
console.log(test.get('monkey')) // Output: brown
console.log(test.get('nut')) // Output: brown
console.log(test.get('orange')) // Output: orange
console.log(test.get('pear')) // Output: green
console.log(test.get('quilt')) // Output: multicolor
console.log(test.get('rabbit')) // Output: white
console.log(test.get('snake')) // Output: green
console.log(test.get('tiger')) // Output: orange
console.log(test.get('umbrella')) // Output: black
console.log(test.get('violin')) // Output: brown
console.log(test.get('watermelon')) // Output: green and red
console.log(test.get('xylophone')) // Output: multicolor
console.log(test.get('yarn')) // Output: various colors
console.log(test.get('zebra')) // Output: black and white

console.log(test.size()) // Output: 26

test.delete('apple')
console.log(test.get('apple')) // Output: undefined
console.log(test.size()) // Output: 25

// overwriting existing key
test.set('banana', 'green')
console.log(test.get('banana')) // Output: green

test.set('banana', 'yellow')
console.log(test.get('banana')) // Output: yellow
