---
layout: lesson
title: For Statements
---

## Learning Goals

- Explain the concept of a loop
- Implement syntax for `for` statements for a variety of situations, including looping with an Array

## Vocabulary

- <span class="vocab">code block</span>
- <span class="vocab">condition</span>
- <span class="vocab">for statement</span>
- <span class="vocab">initialization</span>

## Warm-Up

Write 1-2 sentences to explain the code snippet below, using as many technical vocabulary terms as possible.

```javascript
var emails = [
  "kaitlyn@turing.edu",
  "justina@turing.edu",
  "amy@turing.edu",
  "launa@turing.edu",
  "nikki@turing.edu",
  "naomi@turing.edu"
];
```

## Discovery

Work through the activity that follows to practice reading unfamiliar code and working to make sense of it. 

<div class="s-card">
  <h3>Reading a <code>for</code> loop</h3>
  <ul>
    <li>Open <a href="https://replit.com/@turingschool/for-statements#index.js" target="blank">this replit</a> and click "fork".</li>
    <li>Run the code in the replit. Read through the code for each <code>for</code> statement and identify the portion of the output that belongs with it. <strong>What do you notice? Work to identify which piece of the code corresponds to a change in the output.</strong></li>
    <li>If questions or wonderings such as "I wonder what would happen if we did X instead of Y...?" - there is nothing stopping you from trying that out, and finding the answer right now! You can edit the existing code, copy-and-paste code snippets then modify, or write something out yourself.</li>
  </ul>
</div>
<br>

## `for statement`

Watch <a target="blank" href="https://www.youtube.com/watch?v=vLu8cOE7YKc">this video</a> to see an explanation of the code snippet shown below.

```javascript
for (var i = 0; i < 4; i++) {
  console.log(i);
}

// --> 0
// --> 1
// --> 2
// --> 3
```

```
for ([initialization]; [condition]; [final-expression]) {
  [statement]
}
```

- A <code><span class="vocab">for statement</span></code> creates a loop. This provides the opportunity to run one line of code many times.
- <code><span class="vocab">initialization</span></code>: this initializes a counter variable that can keep track of how many times the loop has run. This expression is evaluated **one time** - _before_ the loop begins
- <code><span class="vocab">condition</span></code>: this is evaluated **before each** loop iteration. If condition evaluates to `true`, the code in the loop runs. If it evaluates to `false`, the loop ends.
- `final-expression`: this is evaluated **after each** loop iteration. It is usually used to increment the counter variable. If nothing ever changes in regards to the condition, the loop will run infinitely.
- `statement`: this executes every time the condition evaluates to `true`. Almost always, it is wrapped in curly braces `{}`, making it a <span class="vocab">code block</span>. As many lines of code as neccesary can be written inside the code block.

<div class="s-card s-border-yellow-500">
  <h3>Common Questions</h3>
  <ul>
    <li><strong>Why is the counter variable named <code>i</code> in most examples I see?</strong> Any valid JavaScript variable name can be used, but <code>i</code> is a convention in for loops, and it stands for index.</li>
    <li><strong>Are these semi-colons really necessary? Can I use commas instead?</strong> Use of semi-colons to separate the three expressions provided to the <code>for</code> statement is mandatory.</li>
  </ul>
</div>
<br>

## Practice

<div class="s-card">
  <h3>Explaining Code</h3>
  <ul>
    <li>Choose <code>one</code> of the <code>for</code> statements that was in the replit used for the Discovery activity.</li>
    <li>To review and solidify what you saw in the video, prepare a verbal or written explanation of what your selected <code>for</code> statement does, in as much detail as possible. Take note of things you find yourself wondering or feeling confused about.</li>
    <li>Do some research to try and answer your own question <em>or</em> go to your Slack small group!</li>
  </ul>
</div>
<br>

