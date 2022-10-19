---
layout: lesson
title: Functions
---

## Learning Goals

- Explain the purpose of a function
- Define and invoke a function
- Use and explain the flow of data with arguments and parameters

## Vocabulary

- <span class="vocab">function</span>
- <span class="vocab">parameter</span>
- <span class="vocab">argument</span>
- <span class="vocab">call, invoke</span>
- <span class="vocab">define, declare</span>
- <span class="vocab">return value</span>


## Functions

<span class="vocab">Functions</span> are structures in JavaScript that are fundamental to writing a program. A function can be thought of as a package of instructions for a program to follow.

### Syntax for _Defining_ a Function

To <span class="vocab">define</span> (or <span class="vocab">declare</span>) a function, the following syntax must be used:
- The `function` keyword declares a new function.
- The function name follows the `function` keyword and is determined by the person writing the code. It's best if the name describes what the function _does_.
- A set of opening and closing parentheses `()`.
- A set of opening and closing curly brackets `{}`, which will create the code block.
- One or more lines of code inside the curly brackets - this is where the "instructions" live. These instructions describe what the function should do when it is called.

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
<div class="s-card">
  <h3>Play Around</h3>
  <p><a href="https://replit.com/@turingschool/m0-functions-intro#index.js" target="blank">Fork this replit</a> and run the code.</p>
  <p>Change the String inside the <code>console.log</code> statement. Run the code.</p>
  <p>Add two more <code>console.log</code> statements below the first one. Run the code.</p>
  <p>The code currently calls the function one time. Call the function three times. Run the code.</p>
  <p>Change the name of the function in the declaration <em>only</em>. Run the code. What is the problem?</p>
  <p>Change the name of the function in the calls. Run the code.</p>
</div>
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
- **Defining** the function can be compared to writing a recipe, or taking a screenshot of a recipe on our phone. It has the ingredients and directions, but that alone won't cook the meal.
- **Calling** the function can be compared to following the directions of the recipe to cook the actual meal. If you never choose to cook the recipe - no harm, but it was a waste of time to write it out. The meal could be cooked once, twice, or many times!

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
  <p><em>Referring to the lesson and your notes is encouraged, but for your learning, do not copy-and-paste!</em></p>
  <p>In a replit file or a file in VS Code, define a function named <code>printGreeting</code>. Inside the code block, write a <code>console.log</code> statement that prints a friendly greeting. Then, call the function.</p>
  <p>Run the code. You should see the <code>console.log</code> statement in your console.</p>
</div>
<br>

## Arguments and Parameters

Functions can be more powerful and dynamic when they have additional information about the situation each time they are called. We must follow a specific syntax to "pass information" into a function:
- In the function definition, <span class="vocab">parameter</span>(s) must be declared. Parameters act like variables that can be accessed inside the function. As such, variable naming conventions should be followed when naming parameters.
- In the function call,  <span class="vocab">argument</span>(s) - the actual data - must be provided. Since this is actual data, it must be in the form of a valid JavaScript data type (String, Number, Boolean, etc.)
- The number of arguments passed in should match the number of parameters declared.

```javascript
function printGreeting(name) {
  console.log(`Howdy, ${name}!`);
}

printGreeting("Kaitlyn");
// --> "Howdy, Kaitlyn!"

printGreeting("Brian");
// --> "Howdy, Brian!"
```

The following code snippet illustrates a function definition and call that involves 2 pieces of data, both Numbers.

```javascript
function add(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
}

add(5, 2);
//  --> 7
```

<div class="s-card">
  <h3>Practice: Arguments and Parameters</h3>
  <ol>
    <li><a href="https://replit.com/@turingschool/args-params#index.js" target="blank">Fork this replit.</a></li>
    <li>Before running the code, predict what will print to the console. Then, run the code.</li>
    <li>Change the order of the arguments being passed into the function call on line 5. Re-run the code and observe the output. Then revert the changes you made.</li>
    <li>Change the order of the parameter names declared on line 1. Re-run the code and observe the output. Then revert the changes you made.</li>
    <li>Change the order of the parameters that are interpolated in the <code>console.log</code> statement. Re-run the code and observe the output. Then revert the changes you made.</li>
    <li>Synthesize: What do you know about parameters and arguments, specifically regarding the order they are provided in? (Be ready to verbally explain this to your peers)</li>
  </ol>
  <p><em>For the next activity, referring to the lesson and your notes is encouraged, but for your learning's sake, do not copy-and-paste!</em></p>
  <ol>
    <li>In a new replit file or a file in VS Code, define a function named <code>greetMe</code> that declares two parameters, a first and last name. Inside the code block, write a <code>console.log</code> statement that prints a sentence greeting a person using both first and last names.</li> 
    <li>Then, call the function with appropriate arguments.</li>
    <li>Run the code. You should see the <code>console.log</code> statement in your console.</li>
    <li>On a new line of code, call the function <em>again</em>, using different arguments.</li>
    <li>Run the code.</li>
    <li>On a new line of code, call the function <em>one more time</em>, using different arguments.</li>
    <li>Run the code.</li>
  </ol>
</div>
<br>

## Return Values

Sometimes, instead of simply printing a value to the console, we want our function to return a value. Let's take another look at the `add` function we saw earlier. 

```javascript
function add(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
}

add(5, 2);
//  --> 7
```

Before, our add function wasn't only adding the two Numbers together, it was also logging that sum to the console. This is cool, but what if I wanted to use that number in a different way? The example below shows how I might modify that function, so that it simply `returns` the sum. Notice, we are using the keyword `return` to specically tell JavaScript what value to return from the function. Then, I can do all kinds of different things with that function!

```javascript
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

console.log(add(5, 2));
//  --> 7
console.log(`The sum of 5 and 2 is ${add(5, 2)}.`)
//  --> "The sum of 5 and 2 is 7."
```

### Storing a Return Value

The examples we've looked at so far call the function and execute the code within the function, but the return values go nowhere/can never be used in the program again. Many times, we'll store the return value of a function in another variable, as modeled below:

```javascript
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var morningCommuteMinutes = 18;
var afternoonCommuteMinutes = 30;
var totalCommuteMinutes = add(morningCommuteMinutes, afternoonCommuteMinutes);

console.log(`I spend a total of ${totalCommuteMinutes} minutes driving to work each day.`)
//  --> "I spend a total of 48 minutes driving to work each day."
```

<div class="s-card s-border-yellow-500">
  <h3>Key Points Summary</h3>
  <ul>
    <li>A function is a packaged set of directions. If the function is never <em>called</em>, it will never run. It can be called many times, if needed!</li>
    <li>The number of arguments in a function call must match the number of parameters in the function definition.</li>
    <li>Function names should start with a verb and use <code>camelCase</code>.</li>
  </ul>
</div>
<br>

## Check For Understanding

Complete the work <a href="https://github.com/turingschool/m0_fe_functions" target="_blank">in the CFU repository</a> and submit your work using the submission form.

<br>
<br>
<br>