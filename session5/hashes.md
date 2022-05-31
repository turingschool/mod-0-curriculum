## Data Types - Review
Last session we spent some time learning about data types. In small groups, take turns discussing the different data types and the correct syntax for using each.

## Variable Assignment/Re-Assignment - Review
In small groups, discuss what variables are and why they are useful in programming. As a group, come up with variable examples in your notebook for the following data types:
- strings
- integers/floats
- booleans
- arrays

## Modeling Data Using Hashes
Take a look at the following variables from last session that we used to start beginning to model a `mountain`

```rb
name = 'Mt. Muffinman'
nearest_town = 'Alma, CO'
difficulty_level = 'Advanced'
elevation = 10578
number_of_trails = 17
parking_lot_capacity = 50
been_summited = true
is_haunted = false
is_treacherous = true
local_fauna = ['bear', 'elk', 'chipmunk']
local_flora = ['lilac', 'bluebell', 'fireweed', 'columbine']
park_rangers = ['Dave Brackmann']
```

To a human/developer, we can scan these variables and naturally make a connection that they are related.

However, to a computer, no such connection currently exists. All the computer sees is 12 separate, un-related variables. While this may not seem like a big deal, having a way to group related data together is a core tenant of programming, especially the Object-Oriented Programming paradigm you will learn at Turing!

So, how do we group this data together in a way that makes sense to humans AND the computer? Enter `hashes` - one of the most common and useful data structures in programming!

NOTE: Hashes may sometimes be referred to as objects.

## Hash Syntax
Take a look at the example object below. What do you notice about it?

```rb
example_hash = {
  "name" => "cool object",
  "favorite_num" => 21,
  "collection_of_letters" => ['a', 'x', 'p']
}
```

Let's break down this hash by it's unique syntax...

### Curly Braces `{ }`
These symbols are used to denote an hash. Technically, you can have an "empty" hash of just two curly braces - `{ }`. However, all you need to know is that when you see these curly braces you should note that you are dealing with an hash!

### Key - Value Pairs
Key-value pairs are essentially variables that exist within an hash. These are used to model data that is specific to that hash!

Let's dive in a little deeper...

#### Keys
- Think of these as variable names specific to that hash
- Keys must be **UNIQUE** - don't use the same key name twice!
- Looking at our example, we can see **3** keys...
  - `name`
  - `favorite_num`
  - `collection_of_letters`
- Keys can be assigned to any datatype, but convention is to use strings (like above) or symbols

#### Values
- Values are the associated to specific keys
- Think of these as the values associated to specific variables, only this time, within an hash
- Values can be assigned to any data type - strings, numbers, arrays, booleans, even more hashes!
- Values do **NOT** need to be unique - you could conceivably have the same value multiple times within an hash
- Looking at our example, we can see **3** distinct values...
  - `"cool hash"` is the value assigned to the `name` key
  - `21` is the value assigned to the `favorite_num` key
  - `['a', 'x', 'p']` is the value assigned to the `collection_of_letters` key

#### Other Important Syntax
- We use a comma `,` after each key-value pair
- We still want to assign our object to a variable so that the computer knows how to reference the hash itself!
- We use a hash rocket  `=>` to separate our **keys** from our **values**
- NOTE: In the wild, it's more common to see hash keys using symbol datatypes (ex: ```:name```). When using symbols for keys, you should omit the hash rocket:
  ```rb
  example_hash = {
    name: "cool object",
    favorite_num: 21,
    collection_of_letters: ['a', 'x', 'p']
  }
  ```


## Putting It All Together
Creating an object is just like declaring any other variable - only this time, the variable's value is assigned to an object.

So to create a new object, I would follow these steps:
1. Declare a new variable with a descriptive name that a human can understand
2. Add the assignment operator `=`
3. Add your curly braces `{ }` - we recommend adding both at once so that you don't forget a closing curly bracket later on!
4. Add your key-value pairs just as you would normal variables, only this time use a `=>` to separate them and a `,` after each key value pair
5. Be sure your keys are wrapped in double quotes!

So, if we modeled our `mountain` using an object, it may look something like this:

```rb
mountain = {
  "name" => 'Mt. Muffinman',
  "nearest_town" => 'Alma, CO',
  "difficulty_level" => 'Advanced',
  "elevation" => 10578,
  "number_of_trails" => 17,
  "parking_lot_capacity" => 50,
  "been_summited" => true,
  "is_haunted" => false,
  "is_treacherous" => true,
  "local_fauna" => ['bear', 'elk', 'chipmunk'],
  "local_flora" => ['lilac', 'bluebell', 'fireweed', 'columbine'],
  "park_rangers" => ['Dave Brackmann']
}
```

Now, all of this related information is appropriately captured in a single variable - `mountain`!

### You Do - Modeling Using Hashes
Let's take everything we've worked on with git, GitHub, data types and variable assignment to build a model of a real world thing of your choice - only this time, using an `hash`!

#### Directions
1. Create a new directory called `hash-practice`
1. Inside that directory, create a file called `hash-examples.rb`
1. Initialize `git` inside of the directory
1. Commit your work (What message should you use here?)
1. Go to GitHub and create a repository with the same name - `hash-practice`
1. Push your local directory to GitHub by following the instructions
1. In your `hash-examples.rb` file, add a model for a `car` using hash syntax
1. Commit your work
1. In your `hash-examples.rb` file, add a model for an `animal` of your choice using hash syntax
1. Commit your work
1. In your `hash-examples.rb` file, add a model for a `customer` using hash syntax
1. Commit your work
1. Push your changes to GitHub
