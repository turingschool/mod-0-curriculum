---
layout: page
title: Session 4 - FE
subheading: Basic Data Types, Variables
---

## Learning Goals

- Identify and use 3 basic data types
- Assign and re-assign variables in JavaScript (FE) or Ruby (BE)
- Comfortably use Chrome Dev Tool Console (FE) or IRB (BE)

## Agenda

- Where To Run Code
- Data Types & Variables
- Annotations

## Where To Run Code

As users of internet browsers (Chrome, Firefox, etc.), we sometimes take for granted all the work those browsers actually do! Behind the scenes, they read and run code that we as developers write and ultimately send to the browser. This session will not take you through details, but you will build knowledge and understanding about how that works as you progress through the Front-End program.

By the end of this session, you'll be able to use the Chrome browser as a tool to run and check your code. This is a great tool for a beginner, as well as a seasoned software developer, to have. The browser will allow you to explore and learn JavaScript and test out code you've written in a low stake environment. It is quick and easy to open up a browser tab and run your code immediately.

### Chrome Dev Tools Console: Tips & Tricks

- Open and close the Dev Tools with keyboard shortcut `cmd + opt + i` or `cmd + opt + j`. There are other ways to do this but this is strongly recommended as using keyboard shortcuts is most efficient and the norm in the industry
- The Dev Tools "drawer" can be readjusted to take up more or less of the entire browser window. Depending on the nature of your work, you may want to readjust this
- The Dev Tools can be "docked" on the left, bottom, or side sides of the browser window. To adjust, click the small 3 dot icon, then select your desired "Dock side"
- The Dev Tools can be displayed with Dark Mode or Light Mode. Adjustments can be made to that in the "Settings" of the Dev Tools which can be found by clicking the small gear icon
- When you open the Dev Tools console, depending on the site you are on, you might see warnings or errors. You can type `clear()` and hit `return` at anytime to clear those out

![Screenshot of Chrome Dev Tools with 3 dot icon and gear icon circled](./images/console.png)

<div class="try-it">
  <h3>You Do: Chrome Dev Tools</h3> 
  <ul>
    <li>Open the Dev Tools in the Chrome browser using the keyboard shortcut.</li>
    <li>Practice adjusting the size of the Dev Tools.</li>
    <li>Practice changing the Dock side - leave it on a side you prefer. You can always change your mind later!</li>
    <li>If you'd like to change to Dark or Light mode, do that in the Settings.</li>
    <li>Open up the Dev Tools in 5 different tabs; each tab should be on a different site. If you see any errors or warnings in the console, use <code>clear();</code></li>
    <li>Close the Dev Tools in all tabs using the same keyboard shortcut.</li>
    <li>Re-open the Dev Tools in one tab; it should have kept the previously selected settings in regards to size, Dock side, and Dark or Light mode</li>
  </ul>
</div>

## Data Types

In this session, we will use 3 of JavaScript's primitive Data Types:
- **String** - Any series of characters (alpha, numeric, or symbol) between quotation marks
- **Number** - Any positive and negative number, decimal or whole, including 0
- **Boolean** - `true` or `false`

To connect to how these data types are used in an application we all have some experience with, consider the steps you took to enroll at Turing in the Populi application:
- **String** - You provided your email address in a form and it was stored as a string, for example: `"helloworld@gmail.com"`
- **Number** - You provided your date of birth and the program calcalated your age, for example: `37`
- **Boolean** - Once you paid your deposit, the "paid deposit" field said `true`

<div class="try-it">
  <h3>Data Types & Breakout Room Roles (Groups of 3-4):</h3> 
  <p><em>Note: You are doing this work in the breakout room to practice collaboration and communication just as much as to practice identifying Data Types.</em></p>
  <ul>
    <li>Identify a time keeper</li>
    <li>Spend 2 minutes independently brainstorming Data Types for an app you are familiar with. Be ready to share with your group: the name of the app, example for String, Number and Boolean</li>
    <li>Spend 2 minutes sharing out and asking clarifying questions if needed</li>
    <li>Identify a presenter (someone who did not keep time). When we return to the main Zoom, this person will be asked to share the app and examples that a <em>different</em> student brainstormed</li>
  </ul>
</div>

## Variables

Pieces of data in the various types we've discussed so far are valid JavaScipt code just as they are. We can demonstrate that by typing `"helloworld@gmail.com"` or `37` or `false` into the console. We know they are valid because we don't get an error. If `helloworld@gmail.com` is typed in, we _will_ get an error. 

