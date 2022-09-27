## Data Types - Review
Last session we spent some time learning about data types. In small groups, take turns discussing the different data types and the correct syntax for using each.

## Variable Assignment/Re-Assignment - Review
In small groups, discuss what variables are and why they are useful in programming. As a group, come up with variable examples in your notebook for the following data types:
- strings
- numbers
- booleans
- arrays

## Modeling Data Using Objects
Take a look at the following variables from last session that we used to start beginning to model a `mountain`

```js
var name = 'Mt. Muffinman';
var nearestTown = 'Alma, CO';
var difficultyLevel = 'Advanced';
var elevation = 10578;
var numberOfTrails = 17;
var parkingLotCapacity = 50;
var beenSummited = true;
var isHaunted = false;
var isTreacherous = true;
var localFauna = ['bear', 'elk', 'chipmunk'];
var localFlora = ['lilac', 'bluebell', 'fireweed', 'columbine'];
var parkRangers = ['Dave Brackmann'];
```

To a human/developer, we can scan these variables and naturally make a connection that they are related. 

However, to a computer, no such connection currently exists. All the computer sees is 12 separate, un-related variables. While this may not seem like a big deal, having a way to group related data together is a core tenant of programming, especially the Object-Oriented Programming paradigm you will learn at Turing!

So, how do we group this data together in a way that makes sense to humans AND the computer? Enter `objects` - one of the most common and useful data structures in programming!

## Object Syntax
Take a look at the example object below. What do you notice about it?

```js
var exampleObject = {
  name: "cool object",
  favoriteNum: 21,
  collectionOfLetters: ['a', 'x', 'p']
}
```

Let's break down this object by it's unique syntax...

### Curly Braces `{ }`
These symbols are used to denote an object. Technically, you can have an "empty" object of just two curly braces - `{ }`. However, all you need to know is that when you see these curly braces you should note that you are dealing with an object!

### Key - Value Pairs
Key-value pairs are essentially variables that exist within an object. These are used to model data that is specific to that object!

Let's dive in a little deeper...

#### Keys
- Think of these as variable names specific to that object
- Keys must be **UNIQUE** - don't use the same key name twice!
- Looking at our example, we can see **3** keys...
  - `name`
  - `favoriteNum`
  - `collectionOfLetters`
- You should follow the same rules for naming variables as you do for naming your keys!

#### Values
- Values are the associated to specific keys
- Think of these as the values associated to specific variables, only this time, within an object
- Values can be assigned to any data type - strings, numbers, arrays, booleans, even more objects!
- Values do **NOT** need to be unique - you could conceivably have the same value multiple times within an object
- Looking at our example, we can see **3** distinct values...
  - `"cool object"` is the value assigned to the `name` key
  - `21` is the value assigned to the `favoriteNum` key
  - `['a', 'x', 'p']` is the value assigned to the `collectionOfLetters` key

#### Other Important Syntax
- We use a colon `:` to separate our **keys** from our **values**
- We use a comma `,` after each key-value pair
- We still want to assign our object to a variable so that the computer knows how to reference the object itself!

## Putting It All Together
Creating an object is just like declaring any other variable - only this time, the variable's value is assigned to an object.

So to create a new object, I would follow these steps:
1. Use the `var` keyword to declare a new variable
1. Assign the variable a descriptive name that a human can understand
1. Add the assignment operator `=`
1. Add your curly braces `{ }` - we recommend adding both at once so that you don't forget a closing curly bracket later on!
1. Add your key-value pairs just as you would normal variables, only this time use a `:` to separate them and a `,` after each key value pair

So, if we modeled our `mountain` using an object, it may look something like this:

```js
var mountain = {
 name: 'Mt. Muffinman',
 nearestTown: 'Alma, CO',
 difficultyLevel: 'Advanced',
 elevation: 10578,
 numberOfTrails: 17,
 parkingLotCapacity: 50,
 beenSummited: true,
 isHaunted: false,
 isTreacherous: true,
 localFauna: ['bear', 'elk', 'chipmunk'],
 localFlora: ['lilac', 'bluebell', 'fireweed', 'columbine'],
 parkRangers: ['Dave Brackmann'],
}
```

Now, all of this related information is appropriately captured in a single variable - `mountain`!

### You Do - Modeling Using Objects
Let's take everything we've worked on with git, GitHub, data types and variable assignment to build a model of a real world thing of your choice - only this time, using an `object`!

#### Directions
1. Create a new directory called `object-practice`
1. Inside that directory, create a file called `object-examples.js`
1. Initialize `git` inside of the directory
1. Commit your work (What message should you use here?)
1. Go to GitHub and create a repo with the same name - `object-practice`
1. Push your local directory to GitHub by following the instructions
1. In your `object-examples.js` file, add a model for a `car` using object syntax
1. Commit your work
1. In your `object-examples.js` file, add a model for an `animal` of your choice using object syntax
1. Commit your work
1. In your `object-examples.js` file, add a model for a `customer` using object syntax
1. Commit your work
1. Push your changes to GitHub

