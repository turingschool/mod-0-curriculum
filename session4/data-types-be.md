### Working with Data - Variables x Data Types
At it's most basic level, computer programming is simply working with, storing and presenting data. 

In programming, one of the most common ways to interact with data is to store data/information in a `variable` - this allows us to reference a word in our computer's memory that returns the data we've stored.

We are going to learn about two concepts together as we dive into our first technical content: variable assignment and data types. 

### Variable Assignment x Re-assignment
In Ruby, assigning/declaring a variable follows a very clear pattern.
**Step 1 -** Write a name for your variable in `snake_case`
- Separate words with an underscore `_` and make sure each word starts with a `lowercase` letter
- Try to name the variable in a descriptive way - another developer should be able to read the variable name and have a good understanding of what the data represents!
- Need to see more information on Case types in Coding?

![Case Types](https://res.cloudinary.com/practicaldev/image/fetch/s--sUdRHMkr--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://cl.ly/330i2s0q2j3o/Image%25202018-08-06%2520at%252012.13.40%2520PM.png)

**Step 2 -** Add an assignment operator `=`

**Step 3 -** Assign a value to your variable! This will be assigned to one of the following data types:
- String
- Integer
- Float
- Boolean
- Array

Before we get into specific syntax examples, we need to get a better understanding of the data types we will encounter in Ruby.

### Breakouts - Research x Teachout
To start building on our Googling skills we learned earlier, we are going to break out into small groups to research AND present on a specific data type.

You will be assigned a specific data type to research with your breakout group. Together, we want you to report back on:
- Basic definition of your assigned data type
- Example of the proper syntax for working with this data type
- 1-2 examples of variables that use this data type

You will be assigned to one of these data types:
- String
- Integer + Float
- Boolean
- Array
- Hash (extension)

When we share out - be sure to take notes in your notebook about each data type and syntax!


<div class="try-it">
<h3>Data Type Definitions: DON'T CLICK UNTIL AFTER BREAKOUTS</h3>
  <div>
    <p class="toggle-show">
      String Definition (click here)
    </p>
    <div class="toggle-content hidden">  
      <p>A <span class="vocab">string</span> is a data type used represent text. Strings can contain alphabet characters in addition to spaces, numbers, and special characters.</p>
      <p>Examples:</p>
      <ul>
        <li><code>poem = "two roads diverged in a yellow wood"</code></li>
        <li><code>office_phone_number = "(303) 731-3117"</code></li>
        <li><code>school_name = "Turing School of Software & Design"</code></li>
      </ul>
    </div>
  </div>
  <div>
    <p class="toggle-show">
    Integers and Floats Definition (click here)
  </p>
    <div class="toggle-content hidden">
      <p><strong><span class="vocab">Integer</span>:</strong> An integer is a whole number (not a fraction) that can be positive, negative, or zero. Unlike floating point numbers, integers cannot have decimal places.</p>
      <p>Examples:</p>
      <ul>
        <li><code>number_of_cats = 10</code></li>
        <li><code>remaining_energy = 0</code></li>
        <li><code>windchill = -25</code></li>
        <li><code>balance = 5148</code></li>
      </ul>
      <p><strong><span class="vocab">Float</span>:</strong> As the name implies, floating point numbers are numbers that contain floating decimal points. They can be positive or negative.</p>
      <p>Examples:</p>
      <ul>
        <li><code>deduction = -5.5</code></li>
        <li><code>savings_rate = 0.01</code></li>
        <li><code>temperature = 98.2</code></li>
      </ul>
    </div>
  </div>
  <div>
    <p class="toggle-show">
      Boolean Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>A <span class="vocab">boolean</span> value is either true or false. Boolean values are used in boolean logic, which is a subset of algebra used for creating true/false statements.</p>
      <p>Examples:</p>
      <ul>
        <li><code>is_logged_in = true</code></li>
        <li><code>is_scared = false</code></li>
      </ul>
    </div>
  </div>
  <div>
    <p class="toggle-show">
      Array Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>An <span class="vocab">array</span> is a data structure that represents a group of things.</p>
      <p>You can think of an array as a collection, box, or container. Instead of saying "I have a collection of shirts," you could say "I have an array of shirts." The phrase "a container of pencils" would become "an array of pencils."</p>
      <p>Typically, elements in an array are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.</p>
      <p>Examples:</p>
      <ul>
        <li><code>recent_scores = [26, 24, 28, 25, 27, 27, 26, 27]</code></li>
        <li><code>modules = ["Mod 0", "Mod 1", "Mod 2", "Mod 3", "Mod 4"]</code></li>
        <li><code>answer_key = [false, true, true, true, false, true, true]</code></li>
      </ul>
    </div>
  </div>
  <div>
    <p class="toggle-show">
      <strong>EXTENSION</strong> Hash/Object Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>A <span class="vocab">hash</span> or <span class="vocab">object</span> is a collection of key-value pairs. It is similar to an array in that it is a collection of things, but in the case of hashes/objects, we are <strong>pairing</strong> data together.</p>
      <p>Sometimes, this data type is referred to as a dictionary because of the pairing of word -> definition.</p>
      <p>For example, you might have a hash/object where the keys are first names and the values are last names.</p>
      <p>When I think about whether or not I need to use a hash, I ask myself "Is this a collection of data where the pairing of items matters?"</p>
      <p>Examples:</p>
      <ul>
        <li><code>total_students = {"9th grade": 110, "10th grade": 125, "11th grade": 66, "12th grade": 70}</code></li>
        <li><code>mod_assignments = { "Mod 0": "Tim and David", "Mod 1": "Mike and Sal", "Mod 2": "Brittany and Robbie" }</code></li>
      </ul>
    </div>
  </div>
</div>

### Syntax Practice using `irb`
We are going to learn about how you can use a tool known as `irb` to start practicing writing and executing Ruby syntax. (See [here](https://learn.co/lessons/irb-readme) for an overview of what `irb` is and how to access it from the terminal)

### Practice
* Assign a variable called `pizza` set to a value of a string
* Assign a variable called `is_hungry` a value of a boolean
* Assign a variable called `number` a value of an integer
* Reassign that `number` variable so that is has a different value
* Assign a variable called `teachers` a value of an array with the names 'Ellen', 'Robert', and 'David'
* Try the following (these may take some googling):
  * Create another string variable and add combine it with your pizza variable
  * Create another integer variable and multiply it by your number variable
  * Remove the last item from your teachers array


## Modeling "Real World Things" Using Code
In Mod 0, we are going to start practicing how to use variables and data to "model" real world things. This is the beginning of your journey into Object Oriented Programming, which is one of the foundational programming approaches that you will learn much more about in Mod 1. Today's practice will also help you tremendously when you start working with Classes and Instances as part of your Mod 1 Prework!

Today we are going to focus on modeling the `attributes` of a given thing. Think of these as the variables and values that would make up that thing in real life.

Let's try to use all of the different data types that we've learned so far to model something that definitely doesn't exist in computers, a `mountain`!

```rb
#variables that use strings
name = 'Mt. Muffinman';
nearest_town = 'Alma, CO';
difficulty_level = 'Advanced';

#variables that use numbers
elevation = 10578;
number_of_trails = 17;
parking_lot_capacity = 50;

#variables that use booleans
been_summited = true;
is_haunted = false;
is_treacherous = true;

#variables that use arrays
local_fauna = ['bear', 'elk', 'chipmunk'];
local_flora = ['lilac', 'bluebell', 'fireweed', 'columbine'];
park_rangers = ['Dave Brackmann'];
```

### You Do - Variable Assignment
Let's take everything we've worked on with git, GitHub, data types and variable assignment to build a model of a real world thing of your choice!

#### Directions
1. Create a new directory called `variable-practice`
1. Inside that directory, create a file called `model-1.rb`
1. Initialize `git` inside of the directory
1. Commit your work (What message should you use here?)
1. Go to GitHub and create a repo with the same name - `variable-practice`
1. Push your local directory to GitHub by following the instructions
1. In your `model-1.rb` file, add a few variables that are assigned to `strings`
1. Commit your work
1. In your `model-1.rb` file, add a few variables that are assigned to `floats` or `integers`
1. Commit your work
1. In your `model-1.rb` file, add a few variables that are assigned to `booleans`
1. Commit your work
1. In your `model-1.rb` file, add a few variables that are assigned to `arrays`
1. Commit your work
1. In your `model-1.rb` file, add a few variables that are assigned to `hashes`
1. Commit your work
1. Push your changes to GitHub

### Still confused?
Watch [this video](https://www.youtube.com/watch?v=S-IeM4xnCog&list=PL1Y67f0xPzdMFq2S1bK7E7veT_BbK-zjt&index=3) on variable assignment in Ruby. Do some additional research and then post any additional questions in the class Slack!
