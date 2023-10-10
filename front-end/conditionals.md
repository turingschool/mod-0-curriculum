---
layout: lesson
title: Conditionals
---

## Learning Goals

- Use comparison and logical operators
- Write if/else if/else statements for conditional logic

## Vocabulary

- <span class="vocab">comparison operators</span>
- <span class="vocab">conditionals</span>
- <span class="vocab">if statements</span>
- <span class="vocab">logical operators</span>

## Comparison Operators

_This will connect to Booleans, which you learned about in the Data Types lesson._

Conditional statements, or <span class="vocab">conditionals</span>, are JavaScript statements that evaluate to `true` or `false`. The most common operators used for conditions are <span class="vocab">comparison operators</span>, which compare two values. The JavaScript comparison operators are:

- `===` (strictly equal)
- `!==` (not strictly equal)
- `>` (greater than)
- `>=` (greater than or equal to)
- `<` (less than)
- `<=` (less than or equal to)

Comparison operators are used to compare values of the same data type. The code snippet that follows, models the syntax and the comments explain what the code does:

```javascript
// Does the Number 5 have the exact same value as the Number 5? 
5 === 5
// --> true

// Is Number 5 less than the Number 3?
5 < 3
// --> false

var age = 18;
// Is the age greater than 12?
age > 12
// --> true

// reassign age variable to 9
age = 9
// Is the age greater than 12?
age > 12
// --> false
```

<div class="s-card s-border-yellow-500">
  <h3>Equality vs. Assignment</h3>
  <p>The most common mistake people encounter when writing conditional statements is related to the difference between <code>=</code> and <code>===</code>.</p>
  <ul>
    <li><code>=</code> is an assignment. It instructs, "take the value on the right side and store it into whatever is on the left side" – it’s telling, not asking.</li>
    <li><code>===</code> is a question. It asks, "is the value on the right the exact same as the value on the left?" – it’s asking, not telling.</li>
  </ul>
</div>

<em>Optional:</em> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators" target="_blank">Read more about comparison operators.</a>

<br>

<div class="s-card">
  <h3>Comparisons</h3> 
  <p>Complete the following work in the Dev Tools Console:</p>
  <ul>
    <li>Check if 3 is less than or equal to 6.</li>
    <li>Check if "T" is equal to "t".</li>
    <li>Check if "P" is equal to " P".</li>
    <li>Check if 10 is not equal to 10.</li>
    <li>Declare a variable that store your name in a String.</li>
    <li>Check if the length of your name is greater than or equal to 10. Not sure how to do that programmatically? Google!</li>
  </ul>
</div>
<br>

>For the remaining practice activities in this assignment, you can use the Dev Tools Console, create a JavaScript file in your Terminal and edit it in VS Code, or use an online IDE such as <a target="blank" href="https://replit.com/~">replit</a> - it's your preference!

## If Statements

<span class="vocab">If statements</span> are the most common form of conditionals. The logic of an <code>if statement</code> in JavaScript follows the same logic in other programming languages.

### `if`

All of our conditional branches will begin with the keyword `if`, followed by a condition in parenthesis, then an opening curly bracket `{`. To communicate to the JavaScript program that the `if statement` should end, the closing curly bracket `}` must be used. Any code written in between the curly brackets will run **if** the condition evaluates to true.

```javascript
if (condition) {
  // code to execute if condition evaluates to true
}
```

The following example checks if a store is open, and prints out a statement if the store is indeed open:

```javascript
var isOpen = true;

if (isOpen === true) {
  console.log("Let's go!");
}
```

<div class="s-card">
  <h3>Try It: <code>if</code> statements</h3>
  <p>Define an <code>age</code> variable and assign it to a Number. Then, write code that will print out the String "Welcome to the Website" only if the user is 21 or older.</p>
</div>
<br>

### `else`

In the previous exercises, when the condition evaluates to false, we don't see any output. In order to have a default response that runs when the condition is false, we need an `else` statement. Here's an example with the `isOpen` variable for the store. 

```javascript
var isOpen = true;

if (isOpen === true) {
  console.log("Let's go!");
} else {
  console.log("Oops. Looks like that store is closed now.");
}
```

<div class="s-card">
  <h3>Try It: <code>else</code> statements</h3>
  <p>Go back to your previous exercise with the <code>age</code> variable. Use an <code>else</code> statement that prints out a different message if the user is not 21 or older.</p>
