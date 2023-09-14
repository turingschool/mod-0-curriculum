---
layout: lesson
title: Functions
---

## Learning Goals

- Explain the purpose of functions
- Use built-in methods on appropriate data types
- Define and invoke functions in JavaScript
- Use and explain the flow of data with arguments and parameters
- Describe the purpose of a return value

## Vocabulary

- <span class="vocab">method</span>
- <span class="vocab">function</span>
- <span class="vocab">call, invoke</span>
- <span class="vocab">define, declare</span>
- <span class="vocab">return value</span>
- <span class="vocab">parameter</span>
- <span class="vocab">argument</span>



## Defining Our Own Functions

<span class="vocab">Functions</span> are structures in JavaScript that are fundamental to writing a program. A function is essentially a package of instructions for a program to follow. The JavaScript language has many methods built-in that you'll explore later in this lesson. Built-in methods are great and you will use them regularly as a developer. There will also be times when you need to write your own method to solve a unique problem in the application you are building or maintaining. 

### Syntax for _Defining_ a Function

To <span class="vocab">define</span> (or <span class="vocab">declare</span>) a function, the following syntax must be used:
- The `function` keyword declares a new function.
- The function name follows the `function` keyword and is determined by the person writing the code. It's best if the name describes what the function _does_.
- A set of opening and closing parentheses `()`.
- A set of opening and closing curly brackets `{}`, which will create the code block.
- One or more lines of code inside the curly brackets - this is where the "instructions" live. These instructions describe what the function should do when it is called.
- The value that follows the `return` keyword is the data that the function will return when it is called. 

```javascript
function greetATexan() {
  return "Howdy, partner!";
}
```

After defining a function, nothing will _appear_ to happen. The interpreter that reads the JavaScript code will read it, and be aware of that set of instructions, but it won't carry out those instructions until it is explicitly told to do so.

### Syntax for _Calling_ a Function

To instruct the interpreter to carry out the instructions in a function, the developer must write code to <span class="vocab">call</span> (or <span class="vocab">invoke</span>) that function. To call a function, the following syntax must be used:
- The function name
- A set of opening and closing parentheses `()`
- To follow conventions and best practices, the line should end with a semi-colon `;`

```javascript
greetATexan();
```


### Naming Conventions

Since functions provide action to a program, they should be named accordingly; it's best practice to start them with a verb. Like variables, JavaScript functions should use `camelCase` when they involve more than one word and should be written carefully to describe their role specifically without being overly verbose.

Examples of function names that follow best practices:
- `getUserInput`
- `displayFollowers`
- `addTwoNumbers`
- `findLongestName`

<!-- <br>
<div class="s-card">
  <h3>Play Around Independently</h3>
  <p><a href="https://replit.com/@turingschool/m0-functions-intro#index.js" target="blank">Fork this replit</a> and run the code.</p>
  <p>Change the String inside the <code>console.log</code> statement. Run the code.</p>
  <p>Add two more <code>console.log</code> statements below the first one. Run the code.</p>
  <p>The code currently calls the function one time. Call the function three times. Run the code.</p>
  <p>Change the name of the function in the declaration <em>only</em>. Run the code. What is the problem?</p>
  <p>Change the name of the function in the calls. Run the code.</p>
</div>
<br>

### An Analogy

One way to think about functions is as a recipe for a meal: 
- **Defining** the function can be compared to writing a recipe, or taking a screenshot of a recipe on our phone. It has the ingredients and directions, but that alone won't cook the meal.
- **Calling** the function can be compared to following the directions of the recipe to cook the actual meal. If you never choose to cook the recipe - no harm, but it was a waste of time to write it out. The meal could be cooked once, twice, or many times!

While the code snippet below illustrates a very contrived function, it is valid JavaScript:



<br>
<div class="s-card">
  <h3>Pair Practice: Define and Call a Function</h3>
  <p>In your Breakout room, the person with the longest first name will Drive. The other will Navigate. The Driver should screenshare a replit and the Navigator should keep these instructions up.</p>
  <ul>
    <li><em>Referring to the lesson and your notes is encouraged, but for your learning, do not copy-and-paste!</em></li>
    <li>In a replit file or a file in VS Code, define a function named <code>printGreeting</code>. Inside the code block, write a <code>console.log</code> statement that prints a friendly greeting. Then, call the function.</li>
    <li>Run the code. You should see the <code>console.log</code> statement in your console.</li>
    <li>Now, add multiple <code>console.log</code> statements in your code block and try calling the function again.</li>
  </ul>
  <p>What did you learn about functions as a result of this exercise? What are you curious about? Be prepared to share when we come back together as a group.</p>
</div>
<br> -->

### A Function Metaphor

Often, we want to use a function to perform an action on or with a piece of data. Think back to those built-in methods. We didn't simply call the `startsWith()` method by itself. We called it on a String object and it returned a Boolean value. We can do the same thing with the functions we define. Think of your function like a machine with inputs and outputs. 

<img src="../assets/images/function-machine.png">

