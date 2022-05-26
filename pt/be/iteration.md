---
layout: lesson
title: Iteration
---

## Learning Goals

- Explain the concept of iterating over an Array
- Implement syntax for `each` for a variety of situations

## Vocabulary

- <span class="vocab">code block</span>
- <span class="vocab">iterate</span>
- <span class="vocab">method</span>

## Warm Up

<div class="s-card">
  <p>Define a variable that stores an Array of 4 Strings; each String should be an email address.</p>
  <p>Using the tools we've learned about in Mod 0 so far, print out a sentence that says, "Send email to: [insert email address]" for each email address in your array.</p>
  <p>Be ready to discuss!</p>
</div>
<br>


## **`each`**

`each` is a <span class="vocab">method</span> in Ruby that can be used to <span class="vocab">iterate</span> over an Array. This means, it can take action on each element of an Array, even when the code for that action is only written once. Look at the following code snippets, and notice what is familiar and what is new to you:

```ruby
nums = [1, 2, 3, 4]

nums.each do |num|
  puts "The current number is #{num}."
end

# =======================

bigger_nums = [12, 18, 22, 64, 122]

bigger_nums.each do |num|
  puts "The current number is #{num}."
end
```

<div class="s-card">
  <p>Before we break down each part of the code, <a href="https://replit.com/@turingschool/m0eachintro#main.rb" target="blank">fork this repl.it</a> which has the same code in the snippets above.</p> 
  <p>Run the code. Work to make sense of how this code is producing the outcome it is. <em>A great way to do that is tweak one piece of the code, then observe the result.</em></p>
</div>
<br>

Breakdown of an `each` method call:
- **`nums`** - this tells Ruby which Array it should iterate over
- **`.each`** - this calls the `each` method on the Array. Ruby now expects the following:
  - **`do`** - this is a Ruby keyword that must follow `each`; it tells the program to start taking action
  - **`|num|`** - inside the pipe characters (`|`, which can be found just under the delete key on your keyboard), the developer decides on a name for a single element in the Array. Usually, this is the singular form of the Arrays variable name
  - 1 or more lines of code, indented. This code will run for **each** of the elements in the Array. If there are 100 elements, this line will run 100 times. If there is 1 element, this line will run 1 time
  - **`end`** - this tells the program to be done with the `each` block, and is required.
- Anything written inside of the `do` and `end` is referred to as the <span class="vocab">code block</span>

We can also read through annotations of the same code snippet to understand what each part does: 

```ruby
# declare a variable nums, stores an Array of 4 Integers
nums = [1, 2, 3, 4]

# Call the each method on nums Array
# Use "num" as variable name for each element as it's being iterated over
nums.each do |num|
  # puts an interpolated sentence using the current value of num
  puts "The current number is #{num}."
# end the each block
end

# The each block will run 4 times because there are 4 elements in the Array
# The first time it runs, the Integer 1 is the value of the num variable
# The second time it runs, the Integer 2 is the value of the num variable
# The third time it runs, the Integer 3 is the value of the num variable
# The fourth time it runs, the Integer 4 is the value of the num variable
# Once it's run on every element in the Array, it reads the end keyword, and is finished
```

<br>

## Predict What Will Happen

Read each of the following code snippets and predict what the output will be. Then, run the code in `irb` (or in your preferred environment) to confirm your prediction.

```ruby
balances = [100, 49, 98, 73, 56]

balances.each do |balance|
  puts balance + 10
end

# How many times did the code in the each block run? Why?
```

```ruby
names = ["Cindy", "Oscar", "Rigo", "Joe", "Stephanie", "Tiff"]

names.each do |name|
  puts name.length
end

# How many times did the code in the each block run? Why?
# What was the value of "name" the first time the code ran?
```

## Practice

Use the `each` method to solve each problem. You can do this work in the place that works best for you - `irb`, a Ruby file you create and open in Atom, or somewhere else.

<div class="s-card">
  <p>Print out a greeting to each friend:</p>
  <p><code>friends = ["Joe", "Jeff", "Alex", "Justina"]</code></p>
</div>
<br>

<div class="s-card">
  <p>Find the square of each number:</p>
  <p><code>numbers = [2, 4, 6, 8, 10, 12]</code></p>
</div>
<br>

<div class="s-card">
  <p>Print out each String in reverse (not sure how to do that? Google!):</p>
  <p><code>words = ["sunny", "beach", "waves", "relax"]</code></p>
</div>
<br>

<div class="s-card">
  <p>Print out numbers that are greater than 10:</p>
  <p><code>numbers = [10, 11, 7, 19, 4, 52, 89, 9, 12, 10]</code></p>
</div>
<br>

<div class="s-card">
  <p>Challenge: Print out only names that begin with "P":</p>
  <p><code>names = ["Pilar", "Peach", "Pamela", "Tan", "Amanda", "Phil"]</code></p>
</div>
<br>

## Check For Understanding

[Follow the directions in the README of this GitHub repository](https://github.com/turingschool/arrays2_cfu-am0), and submit your fork in the submission form.

<br>
<br>
<br>