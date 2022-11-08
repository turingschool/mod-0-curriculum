---
layout: lesson
title: Data Types
---

## Learning Goals

- Identify and use 3 basic Data Types
- Assign and reassign variables in JavaScript
- Comfortably use the Chrome Dev Tools

## Vocabulary

- <span class="vocab">JavaScript</span>
- <span class="vocab">assignment operator</span>
- <span class="vocab">Boolean</span>
- <span class="vocab">Console</span>
- <span class="vocab">Data Type</span>
- <span class="vocab">Dev Tools</span>
- <span class="vocab">Number</span>
- <span class="vocab">String</span>
- <span class="vocab">variable</span>

## What is JavaScript? 

JavaScript was created to make the web more dynamic. It is a scripting language made to run inside a host environment - like a web browser! It provides programmatic control over the objects in that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.

JavaScript can be client-side and server-side, meaning that it can be used to control user-facing interfaces (e.g. browsers) as well as handle the server-side extensions that connect with a database.

It’s a highly versatile and flexible language, favoring configuration over convention. This means that, when you’re working in JavaScript, there are TONS of different ways to accomplish the same task. Sometimes one is better than another, but often there’s not **ONE** right way to do something. JavaScript has become the most commonly used language of the web!

## Where To Run Code

By the end of this session, you'll be able to use a feature of the Chrome browser called the <span class="vocab">Dev Tools</span>, specifically a tool within it called <span class="vocab"><code>the Console</code></span>, to run and check your code. This is a great tool for a beginner, as well as a seasoned software developer, to have. This Console will allow you to explore and learn JavaScript and test out code you've written in a low stakes environment. It is quick and easy to open up Chrome and run your code immediately.

### Chrome Dev Tools Console: Tips & Tricks

- Open and close the Dev Tools with keyboard shortcut `cmd + opt + i` or `cmd + opt + j`. There are other ways to do this but this is strongly recommended as using keyboard shortcuts is most efficient and the norm in the industry
- The Dev Tools "drawer" can be readjusted to take up more or less of the entire browser window. Depending on the nature of your work, you may want to readjust this
- The Dev Tools can be "docked" on the left, bottom, or right sides of the browser window. To adjust, click the small 3 dot icon, then select your desired "Dock side"
- The Dev Tools can be displayed with Dark Mode or Light Mode. Adjustments can be made to that in the "Settings" of the Dev Tools which can be found by clicking the small gear icon
- When you open the Dev Tools console, depending on the site you are on, you might see warnings or errors. You can type `clear()` and hit `return` at anytime to clear those out

![Screenshot of Chrome Dev Tools with 3 dot icon and gear icon circled](../../assets/console.png)


<div class="try-it">
  <h3>You Do: Chrome Dev Tools</h3>
  <ul>
    <li>Open the Dev Tools in the Chrome browser using the keyboard shortcut.</li>
    <li>Practice adjusting the size of the Dev Tools.</li>
    <li>Practice changing the Dock side - leave it on a side you prefer. You can always change your mind later!</li>
    <li>If you'd like to change to Dark or Light mode, do that in the Settings.</li>
    <li>Open up the Dev Tools in 5 different tabs; each tab should be on a different site. If you see any errors or warnings in the console, use <code>clear();</code> or keyboard shortcut <code>cmd + k</code>.</li>
    <li>Close the Dev Tools in all tabs using the same keyboard shortcut.</li>
    <li>Reopen the Dev Tools in one tab; it should have kept the previously selected settings in regards to size, Dock side, and Dark or Light mode.</li>
  </ul>
</div>

## Data Types

In this lesson, we will use 3 of JavaScript's Data Types. A <span class="vocab">Data Type</span> classifies each piece of data in a JavaScript program.
- <span class="vocab">String</span> - Any series of characters (alpha, numeric, or symbol) between quotation marks
- <span class="vocab">Number</span> - Any positive or negative number, including 0, whole or decimal
- <span class="vocab">Boolean</span> - `true` or `false`

To connect to how these data types are used in an application we all have some experience with, consider the steps you took to enroll at Turing in the Populi application:
- **String** - You provided your email address and it was stored as a string, for example: `"helloworld@gmail.com"`
- **Number** - You provided your date of birth and the program calculated your age, for example: `37`
- **Boolean** - Once you paid your deposit, the "paid deposit" field said `true`

<div class="s-card">
  <h3>Deciding on a Data Type</h3>
  <p>For each of the items listed below, determine which Data Type seems most appropriate to store it as. If you are unsure of any, start a discussion in your Slack small group.</p>
  <ul>
    <li>Username/handle</li>
    <li>Date of Birth</li>
    <li>Age</li>
    <li>Number of Likes</li>
    <li>Balance on a bank account</li>
    <li>Currently online</li>
    <li>Daily countdown to a big event</li>
    <li>Caption for an image</li>
  </ul>
</div>

## Variables

Pieces of data in the various types we've discussed so far are valid JavaScript code just as they are. We can demonstrate that by typing `"helloworld@gmail.com"` or `37` or `false` into the Chrome Dev Tools Console. We know they are valid because we don't get an error. If `helloworld@gmail.com` is typed in, we _will_ get an error, and possibly a helpful suggestion!

However, if we ever want to reference that email address ever again in our code, the only way would be to read that part of the screen and manually type it out again - and that's not going to make for a very efficient application.

<span class="vocab">Variables</span> are what allow us to store data in a JavaScript program. We can think of them as storage containers that hold items we care about and want to keep track of. The label on top of that container is what we can compare to a variable _name_. Variables can store any of the Data Types we've learned today as well as others that you'll learn about in upcoming lessons.