However, if we ever want to reference that email address ever again in our code, the only way would be to read that part of the screen and manually type it out again - and that's not going to make for a very efficient application.

**Variables** are what allows us to store data in a JavaScript program. We can think of them as storage containers that holds items we care about and want to keep track of. The label on top of that container is what we can compare to a variable _name_. Variables can store any of the Data Types we've learned today as well as others that you'll learn about in upcoming lessons.

### Variable Syntax

In JavaScript, we declare variables using the `var` keyword. This tells JavaScript that we’re about to make a new variable, or declare a variable.

```javascript
var email = "helloworld@gmail.com";
var startingAge = 37;
var depositPaid = true;
```

If our JavaScript program has data stored in variables, we are able to reference those variables at any time to access the data. This can be demonstrated in the console.

### Reassigning Variables

We often need to write code that changes the data stored in a variable. Consider the Populi example:
- When a student first creates a profile, the `depositPaid` variable is automatically assigned to `false`
- Once the student pays their deposit, some code is triggered to change that value to `true`

To do that, we reference the variable name, use the assignment operator, and provide the new value. This line is almost the same as the original assignment, but omits the `var` keyword. We can run the code that follows, or code like it, in the console to demonstrate that the value has changed.

```javascript
var depositPaid = false;
depositPaid // false

depositPaid = true;
depositPaid // true
```

<div class="try-it">
  <h3>Variables & Driver/Navigator (Pairs)</h3>
  <p><strong>Roles:</strong> The partner with the birthday closest to New Years will screen share and be the driver. The other partner will be the navigator, who dictates what the driver should do/type. Write the following code in the browser console:</p>
  <ul>
    <li>Declare 3 variables; a String, Number and Boolean</li>
    <li>Call each variable to confirm it was stored correctly</li>
    <li>Reassign each variable to a new value, then call it again to confirm it does indeed store the new value</li>
    <li><em>If time permits, switch roles and start over</em></li>
  </ul>
  <p>When you come back from the breakout room, be ready to screenshare with the whole group. If your pair is called on to share, the driver will be expected to screenshare <em>and</em> speak to the work you did as a team.</p>
</div>

## Code Annotations

Being a developer requires more than just writing code. Most of the job is actually reading others code and building on top of it. In order to do so, you’ll need to build your skills around:

- Reading other people’s code
- Annotation (adding your notes) to code other people have written
- Articulating (speaking about) code that isn’t yours

Annotating code is a great way to understand how code works and dive into code that you yourself did not write. One strategy to annotating code is to write comments directly in the code you are trying to decipher.

Most text editors, like Atom, allow you to add comments in your code. You can highlight a selection and use `cmd + /` to turn your text into a comment. Conversely, you can start any line with `//` for JavaScript to indicate a comment. You should see your syntax highlighting change to a different color when code has been commented out!

Annotation Example:
```javascript
var dogName = "Oscar";
var dogAge = 10;
var hungryDog = true;

console.log(dogName, dogAge, hungryDog);

dogName = "Sodie";
dogAge = 11;

console.log(dogName, dogAge, hungryDog);
```

```javascript
//variable dogName is declared and assigned to the String of "Oscar"
var dogName = "Oscar";
//variable dogAge is declared and assigned to the Number of 10
var dogAge = 10;
//variable hungryDog is declared and assigned to the Boolean of true
var hungryDog = true;

// Three variables - dogName, dogAge, and hungryDog are logged to the console
// Expected output: "Oscar", 10, true
console.log(dogName, dogAge, hungryDog);

// variable dogName is reassigned to the String of "Sodie"
dogName = "Sodie";
// variable dogAge is reassigned to the Number of 11
dogAge = 11;

// Three variables - dogName, dogAge, and hungryDog are logged to the console
// Expected output: "Sodie", 11, true
console.log(dogName, dogAge, hungryDog);
```

## Putting it All Together

Use everything we’ve worked on with git, GitHub, data types and variable assignment:

1. Create a new directory called `variable-practice`
1. Inside that directory, create a file called `variables.js`
1. Initialize `git` inside of the directory
1. Commit your work (Think about what message should you use here)
1. Go to GitHub and create a repo with the same name - `variable-practice`
1. Push your local directory to GitHub by following the instructions
1. In your `variables.js` file, add a few variables that are assigned to Strings
1. Commit your work
1. In your `variables.js` file, add a few variables that are assigned to Numbers
1. Commit your work
1. In your `variables.js` file, add a few variables that are assigned to Booleans
1. Commit your work
1. Annotate ONE of the files
1. Commit your work
1. Push your changes to GitHub