If this were a cookie machine, for example, the machine would take in all of the raw ingredients (eggs, flour, sugar, etc.) and perform some steps to make the cookies: 
1. Mix ingredients to make dough
2. Place dough balls on a baking sheet
3. Bake at 350 degrees for 10 minutes
4. Let cookies cool
5. Serve the cookies on a plate

We can imagine that our cookie machine would do all of those steps and then give us back freshly baked, warm cookies! 

Let's expand this example to any kind of machine. We give the machine the raw materials, it does something with those materials, and then returns the final product. This is _very_ similar to what we are doing with our own <span class="vocab">functions</span>. We can give the function some piece of data or information (or even multiple pieces of information) and then the function does something with that information and spits out a return value. 

<div class="s-card s-border-yellow-500">
  <h3>Waterfall</h3> 
  <p>Look at the function call below and make a guess about how this might be different from the previous method example.</p>
  <pre>
  greetATexan("Kaitlyn");
  // => "Howdy, Kaitlyn!"</pre>
  <p>Type your answers in the chat and be ready to submit when it's time!</p>
</div>
<br>

Without possibly having all the information about JavaScript syntax, you probably made some connection as to what might be happening with the previous code snippet. The `greetATexan()` function was called, but this time, we were able to dynamically change the name of the person we were greeting!

### Arguments and Parameters

<span class="vocab">Functions</span> can be more powerful and dynamic when they have additional information about the situation each time they are called. We must follow a specific syntax to "pass information" into a function:
- In the function definition, <span class="vocab">parameter</span>(s) must be declared. Parameters act like placeholder variables that can be accessed inside the function. As such, variable naming conventions should be followed when naming parameters.
- In the function call,  <span class="vocab">argument</span>(s) - the actual data - must be provided. Since this is actual data, it must be in the form of a valid JavaScript data type, such as a String or Number.
- The number of arguments passed in should match the number of parameters declared.

```javascript
function greetATexan(name) {
  return `Howdy, ${name}!`;
}

console.log(greetATexan("Kaitlyn"));
// => "Howdy, Kaitlyn!"

console.log(greetATexan("Brian"));
// => "Howdy, Brian!"
```

> **Note:** You'll notice that we are using the `console.log()` statement with the function call this time. This allows us to also **see** the return value of the `greetATexan` function printed to the console, but it is not necessary. The code `greetATexan("Kaitlyn")` by itself does return the string "Howdy, Kaitlyn!", but if we want to see it printed in the console, we will need to use `console.log()` along with the function call.

The following code snippet illustrates a function definition and call that involves 2 pieces of data, both Numbers.

```javascript
function subtract(max, min) {
  var difference = max - min;
  return difference;
}

console.log(subtract(10, 3));
//  => 7
```

<div class="s-card">
  <h3>Pair Practice</h3>
  <p>In your Breakout room, the person with the longest first name will Drive. The other will Navigate. The Driver should screenshare a replit and the Navigator should keep these instructions up.</p>
  <ul>
    <li>Write a function named <code>greetAnAnimal</code>. This method should declare one parameter, a String, and when called, should return a string with a greeting for the specific animal that was passed in as an argument.</li>
    <li>Write a function named <code>multiply</code>. This method should declare two parameters, both Numbers, and when called, should return the product of the two Numbers. Call the method several times with different arguments and run the code to ensure it's working as expected.</li>
  </ul>
</div>
<br>


### Return Values

It's important to note that JavaScript functions _are not required to have a return value_. The return statement is **optional** in JavaScript functions. As a result, it is entirely possible to write a JavaScript function that only performs a series of actions without returning anything at all. 

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

However, it is often preferable to have our function return a value, because it increases its utility. Let's take a look at an example. 

```javascript
function add(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
}

add(5, 2);
//  => 7
```

This `add` function adds the numbers together and logs the sum to the console. This is cool, but what if I wanted to use that number in a _different_ way? The example below shows how I might modify that function, so that it simply `returns` the sum instead of logging the value to the console. Then, I can do all kinds of different things with that return value! In this way, functions that return a value are more flexible than functions that only log to the console. 

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

>**Key Point:** Up until now, we've used the `console.log()` statement to see values printed to the console. Be careful not to confuse what you see in the console with the return value of the function or method -- these are two different things. We use `console.log()` to **see** data in the console, but what we see in the console is **not always** the return value.

<br>

### Storing a Return Value

The examples we've looked at so far call the function and execute the code within the function, but the return values go nowhere/can never be used in the program again. Many times, we'll store the return value of a function in another variable, as modeled below:

```javascript
function add(num1, num2) {
  return num1 + num2;
}

var sum1 = add(10, 4);
var sum2 = add(7, 20);

console.log(sum1);
console.log(sum2);
```

<div class="s-card">
  <h3>Pair Practice</h3>
  <p>In your Breakout room, the person with the shortest first name will Drive. The other will Navigate. The Driver should screenshare a replit and the Navigator should keep these instructions up.</p>
  <ul>
    <li>Write a function named <code>getAge</code>. This method should declare one parameter, a Number, representing a birth year.</li>
    <li> When called, the function should calculate the person's approximate age. Let's not worry about birth month or day. 😉 </li>
    <li>The function should return a Number representing the person's age.</li>
    <li>Call the function several times with different arguments and store the return values in variables.</li>
    <li>Print a sentence that says, "You have lived ___ years of life!" with each variable interpolated into the String.</li>
  </ul>