### Variable Syntax

In JavaScript, we define variables by starting with the keyword `var`, typing the name of the variable we wish to create, the <span class="vocab">assignment operator</span>, then the value being stored.

```ruby
var email = "helloworld@gmail.com"
var startingAge = 37
var depositPaid = true
```

>To describe the first line of code in the previous example, one might say "This line of code declares a variable named `email` and assigns it to the String of `helloworld@gmail.com`".

If our JavaScript program has data stored in variables, we are able to reference those variables at any time to access the data. This can be demonstrated in the Chrome Dev Tools Console.

![Screenshot of Chrome Dev Tools with variables declared and called](../../assets/console2.png)

### Best Practices for Naming Variables

Naming can be hard, but is important to be thoughtful about and follow conventions of the language you are working with so that your code is easily accessible and readable for those you are collaborating with. A few key points:
- All JavaScript variables should use `camelCase` - all characters in the first word should be lower cased; in multi-word variables, the first character of the second word should be capitalized.
- Variable names should describe the type of data they hold without being overly verbose or specific (examples: `name`, `email`, etc. non-examples: `x`, `ftga23`, `nameOfIncomingMod1FrontEndStudent`).

<div class="s-card">
  <h3>Naming Conventions</h3>
  <p>In your notebook, write down each of the following variable names and classify it as a strong variable name that follows JavaScript conventions <em>or</em> a poor variable name. Be ready to explain why you deemed any variable name a poor one.</p>
  <ul>
    <li><code>isHungry</code></li>
    <li><code>z</code></li>
    <li><code>user_id</code></li>
    <li><code>is_hungry</code></li>
    <li><code>lastdateofcontact</code></li>
    <li><code>depositHasBeenPaid</code></li>
    <li><code>status</code></li>
    <li><code>1st_class</code></li>
  </ul>
</div>
<br>

### Reassigning Variables

We often need to write code that changes the data stored in a variable. Consider this Populi example:
- When a student first creates a profile, the `depositPaid` variable is automatically assigned to `false`.
- Once the student pays their deposit, some code is triggered to change that value to `true`.

To do that, we use the exact same syntax that we used to make the original assignment, but without the `var` keyword. We can run the code that follows, or code like it, in `dev tools` to demonstrate that the value has changed.

```javascript
var depositPaid = false
depositPaid // => false

depositPaid = true
depositPaid // => true
```

<div class="s-card">
  <h3>Variables Practice</h3>
  <ul>
    <li>Open the Chrome Dev Tools Console using the keyboard shortcut.</li>
    <li>Declare 3 variables; a String, Number, and Boolean.</li>
    <li>Call each variable to confirm it was stored correctly.</li>
    <li>Reassign each variable to a new value, then call it again to confirm it does indeed store the new value.</li>
    <li>Close the Chrome Dev Tools Console using the keyboard shortcut.</li>
  </ul>
</div>

## Dev Tools Console vs. VS Code

When VS Code was introduced in a previous lesson, it was shared that VS Code (or the text editor of choice) is where JavaScript code should be written. That is true. So, why did this lesson ask the reader to write JavaScript code in the Chrome Dev Tools Console?

- JavaScript can run in the browser. Sometimes developers find it easier and quicker to run small pieces of code in the Dev Tools Console, rather than create an entire file and open the text editor, etc.
- When building actual applications, a text editor is necessary. This allows us to write large code files, save them with version control (Git), and more.

This lesson exposed the reader to the Chrome Dev Tools Console as an _option_ and _resource_ for a place to write and run JavaScript code.

**One difference to note, at this stage in knowledge and learning, and being able to see the output.**
- In the Chrome Dev Tools Console, one can type the name of a variable to _call_ it, and after pressing the return key, the Console will display the value of that variable.
- When writing code in VS Code, simply typing the name of a variable will not result in showing the human the value of the variable. Two steps need to be taken:
1. Instruct the program to print out the value of the variable. `console.log(depositPaid)` is an example of a `console.log` statement that will print out the value of the `depositPaid` variable.
2. Run the code. In the Terminal, while navigated to the directory that the file containing the code you want to run, run `node filename.js`. And `console.log` statements should print out. Additionally, any errors in the code may produce an error message at this time.
The Check For Understanding will provide a practice opportunity for this section.

## Check For Understanding

_Complete this CFU **after** you've done the live GitHub lesson._

Use everything you’ve learned with VS Code, Git, GitHub, Data Types and variables, complete this challenge:

1. Create a new directory called `variablePractice`.
1. Inside that directory, create a file called `variables.js`.
1. Initialize `git` inside of the directory.
1. Commit your work (Think about what message should you use here).
1. Go to GitHub and create a repository with the same name - `variablePractice`.
1. Push your local directory to GitHub by following the instructions.
1. In your `variables.js` file, add a few variables that are assigned to Strings.
1. Commit your work.
1. In your `variables.js` file, add a few variables that are assigned to Numbers.
1. Commit your work.
1. In your `variables.js` file, add a few variables that are assigned to Booleans.
1. Commit your work.
1. In your `variables.js` file, leave the original String variables as declared, but add some code to _reassign_ them to different values.
1. Write several `console.log` statements.
1. `NEW` Run your code by going to the Terminal and running `node variables.js` - make sure you are inside the `variablePractice` directory when doing so.
1. Commit your work.
1. Push your changes to GitHub.

Please submit the link to your GitHub repository in the submission form.

<br><br>
