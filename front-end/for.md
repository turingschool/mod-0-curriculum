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

## Warm Up

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

Work through the activity that follows to practice reading unfamiliar code and working to make sense of it. After this, you will receive direct instruction and acquire some vocabulary to help you speak about these concepts - it's ok to experience some confusion and discomfort during this activity. To get the most out of this time, monitor your level of _type_ of struggle, and communicate openly with your peers to support each other in your learning.

<div class="s-card">
  <h3>Reading a <code>for</code> loop (small groups)</h3>
  <ul>
    <li>The person with the longest Starbucks order should screenshare (drive). Open <a href="https://replit.com/@turingschool/for-statements#index.js" target="blank">this replit</a> and click "fork". Make sure the font size is big enough for everyone else in the Breakout room to easily see. From here on out, the other partner can serve as a Navigator and provide directions so the Driver can keep the replit screen up.</li>
    <li>Run the code in the replit. Give everyone in the group some time to read through the code for each <code>for</code> statement and identify the portion of the output that belongs with it. <strong>Discuss: What do you notice? Work to identify which piece of the code corresponds to a change in the output.</strong></li>
    <li>If questions or wonderings such as "I wonder what would happen if we did X instead of Y...?" - there is nothing stopping you from trying that out, and finding the answer right now! You can edit the existing code, copy-and-paste code snippets then modify, or write something out yourself. <em>You should do those explorations as a group and have your Driver do that on their screenshare.</em></li>
  </ul>
</div>
<br>

## `for statement` Explained

In our live class, we will dissect the code snippet that follows:

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
    <li>To review and solidify what we just talked through as a class, prepare a verbal or written explanation of what your selected <code>for</code> statement does, in as much detail as possible. Make note of things you find yourself asking yourself, wondering, or feeling confused about.</li>
    <li>Be prepared to share out your explanation <em>or</em> a specific question that you came up with during this time.</li>
  </ul>
</div>
<br>

<div class="s-card">
 <h3>Writing Code (Pairs)</h3>
  <p>For these tasks, utilize your notes but do not, under any circumstance, copy-and-paste code. It's recommended you write the code in a new replit file.</p>
  <p>Determine a Driver and Navigator for the first challenge. The Driver should screenshare their replit window.</p>
  <ul>
    <li><strong>Challenge #1:</strong> Write code that will print out the numbers 12-18.</li>
  </ul>
    <p>Switch Driver-Navigator roles.</p>
  <ul>
    <li><strong>Challenge #2:</strong>Write code that will print out the numbers 0-5, and use String interpolation to combine the number with an emoji of your choice. <a href="https://www.google.com/search?q=pull+up+emoji+keyboard+on+mac&oq=pull+up+emoji+keyboard+on+mac&aqs=chrome..69i57j0i22i30j0i390l3.3556j0j1&sourceid=chrome&ie=UTF-8&safe=active&ssui=on" target="blank">Here is a resource if you don't know how to pull up the emoji keyboard</a></li>
  </ul>
  <p>Be ready to screenshare and explain your code if you are called on.</p>
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
 <h3>Investigating Code (Pairs)</h3>
  <p>For this task, the Driver should fork <a href="https://replit.com/@turingschool/for-arrays#index.js" target="blank">this replit</a>, then the Navigator should guide with these directions:</p> 
  <ul>
    <li>Print out to the console <code>fruits.length</code> and notice the output, and try to make sense of where that came from. Keep what you learned by doing that in mind, keep or delete that code, and continue.</li>
    <li>Change <code>fruits.length</code> to <code>3</code>. Re-run the code - has the output changed?</li>
    <li>Change <code>fruits[i]</code> to <code>[i]</code>. Re-run the code - has the output changed? Revert the changes with the keyboard shortcut <code>cmd + z</code>.</li>
    <li>Change <code>fruits[i]</code> to <code>fruits</code>. Re-run the code - has the output changed? Revert the changes with the keyboard shortcut <code>cmd + z</code>.</li>
  </ul>
  <p>If some questions arose out of doing this - you did it right! We will come back together and discuss this as a class.</p>
</div>
<br>

## Live Coding - Model

<div class="s-card">
  <h3>Code Challenge</h3>
  <p>Print out only the numbers from the following Array that are greater than 10:</p>
  <p><code>numbers = [10, 11, 7, 19, 4, 52, 89, 9, 12, 10]</code></p>
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
  <p>Find the square of each number:</p>
  <p><code>numbers = [2, 4, 6, 8, 10, 12]</code></p>
</div>
<br>

<div class="s-card">
  <p>Print out each String, but capitalize the first character of each String:</p>
  <p><code>words = ["sunny", "beach", "waves", "relax"]</code></p>
</div>
<br>

<div class="s-card">
  <p>Print out only names that begin with "P":</p>
  <p><code>names = ["Pilar", "Petunia", "Pamela", "Tan", "Amanda", "Phil"]</code></p>
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