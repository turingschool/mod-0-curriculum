---
layout: lesson
title: Functions
---

## Learning Goals

- Explain the purpose of a function
- Declare and invoke a function
- Use and explain the flow of data with arguments and parameters

## Vocabulary

- <span class="vocab">argument</span>
- <span class="vocab">call, invoke</span>
- <span class="vocab">define, declare</span>
- <span class="vocab">function</span>
- <span class="vocab">parameter</span>

## Functions

<span class="vocab">Functions</span> are structures in JavaScript that are fundamental to writing a program. A function can be thought of as a package of instructions for a program to follow.

### Syntax for _Defining_ a Function

To <span class="vocab">define</span> (or <span class="vocab">declare</span>) a function, the following syntax must be used:
- The `function` keyword to communicate that JavaScript should expect the next pieces of information
- The function name. This is developed by the person writing the code
- A set of opening and closing parentheses `()`
- A set of opening and closing curly brackets `{}`, which will create the code block
- One or more lines of code inside the curly brackets - this is where the "instructions" live

```javascript
function displayFunctionSkeleton() {
  // statements 
  // go 
  // here
}
```

After defining a function, nothing will _appear_ to happen. The interpreter that reads the JavaScript code will read it, and be aware of that set of instructions, but it won't carry out those instructions until it is explicitly told to do so.

### Syntax for _Calling_ a Function

To instruct the interpreter to carry out the instructions in a function, the developer must write code to <span class="vocab">call</span> (or <span class="vocab">invoke</span>) that function. To call a function, the following syntax must be used:
- The function name
- A set of opening and closing parentheses `()`
- To follow conventions and best practices, the line should end with a semi-colon `;`

```javascript
displayFunctionSkeleton();
```

<br>

### Naming Conventions

Since functions provide action to a program, they should be named accordingly; it's best practice to start them with a verb. Like variables, JavaScript functions should use `camelCase` when they involve more than one word and should be written carefully to describe their role specifically without being overly verbose.

Examples of function names that follow best practices:
- `getUserInput`
- `displayFollowers`
- `addTwoNumbers`
- `findLongestName`

<br>

### An Analogy

One way to think about functions is as a recipe for a meal: 
- Defining the function can be compared to writing a recipe, or taking a screenshot of a recipe on our phone. It has the ingredients and directions, but that alone won't cook the meal.
- Calling the function can be compared to following the directions of the recipe to cook the actual meal. If you never choose to cook the recipe - no harm, but it was a waste of time to write it out. The meal could be cooked once, twice, or many times!

While the code snippet below illustrates a very contrived function, it is valid JavaScript:

```javascript
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
```
<br>

<div class="s-card">
  <h3>Practice: Define and Call a Function</h3>
  <p><em>Referring to the lesson and your notes is encouraged, but for your learning's sake, do not copy-and-paste!</em></p>
  <p>In a repl.it file or a file in Atom, define a function named <code>printGreeting</code>. Inside the code block, write a <code>console.log</code> statement that prints a friendly greeting. Then, call the function.</p>
  <p>Run the code. You should see the <code>console.log</code> statement in your console.</p>
</div>
<br>

## Arguments and Parameters

Functions can be more powerful and dynamic when they have additional information about the situation each time they are called. We must follow a specific syntax to "pass information" into a function:
- In the function definition, <span class="vocab">parameter</span>(s) must be declared. Parameters act like variables that can be accessed inside the function. As such, variable naming conventions should be followed when naming parameters.
- In the function call,  <span class="vocab">argument</span>(s) - the actual data - must be provided. Since this is actual data, it must be in the form of a valid JavaScript data type (String, Number, Boolean, etc.)
- The number of arguments passed in should match the number of parameters declared.

```javascript
function makeDinner(genre) {
  console.log(`Tonight, we will make a delicious ${genre} dinner.`);
}

makeDinner("Italian");
// --> "Tonight, we will make a delicious Italian dinner.

makeDinner("Mexican");
// --> "Tonight, we will make a delicious Mexican dinner.
```

The following code snippet illustrates a function definition and call that involves 3 pieces of data. Notice that the order in which data is passed in as arguments, matters.

```javascript
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
//  --> 6
```

<div class="s-card">
  <h3>Practice: Arguments and Parameters</h3>
  <ol>
    <li><a href="https://replit.com/@turingschool/args-params#index.js" target="blank">Fork this repl.it</a></li>
    <li>Before running the code, predict what will print to the console. Then, run the code.</li>
    <li>Change the order of the arguments being passed into the function call on line 5. Re-run the code and observe the output. Then revert the changes you made.</li>
    <li>Change the order of the parameter names declared on line 1. Re-run the code and observe the output. Then revert the changes you made.</li>
    <li>Change the order of the parameters that are interpolated in the <code>console.log</code> statement. Re-run the code and observe the output. Then revert the changes you made.</li>
    <li>Synthesize: What do you know about parameters and arguments, specifically regarding the order they are provided in? (Be ready to verbally explain this to your peers)</li>
  </ol>
  <p><em>For the next activity, referring to the lesson and your notes is encouraged, but for your learning's sake, do not copy-and-paste!</em></p>
  <ol>
    <li>In a new repl.it file or a file in Atom, define a function named <code>greetMe</code> that declares two parameters, a first and last name. Inside the code block, write a <code>console.log</code> statement that prints a sentence greeting a person using both first and last names.</li> 
    <li>Then, call the function with appropriate arguments.</li>
    <li>Run the code. You should see the <code>console.log</code> statement in your console.</li>
    <li>On a new line of code, call the function <em>again</em>, using different arguments.</li>
    <li>Run the code.</li>
    <li>On a new line of code, call the function <em>one more time</em>, using different arguments.</li>
    <li>Run the code.</li>
  </ol>
</div>


## Check For Understanding

Coming soon...

<br>
<br>
<br>