</div>
<br>

### `else if`

Use the keywords `else if` to create more branches with additional conditions to check.

```javascript
if (condition1) {
  // code to execute if above condition1 evaluates to true
} else if (condition2) {
  // code to execute if above condition2 evaluates to true
} else if (condition3) {
  // code to execute if above condition3 evaluates to true
} else {
  // default code to execute if none of the other conditions evaluate to true
}
```

Notice that code inside the `else` statement will only run when none of the previous conditions evaluate to true.

<div class="s-card">
  <h3>Try It: <code>else if</code> statements</h3>
  <p>Continue building on the previous work you've done with the <code>age</code> variable. Write code that will print out the String "Welcome to the Website" only if the user is 21 or older. If the user is under the age of 2, print out "How are you even on this device?". If the user is any other age, print out "You aren't quite old enough to visit, sorry!".</p>
</div>
<br>

>_Explore:_ Fork <a href="https://replit.com/@turingschool/explore-conditionals#index.js" target="_blank">this replit</a> and play around with the value stored in the weather variable to achieve each output.

<br>
<div class="s-card">
  <h3>More Practice</h3>
  <ul>
    <li>Declare a variable that stores your name in a String.</li>
    <li>Write an if/else statement - if your name is "Oscar", print "Hello, Oscar!". If not, print "Nice to meet you, Stranger!".</li>
    <li>Challenge: Use string interpolation to interpolate any non-Oscar name instead of the word "Stranger".</li>
  </ul>
</div>

## Self-Teach
Part of what you'll experience at Turing is learning a technical topic on your own. Practicing this skill at Turing will get you prepared for the job where you will do this often.

Take time between now and your next session to self-teach the following section.

## Logical Operators

There are three <span class="vocab">logical operators</span> in JavaScript; we will learn two today:
- `&&` (Logical And Operator)
- `||` (Logical Or Operator)

### `&&` 

This logical operator will check two values, and both **must** be true in order for it to return `true`. Examples follow:

```javascript
var age = 34;
var time = 2.05;

age < 40 && time < 3.0
// true (both meet requirement)

age < 30 && time < 3.0
// false (age is not less than 30)

age < 40 && time < 2.0
// false (time is not less than 2.0)

age < 30 && time < 2.0
// false (neither meet requirement)
```

### `||`

This logical operator will check two values, and _one_ or _both_ must be true in order for it to return true. Examples follow:

```javascript
var age = 34;
var time = 2.05;

age < 40 || time < 3.0
// true (both meet requirement)

age < 30 || time < 3.0
// true (time meets requirement)

age < 40 || time < 2.0
// true (age meets requirement)

age < 30 || time < 2.0
// false (neither meet requirement)
```

<div class="s-card">
  <h3>Logical Operators</h3> 
  <p>Complete the following work in the Dev Tools Console:</p>
  <ul>
    <li>Declare two variables - one that stores your age and another person's age.</li>
    <li>Check if both ages are under 100.</li>
    <li>Check if at least one age is under 78.</li>
    <li>Check if your age is over 18 and the other age is under 60.</li>
    <li>Check if your age is over 21 or if the other age is over 25.</li>
    <li>Check if your age is under 20 or if the other age is over 40.</li>
  </ul>
</div>

Now that you know about logical operators and `if statements`, let's combine that new knowledge to complete a final exercise.

<div class="s-card">
  <h3>More Practice: Logical Operators with Conditions</h3>
  <ul>
    <li>Declare a variable that stores a password.</li>
    <li>In order for a password to be valid, it needs to have 8 characters or more and include the symbol <code>#</code>.</li>
    <li>Use logical operators and conditions to give the user feedback based on their password.</li>
    <li>If the user enters a password that is both 8 characters or more <em>and</em> includes the symbol <code>#</code>, print the statement, "Got it. Your password is: XXXXXXXX" using interpolation to confirm their password.</li>
  </ul>
</div>


<br>

>_Optional:_ Read the <a href="https://www.javascript.com/learn/conditionals" target="_blank">Conditionals section</a> from Pluralsight for a different explanation.

## Check For Understanding

- <a href="https://github.com/turingschool/m0_fe_conditionals" target="_blank">Follow the directions in the README of this GitHub repository</a>.
- Add the link to your repository to your Mod 0 Gist in a section called `Conditionals`.

<br><br><br>