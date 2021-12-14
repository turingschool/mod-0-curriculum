---
layout: page
title: Session 4 - BE
subheading: Basic Data Types, Variables
---

## Learning Goals

- Identify and use 3 basic Data Types
- Assign and reassign variables in Ruby
- Comfortably use IRB within the Terminal

## Vocabulary

- assignment operator
- Boolean
- console
- Data Type
- Dev Tools
- Float
- Integer
- String
- variable

## Where To Run Code

By the end of this session, you'll be able to use the your terminal, specicially a tool called `irb`, to run and check your code. This is a great tool for a beginner, as well as a seasoned software developer, to have. `irb` will allow you to explore and learn Ruby and test out code you've written in a low stake environment. It is quick and easy to open up the terminal and run your code immediately.

### `irb`: Tips & Tricks

- Open and close the Terminal quickly with keyboard shortcut `cmd + space` to open Spotlight. Then start typing "terminal" and it should auto-fill. Press `return`. _Note: there are other ways to open your Terminal but keyboard shortcuts are most efficient and the norm in the industry_
- Regardless of your working directory, you can type `irb` then press `return` to open up an what is referred to as an "irb session". A prompt that looks something like `irb(main):001:0>` will appear; you'll eventually type code to the right of that
- The font size of your terminal can be increased or decreased with shortcuts `cmd + +` or `cmd + -`
- To exit the irb session, type `exit` in all lowercase, then press `return`

<div class="try-it">
  <h3>You Do: <code>irb</code></h3> 
  <ul>
    <li>Open the Terminal using Spotlight.</li>
    <li>Open an irb session</li>
    <li>Increase the size of your font</li>
    <li>Exit the irb session</li>
  </ul>
</div>

## Data Types

In this session, we will use 4 of Ruby's Data Types:
- **String** - Any series of characters (alpha, numeric, or symbol) between quotation marks
- **Integer** - Any whole positive and negative number, including 0
- **Float** - Any positive and negative number that involves a decimal
- **Boolean** - `true` or `false`

To connect to how these data types are used in an application we all have some experience with, consider the steps you took to enroll at Turing in the Populi application:
- **String** - You provided your email address and it was stored as a string, for example: `"helloworld@gmail.com"`
- **Integer** - You provided your date of birth and the program calcalated your age, for example: `37`
- **Float** - You paid your deposit and that amount was stored as `1200.00`
- **Boolean** - Once you paid your deposit, the "paid deposit" field said `true`

<div class="try-it">
  <h3>Data Types & Breakout Room Roles (Groups of 3-4):</h3> 
  <p><em>Note: You are doing this work in the breakout room to practice collaboration and communication just as much as to practice identifying Data Types.</em></p>
  <ul>
    <li>Identify a time keeper</li>
    <li>Spend 2 minutes independently brainstorming Data Types for an app you are familiar with. Be ready to share with your group: the name of the app, example for String, Integer, Float, and Boolean</li>
    <li>Spend 2 minutes sharing out and asking clarifying questions if needed</li>
    <li>Identify a presenter (this should be someone who did not keep time). When we return to the main Zoom, this person will be asked to share the app and examples that a <em>different</em> student brainstormed</li>
  </ul>
</div>

## Variables

Pieces of data in the various types we've discussed so far are valid Ruby code just as they are. We can demonstrate that by typing `"helloworld@gmail.com"` or `37` or `false` into irb. We know they are valid because we don't get an error. If `helloworld@gmail.com` is typed in, we _will_ get an error, and possibly a helpful suggestion! 

However, if we ever want to reference that email address ever again in our code, the only way would be to read that part of the screen and manually type it out again - and that's not going to make for a very efficient application.

**Variables** are what allow us to store data in a Ruby program. We can think of them as storage containers that hold items we care about and want to keep track of. The label on top of that container is what we can compare to a variable _name_. Variables can store any of the Data Types we've learned today as well as others that you'll learn about in upcoming lessons.

### Variable Syntax

In Ruby, we declare variables by typing the name of the variable, the **assignment operator**, then the value being stored.

```ruby
email = "helloworld@gmail.com"
starting_age = 37
amount_paid = 1200.00
deposit_paid = true
```

>To describe the first line of code in the previous example, one might say "This line of code declares a variable named `email` and assigns it to the String of `helloworld@gmail.com`".

If our Ruby program has data stored in variables, we are able to reference those variables at any time to access the data. This can be demonstrated in irb.

### Best Practices for Naming Variables

