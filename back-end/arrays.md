---
layout: lesson
title: Arrays
---

## Learning Goals

- Use Ruby syntax to declare variables that store Arrays in Ruby
- Use basic Array methods to manipulate data in Arrays

## Vocabulary

- <span class="vocab">Array</span>
- <span class="vocab">bracket notation</span>
- <span class="vocab">element</span>
- <span class="vocab">index position</span>
- <span class="vocab">method</span>
- <span class="vocab">square brackets `[]`</span>

## Arrays

Let's consider a list of students in a class, using the programming tools we've learned thus far:

```ruby
student1 = "Josiah"
student2 = "Cindy"
student3 = "Violet"
student4 = "Jhun"
# on and on.
```

As the list of students inevitably changes and grows, this is difficult to maintain programmatically. If we wanted to send an email to every student or perform any other task for every student, we would have to write code for each, individual student, which defeats the purpose of having a computer program automate tasks.

An <span class="vocab">Array</span> is a Ruby Data Type that allows us to store multiple pieces of data in _one_ variable. They can be compared to lists. The Array is an incredibly powerful and necessary Data Type for building web applications.

Thinking back to the Populi platform that helped you enroll at Turing, many Arrays are used to power its functionality:

- **student roster** - list of *all names* in a given cohort
- **course catalog** - list of *all courses* we offer

Notice that in the previous examples, the items in a given list are all of the _same type_.

### Array Syntax

- An Array is declared with the <span class="vocab">square brackets</span> (they can be typed with the keys to the right of the `p` character on your keyboard).
- Each piece of data in an Array is referred to as an <span class="vocab">element</span>.
- Elements should be separated with a comma and space.
- An Array can hold any number of elements.

```ruby
students = ["Cindy", "Josiah", "Rigo"]
```

>To describe what the previous line of code does, one might say, "The `students` variable stores an Array of Strings. This array has 3 elements."

<br>
<div class="s-card">
  <h3>Talking and Writing about Code</h3>
  <p>In your notebook, write down the code that follows, then write a sentence that describes what that line of code does:</p>
  <p><code>ticket_prices = [87, 67, 99, 90, 87]</code></p>
</div>

<br>
<div class="s-card s-border-yellow-500">
  <h3>Best Practices for Arrays</h3>
  <ul>
    <li>The name of a variable that stores an Array should usually be plural to indicate that it has the potential to hold <em>many</em> elements of that type.</li>
    <li>While Ruby technically allows an Array to hold multiple Data Types, it is not best practice and in any real-world application, will usually be unhelpful anyways.</li>
  </ul>
</div>
<br>

### Accessing Elements

To access one element from an array, bracket notation and a number that corresponds with that element should be used. As weird as it may seem, <a href="https://skillcrush.com/blog/why-programmers-start-counting-at-zero/" target="_blank">counting starts with 0 in most programming languages</a>. That number is referred to as an <span class="vocab">index position</span>.

Through reading the code snippets below, one can infer that the first element is in index position 0, and counting increments by 1.

```ruby
# in irb
students = ["Cindy", "Josiah", "Rigo"]

students[0]
# --> "Cindy"

students[2]
# --> "Rigo"
```

```ruby
# in VS Code, when running the file in the command line
students = ["Cindy", "Josiah", "Rigo"]

puts students[0]
# --> "Cindy"

puts students[2]
# --> "Rigo"
```

<div class="s-card">
  <h3>Storing Arrays, Accessing Elements: Part 1</h3>
  <p>Given the following array, answer each question. Notice the way technical vocabulary is used to describe these things, and use this as a guide to practice articulating your responses, and how you talk about Arrays in the future.</p>
  <p><code>ticket_prices = [87, 67, 99, 90, 87]</code></p>
  <ul>
    <li>How many elements are in this Array?</li>
    <li>What is the index position of the Integer <code>99</code>?</li>
    <li>What is the value of the element in index position 3?</li>
    <li>What is the value of the element in index position 0?</li>
    <li>What is the index position of the last element in this Array?</li>
  </ul>
</div>
<br>

<div class="s-card">
  <h3>Storing Arrays, Accessing Elements: Part 2</h3> 
  <p>Complete the following work in an <code>irb</code> session:</p>
  <ul>
    <li>Declare a variable named <code>friends</code> that stores an Array of 5 Strings, each a friend's name.</li>
    <li>Access the third element.</li>
    <li>Access the last element.</li>
    <li>Access the first element.</li>
  </ul>