</div>

<br>

<div class="s-card s-border-yellow-500">
  <h3>Key Points Summary</h3>
  <ul>
    <li>A function is a packaged set of directions. If the function is never <em>called</em>, it will never run. And a function can be called many times, if needed!</li>
    <li>The number of arguments in a function call must match the number of parameters in the function definition.</li>
    <li>Function names should start with a verb and use <code>camelCase</code>.</li>
    <li>Return values are optional in JavaScript functions. If a return value is included in a function, that value after the <code>return</code> keyword is the data that will be returned when a function is called.</li>
  </ul>
</div>
<br>

## Self-Teach
Part of what you'll experience at Turing is learning a technical topic on your own. Practicing this skill at Turing will get you prepared for the job where you will do this often.

Take time between now and your next session to self-teach the following section.


## Warm-Up for Built-In Methods

<div class="s-card">
  <h3>Exploration: PART 1</h3> 
  <p>Fork, then run the code <a href="https://replit.com/@turingschool/m0-built-in-methods#index.js" target="blank">in this replit</a> and observe the output.</p>
  <p><strong>Discuss:</strong> How did each line of code, produce each respective line of output? Which parts make sense, and which are confusing?</p>
</div>
<br>

## Built-In Methods

Both `methods` and `functions` are sets of instructions that perform a specific task. The only difference is that a method is associated with an object, while a function is not. For now, we'll  use the term `method` to describe the pre-packaged functions that are built into the language and are called on a specific data type. The term `function` is used to describe a block of code that a developer designs to perform a particular task. Let's explore some of those built-in `methods` available to us in JavaScript. 

The code snippet below is an example from the previous Exploration activity: 

```javascript
console.log("Hello World".startsWith("H"));
```

>To describe the code snippet in English, one could say, "the `startsWith()` method is being called on the string 'Hello World'." Since "Hello World" does start with "H", `true` will be the return value. The `console.log()` command prints that return value of `true` to the console.

In this particular example, the utility of the `startsWith()` method is to determine if a String starts with a specified character, or not. It answers the question with a Boolean (`true` or `false`). The benefit of having this method built into JavaScript is if a developer needs to check if a String starts with a specific character, they can use the `startsWith()` method anywhere they need to check. If they didn't have a pre-packaged method, they'd have to write several lines of code involving logic, every time they want to check if an integer is odd. **Reusability is what makes methods and functions so powerful.**

<br>
<div class="s-card">
  <h3>Exploration: PART 2</h3> 
  <p>In <a href="https://replit.com/@turingschool/m0-built-in-methods#index.js" target="blank">the same replit</a> from the first exploration, comment <em>out</em> the code from Part 1, and <em>uncomment</em> the code under Part 2.</p>
  <ul>
    <li>Run the code.</li>
    <li>Discuss: What is different about this from the first set of method calls? How did each line of code, produce each respective line of output? Which parts make sense, and which are confusing?</li>
  </ul>
</div>
<br>

The following code snippet demonstrates that a method can be called on a variable assigned to data:

```javascript
var newString = "Hello World";
console.log(newString.toUpperCase());
```

>To describe the code snippet in English, one could say, "the first line declares a variable called `newString` and the second line calls the `toUpperCase()` method on the `newString` variable." As a result, the method will return a String object where any letter character in the original String stored in `newString` will now be uppercase. The `console.log()` command prints that return value of `"HELLO WORLD"` to the console. However, it's important to note that the original data stored in `newString` is not modified permanently. 

<br>
<div class="s-card">
  <h3>Exploration: PART 3</h3> 
  <p>In <a href="https://replit.com/@turingschool/m0-built-in-methods#index.js" target="blank">the same replit</a>, comment <em>out</em> the code from Part 2, and <em>uncomment</em> the variable declarations and first method call under Part 3.</p>
  <ul>
    <li>Run the code and read the error message carefully. Work to make sense of what the problem is.</li>
    <li>Comment out that method call, and uncomment the next one. Run the code and read the error message carefully. Work to make sense of what the problem is.</li>
    <li>Repeat the previous step until you've run the code for each method call.</li>
    <li>Modify the existing code so that it runs without errors.</li>
    <li><strong>Write down</strong> a 1-3 sentence explanation of your main takeaway from this exploration.</li>
  </ul>
</div>
<br>

<div class="s-card s-border-yellow-500">
  <h3>Key Points</h3> 
  <ul>
    <li>A method is a package of instructions that once defined, can be reused as many times as needed.</li>
    <li>A method can be called on a variable that holds data.</li>
    <li>JavaScript provides built-in methods for each data type, but not every method will work on every type of data.</li>
  </ul>
</div>
<br>

## Check For Understanding

- Complete the work <a href="https://github.com/turingschool/m0_fe_functions" target="_blank">in the CFU repository</a>.
- Add a link to your respository under a new section of your Mod 0 Gist called `Functions`.

<br>
<br>
<br>