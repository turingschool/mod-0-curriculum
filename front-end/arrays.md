---
layout: lesson
title: Arrays
---

## Learning Goals

- Use JavaScript syntax to declare variables that store Arrays in JavaScript
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

```javascript
var student1 = "Josiah";
var student2 = "Cindy";
var student3 = "Violet";
var student4 = "Jhun";
// on and on.
```

As the list of students inevitably changes and grows, this is difficult to maintain programmatically. If we wanted to send an email to every student or perform any other task for every student, we would have to write code for each, individual student, which defeats the purpose of having a computer program automate tasks.

An <span class="vocab">Array</span> is a JavaScript Data Type that allows us to store multiple pieces of data in _one_ variable. They can be compared to lists. The Array is an incredibly powerful and necessary Data Type for building web applications.

Thinking back to the Populi platform that helped you enroll at Turing, many Arrays are used to power its functionality:

- **student roster** - list of *all names* in a given cohort
- **course catalog** - list of *all courses* we offer

Notice that in the previous examples, the items in a given list are all of the _same type_.

### Array Syntax

- An Array is declared with the <span class="vocab">square brackets</span> (they can be typed with the keys to the right of the `p` character on your keyboard).
- Each piece of data in an Array is referred to as an <span class="vocab">element</span>.
- Elements should be separated with a comma and space.
- An Array can hold any number of elements.

```javascript
var students = ["Cindy", "Josiah", "Rigo"];
```

>To describe what the previous line of code does, one might say, "The `students` variable stores an Array of Strings which represent the names of students. This array has 3 elements."

<br>
<div class="s-card">
  <h3>Talking and Writing about Code</h3>
  <p>In your notebook, write down the code that follows, then write a sentence that describes what that line of code does:</p>
  <p><code>var ticket_prices = [87, 67, 99, 90, 87];</code></p>
</div>

<br>
<div class="s-card s-border-yellow-500">
  <h3>Best Practices for Arrays</h3>
  <ul>
    <li>The name of a variable that stores an Array should usually be plural to indicate that it has the potential to hold <em>many</em> elements of that type.</li>
    <li>While JavaScript technically allows an Array to hold multiple Data Types, it is not best practice and in any real-world application, will usually be unhelpful anyways.</li>
  </ul>
</div>
<br>

### Accessing Elements

To access one element from an array, bracket notation and a number that corresponds with that element should be used. That number is referred to as an <span class="vocab">index position</span>. As weird as it may seem, <a href="https://skillcrush.com/blog/why-programmers-start-counting-at-zero/" target="_blank">counting starts with 0 in most programming languages</a>. 

Through reading the code snippet in the embdedd replit that follows, one can infer that the first element is in index position 0, and counting increments by 1. (Click the green "Run" button to see the output in the Console at the bottom of the embdedded replit.)

<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@turingschool/array-access-els?lite=true"></iframe>


<div class="s-card">
  <h3>Storing Arrays, Accessing Elements: Part 1</h3>
  <p>Given the following array, answer each question. Notice the way technical vocabulary is used to describe these things, and use this as a guide to practice articulating your responses, and how you talk about Arrays in the future.</p>
  <p><code>var ticketPrices = [87, 67, 99, 90, 87];</code></p>
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
  <p>Complete the following work in an replit:</p>
  <ul>
    <li>Declare a variable named <code>friends</code> that stores an Array of 5 Strings, each a friend's name.</li>
    <li>Access the third element.</li>
    <li>Access the last element.</li>
    <li>Access the first element.</li>
  </ul>
</div>
<br>

## Practice

Create a new project (aka directory). Make 1 file - `arrays.rb`. In that file:
- Declare a variable that stores an Array of at least 4 Strings.
- Declare a variable that stores an Array of at least 4 Integers.
- Declare a variable that stores an Array of at least 4 Floats.
- Declare a variable that stores an Array of at least 4 Booleans.
- [_Intentionally open-ended_] Demonstrate your understanding of index positions in this file. You can write an explanation, provide some examples with the Arrays you've created, or anything else.

## Check For Understanding

Please create a section in your Mod 0 Gist for **Arrays** and record your answers to these questions. (Including the question is very helpful!)
- How confident do you feel with the content on Arrays so far?
- Is there any additional learning you need or want to do before moving to the next lesson?
- What questions do you have about Arrays?

## Extension
The work below is meant as optional work to be completed and explored outside of the live Mod 0 sessions. This work is encouraged, but not required.

### Array Methods

 A t one point or another, a developer will need to modify data in an Array. Today, we will learn a number of ways to do that. They will probably not satisfy your every question of "How does X app do Y?" but this will lay an important foundation for the concept of Array methods, and some strategies to get that information you are craving!

An Array <span class="vocab">method</span> is a piece of functionality that is built into the JavaScript language, intended to be used on Arrays specifically. Each method has a specific job to perform; we can use it if we want, but we can't modify a built-in method. There are many Array methods - like anything else in programming, you will memorize a handful that you regularly use, then look to documentation for those you don't use as regularly.

### Array Methods Syntax

To use an Array method in JavaScript, we first must tell JavaScript which Array we want to perform the method on. After that, a dot or period, followed by the name of the method, then opening and closing parentheses.

```javascript
var students = ["Cindy", "Josiah", "Rigo"];
students.pop();

console.log(students);
```

>To describe what the previous line of code does, one might say, "This line of code calls the `pop` method on the `students` Array."

<br>

### Learning From Reading Code You Don't Know

As a developer, an important skillset is researching and reading documentation (and to note, in many cases, documentation is not always current, rarely perfect, and usually quite dense).

Since researching and reading documentation can sometimes be time-consuming, another skill is to be able to make the decision about when it's time to go to Google. In this activity, you will be provided with some structure to teach yourself a few technical concepts. The main goal is **not** to learn the technical concepts, it's to practice and explore _strategies to learn_ in an environment such as this, and how to make the decision about what to do when you need to learn something.

<div class="s-card">
  <h3>Array Methods & Learning Strategies:</h3> 
  <p>You've seen the syntax for the <code>pop</code> method but its utility was not explained. Before going down a potential rabbit hole in Google, open up a replit or a new file in VS Code. Declare an Array with 3 elements. Use the <code>pop</code> method with the syntax you learned earlier. Call the Array and observe the change that has been made since you initially declared it. Go through this process again, with the same Array. What can you infer the <code>pop</code> method does? Check Google (remember, MDN has the most reliable documentation) to confirm your inference. Write this down!</p>
  <p>Your next task is to learn what the <code>push</code>, <code>shift</code> and <code>unshift</code> Array methods do. Consider - how easy or hard did the work you did for <code>pop</code> feel? Do you want to follow the same steps to learn about the other methods, or go straight to documentation to learn about the other 3? Act on whatever you decide, and be sure to write down your learnings about these methods.</p>
</div>
<br>

<div class="s-card">
  <h3>Talking and Writing about Code</h3> 
  <p>In your notebook, write down the code that follows, then write a sentence that describes what that line of code does:</p>
  <p><code>var ticketPrices = [87, 67, 99, 90, 87];</code></p>
  <p><code>ticketPrices.slice(1, 3)</code></p>
  <p><em>Hint: Just by looking at this code, it's unlikely you know what it does. What can you do to explore, learn, and confirm what it does?</em></p>
</div>




<br><br><br>