</div>
<br>

### Array Methods

In most cases, a developer want to modify data in an Array at one point or another. Today, we will learn a number of ways to do that. They will probably not satisfy your every question of "How does X app do Y?" but this will lay an important foundation for the concept of Array methods, and some strategies to get that information you are craving!

An Array <span class="vocab">method</span> is a piece of functionality that is built into the Ruby language, intended to be used on Arrays specifically. Each method has a specific job to perform; we can use it if we want, but we can't modify a built-in method. There are many Array methods - like anything else in programming, you will memorize a handful that you regularly use, then look to documentation for those you don't use as regularly.

### Array Methods Syntax

To use an Array method in Ruby, we first must tell Ruby which Array we want to perform the method on. After that, a dot or period, followed by the name of the method.

```ruby
students = ["Cindy", "Josiah", "Rigo"]
students.pop

p students
```

>To describe what the previous line of code does, one might say, "This line of code calls the `pop` method on the `students` Array."

<br>

### Learning From Reading Code You Don't Know

As a developer, an important skillset is researching and reading documentation (and to note, in many cases, documentation is not always current, rarely perfect, and usually quite dense).

Since researching and reading documentation can sometimes be time-consuming, another skill is to be able to make the decision about when it's time to go to Google. In this activity, you will be provided with some structure to teach yourself a few technical concepts. The main goal is **not** to learn the technical concepts, it's to practice and explore _strategies to learn_ in an environment such as this, and how to make the decision about what to do when you need to learn something.

<div class="s-card">
  <h3>Array Methods & Learning Strategies:</h3> 
  <p>You've seen the syntax for the <code>pop</code> method but its utility was not explained. Before going down a potential rabbit hole in Google, open up <code>irb</code>. Declare an Array with 3 elements. Use the <code>pop</code> method with the syntax you learned earlier. Call the Array and observe the change that has been made since you initially declared it. Go through this process again, with the same Array. What can you infer the <code>pop</code> method does? Check Google (remember, ruby-docs has the most reliable documentation) to confirm your inference. Write this down!</p>
  <p>Your next task is to learn what the <code>push</code>, <code>shift</code> and <code>unshift</code> Array methods do. Consider - how easy or hard did the work you did for <code>pop</code> feel? Do you want to follow the same steps to learn about the other methods, or go straight to ruby documentation to learn about the other 3? Act on whatever you decide, and be sure to write down your learnings about these methods.</p>
</div>
<br>

<div class="s-card">
  <h3>Talking and Writing about Code</h3> 
  <p>In your notebook, write down the code that follows, then write a sentence that describes what that line of code does:</p>
  <p><code>ticket_prices.length</code></p>
</div>

## Check For Understanding

Create a new project (aka directory) and initialize a Git repository in it. Make 1 file - `arrays.rb`, and _make an initial commit_. In that file:
- Declare a variable that stores an Array of at least 4 Strings.
- Declare a variable that stores an Array of at least 4 Integers.
- Declare a variable that stores an Array of at least 4 Floats.
- Declare a variable that stores an Array of at least 4 Booleans.
- _Commit your work_.
- Call 1 of each of the 4 methods you learned, on each of the 4 arrays you created above. On the line of code above that, write (<a href="https://www.thoughtco.com/commenting-ruby-code-2908193#:~:text=Single%2DLine%20Comments,line%3B%20it%20can%20occur%20anywhere" target="_blank">in a Ruby comment</a>) an explanation in plain English as to what impact calling that method will have on that specific array.
- _Commit your work_.
- [_Intentionally open-ended_] Demonstrate your understanding of index positions in this file. You can write an explanation, provide some examples with the Arrays you've created, or anything else.
- _Commit your work_.
- Use the <a href="https://ruby-doc.org/core-2.7.2/Array.html" target="_blank">Ruby Documentation</a> to learn about one additional Array method of your choice. Provide an explanation and example to demonstrate your understanding of it. (Consider bookmarking the official Array docs!)
- _Commit your work_.

Create another file in the same directory, name it `self-evaluation.md`. In Markdown, answer the following questions:
- How confident do you feel with the content on Arrays so far?
- Is there any additional learning you need or want to do before moving to the next lesson?
- What questions do you have about Arrays?
- _Commit your work_.

After you've completed the tasks above, push your work up to a new GitHub repository. Provide the GitHub repository link in the submission form.

<br><br><br>