Naming can be hard, but is important to be thoughtful about and follow conventions of the language you are working with so that your code is easily accessible and readable for those you are collaborating with. A few key points:
- All Ruby variables should use `snake_case` - all characters should be lower cased; in multi-word variables, words should be separated with an underscore
- Variable names should descirbe the type of data they hold without being overly verbose or specific (examples: `name`, `email`, etc. non-examples: `x`, `ftga23`, `name_of_incoming_mod_1_be_student`)

### Reassigning Variables

We often need to write code that changes the data stored in a variable. Consider this Populi example:
- When a student first creates a profile, the `deposit_paid` variable is automatically assigned to `false`
- Once the student pays their deposit, some code is triggered to change that value to `true`

To do that, we use the exact same syntax that we used to make the original assignment. We can run the code that follows, or code like it, in irb to demonstrate that the value has changed.

```ruby
deposit_paid = false
deposit_paid # false

deposit_paid = true
deposit_paid # true
```

<div class="try-it">
  <h3>Variables & Driver/Navigator (Pairs)</h3>
  <p><strong>Roles:</strong> The partner with the birthday closest to New Years will screen share and be the driver. The other partner will be the navigator, who dictates what the driver should do/type. In the Terminal, complete the tasks that follow:</p>
  <ul>
    <li>Open an irb session</li>
    <li>Increase the font size in the Terminal so your partner can easily view it</li>
    <li>Declare 4 variables; a String, Integer, Float, and Boolean</li>
    <li>Call each variable to confirm it was stored correctly</li>
    <li>Reassign each variable to a new value, then call it again to confirm it does indeed store the new value</li>
    <li><em>If time permits, switch roles and start over</em></li>
  </ul>
  <p>When you come back from the breakout room, be ready to screenshare with the whole group. If your pair is called on to share, the driver will be expected to screenshare <em>and</em> speak to the work you did as a team.</p>
</div>

## Code Annotations

Being a developer involves more than just writing code. A big part of the job is actually reading other peoples code and then adding to it or modifying it. In order to do so, you’ll need to build your skills around:

- Reading other people’s code
- Annotation (adding your notes) to code other people have written
- Articulating (speaking about) what a line of code is doing, using precise technical vocabulary
- Asking questions (to yourself or others) to make sense of new code

Annotating code is a great way to understand how code works and dive into code that you yourself did not write. One strategy to annotating code is to write comments directly in the code you are trying to decipher.

Text editors, like Atom, allow you to add comments in your code. You can highlight a selection and use `cmd + /` to turn that text into a comment. You can also manually type `#` at any point of a line and all characters after that will be treated as a comment. You should see your syntax highlighting change to a different color when code has been commented out!

Annotation Example:
```ruby
dog_name = "Oscar"
dog_age = 10
hungry_dog = true

puts dog_name, dog_age, hungry_dog

dog_name = "Sodie"
dog_age = 11

puts dog_name, dog_age, hungry_dog
```

```ruby
#v ariable dog_name is declared and assigned to the String of "Oscar"
dog_name = "Oscar"
# variable dog_age is declared and assigned to the Integer of 10
dog_age = 10
# variable hungry_dog is declared and assigned to the Boolean of true
hungry_dog = true

# Three variables - dog_name, dog_age, and hungry_dog are printed out
# Expected output: 
  # "Oscar"
  # 10
  # true
puts dog_name, dog_age, hungry_dog

# variable dog_name is reassigned to the String of "Sodie"
dog_name = "Sodie"
# variable dog_age is reassigned to the Integer of 11
dog_age = 11

# Three variables - dog_name, dog_age, and hungry_dog are printed out
# Expected output: 
  # "Sodie"
  # 11
  # true
puts dog_name, dog_age, hungry_dog
```

## Putting it All Together

Use everything you’ve learned with git, GitHub, Data Types and variables, complete this challenge:

1. Create a new directory called `variable_practice`
1. Inside that directory, create a file called `variables.rb`
1. Initialize `git` inside of the directory
1. Commit your work (Think about what message should you use here)
1. Go to GitHub and create a repo with the same name - `variable_practice`
1. Push your local directory to GitHub by following the instructions
1. In your `variables.rb` file, add a few variables that are assigned to Strings
1. Commit your work
1. In your `variables.rb` file, add a few variables that are assigned to Integers
1. Commit your work
1. In your `variables.rb` file, add a few variables that are assigned to Booleans
1. Commit your work
1. In your `variables.rb` file, leave the original String variables as declared, but add some code to reassign them to different values
1. Commit your work
1. Annotate ONE of the files
1. Commit your work
1. Push your changes to GitHub