<div class="s-card">
 <h3>Writing Code</h3>
  <p>For these tasks, utilize your notes but do not, under any circumstance, copy-and-paste code. It's recommended you write the code in a new replit file.</p>
  <ul>
    <li><strong>Challenge #1:</strong> Write code that will print out the numbers 12-18.</li>
  </ul>
  <ul>
    <li><strong>Challenge #2:</strong>Write code that will print out the numbers 0-5, and use String interpolation to combine the number with an emoji of your choice. <a href="https://www.google.com/search?q=pull+up+emoji+keyboard+on+mac&oq=pull+up+emoji+keyboard+on+mac&aqs=chrome..69i57j0i22i30j0i390l3.3556j0j1&sourceid=chrome&ie=UTF-8&safe=active&ssui=on" target="blank">Here is a resource if you don't know how to pull up the emoji keyboard</a></li>
  </ul>
</div>
<br>

## Loops and Arrays

Many times, we use `for` statements to loop through Arrays and do something to or with each element in an Array. The following code snippet models an example:

```javascript
var fruits = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruits.length; i++) {
  console.log("I have some " + fruits[i]);
}
```

<div class="s-card">
 <h3>Investigating Code</h3>
  <p>For this task, fork <a href="https://replit.com/@turingschool/for-arrays#index.js" target="blank">this replit</a> and then work through the guided exercise below:</p> 
  <ul>
    <li>Print to the console <code>fruits.length</code> and notice the output, and try to make sense of where that came from. Keep what you learned by doing that in mind, keep or delete that code, and continue.</li>
    <li>Change <code>fruits.length</code> to <code>3</code>. Re-run the code - has the output changed?</li>
    <li>Change <code>fruits[i]</code> to <code>[i]</code>. Re-run the code - has the output changed? Revert the changes with the keyboard shortcut <code>cmd + z</code>.</li>
    <li>Change <code>fruits[i]</code> to <code>fruits</code>. Re-run the code - has the output changed? Revert the changes with the keyboard shortcut <code>cmd + z</code>.</li>
  </ul>
  <p>If you have questions about how any of those exercises worked, use Google or your small group.</p>
</div>
<br>

## Code Challenge

<div class="s-card">
  <h3>Code Challenge</h3>
  <p>Print only the numbers from the following Array that are greater than 10:</p>
  <p><code>numbers = [10, 11, 7, 19, 4, 52, 89, 9, 12, 10]</code></p>
  <p><em>Hint: You will need to combine what you learned about for statements today with your prior knowledge of conditionals to solve this challenge!</em></p>
</div>
<br>

<div class="s-card s-border-yellow-500">
  <h3>Common Misconceptions</h3>
  <ul>
    <li>An Array is not required when writing a <code>for</code> statement. You saw this demonstrated in the first part of class! Because Arrays are so commonly used in <code>for</code> statements, sometimes we forget it's possible.</li>
    <li><code>for</code> statements are not magically connected to Arrays; when code "loops through an Array" that is becuase the length of the Array is part of the condition, and the Array is (most likely) called in the code block.</li>
  </ul>
</div>
<br>

## Practice

Use a `for` statement to solve each problem. You can do this work in the place that works best for you - Dev Tools Console, a file in VS Code, or an online editor.

<div class="s-card">
  <p>Utilize a <code>for</code> statement to print out the numbers 3-14.</p>
</div>
<br>

<div class="s-card">
  <p>Print the square of each number:</p>
  <p><code>var numbers = [2, 4, 6, 8, 10, 12]</code></p>
</div>
<br>

<div class="s-card">
  <p>Print each String, but make each String all lowercase:</p>
  <p><code>var words = ["sUnNy", "BeAcH", "wAvEs", "ReLaX"]</code></p>
</div>
<br>

<div class="s-card">
  <p>Print out only names that begin with "P":</p>
  <p><code>var names = ["Pilar", "Petunia", "Pamela", "Tan", "Amanda", "Phil"]</code></p>
</div>
<br>

<div class="s-card">
  <p>Print out every odd number between 0 and 100. Do NOT print any even numbers, and do NOT create an Array to help you do this.</p>
</div>
<br>

## Check For Understanding

[Follow the directions in the README of this GitHub repository](https://github.com/turingschool/m0_fe_for), and submit your fork in the submission form.

<br>
<br>
<br>