---
layout: page
title: Session 2
subheading: Data Types, Iteration, Documentation, Googling
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>use keyboard shortcuts to navigate your computer and Chrome</li>
      <li>define and identify use cases for basic data types</li>
      <li>demonstrate iteration in real-world and programming sitauations</li>
      <li>use documentation to find explanations and examples</li>
      <li>find answers to programming questions online</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Intros and Housekeeping</li>
      <li><strong>10 min: </strong><a href="#shortcuts">Keyboard Shortcuts</a></li>
      <li><strong>30 min: </strong><a href="#findinganswers">Googling</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>30 min: </strong><a href="#datatypes">Basic Data Types</a></li>
      <li><strong>30 min: </strong><a href="#iteration">Iteration</a></li>
      <li><strong>5 min: </strong><a href="#homework">Homework Preview</a></li>
    </ul>
  </div>
  <div>
    <h3>Materials</h3>
    <ul>
      <li>Notebook</li>
      <li>Writing instrument</li>
      <li>Laptop</li>
      <li>Headphones & mic</li>
    </ul>
  </div>

</div>

## Intro/Housekeeping 

* Intros: Rachel and Tim
* Review goals for session
* Text on this page will not save, so don't refresh or close this window

<a name="shortcuts"></a>
## Why Use Shortcuts?

Most computer users rely heavily on the mouse to open applications, interact with programs, etc. You might think that you're quick with a mouse, but just wait until you get good at <span class="vocab">keyboard shortcuts</span>. 

Initially, your flow will be slower as you learn and memorize each of the shortcuts. However, if you force yourself to use these shortcuts, you'll become MUCH faster in the long run. 

<div class="try-it">
  <h2>Try it: Shortcuts</h2>
  <div class="flex-container tips">
    <div>
      <h3>Mac Environment</h3>
      <p>Use these shortcuts to quickly move around within your environment.</p>
      <ul>
        <li>
          <strong>Open a program or search for a file:</strong>
          <pre>command + spacebar</pre>
          <p>Then start typing the name of the program or file to search for such as 
            <i>"Terminal"</i> Or <i>"Chrome"</i>,
          then press return to open that program or file</p>
        </li>
        <li>
          <strong>Cycle through open programs:</strong>
          <pre>command + tab + tab ...</pre>
        </li>
        <li>
          <strong>Switch between separate open windows of the same program:</strong>
          <pre>command + ~</pre>
        </li>
        <li>
          <strong>Quit an Open Program:</strong>
          <pre>command + Q</pre>
        </li>  
      </ul>
    </div>
    <div>
      <h3>Chrome Browser</h3>
      <p>Start by opening Chrome with the shortcut (comamnd + space) you already learned.</p>
      <ul>
        <li>
          <strong>Bookmark Page:</strong>
          <pre>command + D</pre>
        </li>
        <li>
          <strong>Open New Tab:</strong>
          <pre>command + T</pre>
        </li>
        <li>
          <strong>Open New Window:</strong>
          <pre>command + N</pre>
        </li>
        <li>
          <strong>Open New Incognito Window:</strong>
          <pre>command + shift + N</pre>
        </li>
        <li>
          <strong>Highlight Current URL:</strong>
          <pre>command + L</pre>
        </li>
        <li>
          <strong>Cycle Through Tabs:</strong>
          <pre>Right: control + tab</pre>
          <pre>Left: control + shift + tab</pre>
        </li>
        <li>
          <strong>Reload Page:</strong>
          <pre>command + shift + R</pre>
        </li>
        <li>
          <strong>Close Tab:</strong>
          <pre>command + W</pre>
        </li> 
      </ul>
    </div>
  </div>
</div>

<a name="findinganswers"></a>
## Googling

Believe it or not, a good chunk of your time as a programmer will be spent Googling to find answers to your questions. In fact, a somewhat experienced programmer will Google at a much higher rate than a beginning programmer. Therefore, it's really important to get good at Googling. 

For a frame of reference so that you know just how often we rely on Google (even the "easy" stuff), this is my most recent Chrome history as I've been building this curriculum 😂

<img style="width: 50%" src="images/rachel_history.png" alt="Rachel's search history">

When I Google programming questions, I _usually_ include three things: 

<ol>
  <li>What I want to do (verb)</li>
  <li>to what thing (noun)</li>
  <li>using what language or tool</li>
</ol>

For example, if I wanted to add a thick green border to a heading on my webpage and I'm using plain CSS for styling, I might google this:

```
how to add border to heading CSS
```

<div class="things-to-note">
  <h4>Things to Note</h4>
  <ol>
    <li>If the question is generic to programming, replace the name of the langauge with "programming"</li>
    <li>If the thing you need to search is a definition (as opposed to how to do something), replace "how to" with "what is"</li>
  </ol>
</div>

<div class="try-it">
  <h2>Try It: Writing Google-able Phrases</h2>
  <p>Write out a Google-able search phrase for each of the following scenarios. <strong>Do not get hung up on being unfamiliar with the terminology for each scenario.</strong> We just want phrases to put into Google.</p>
  <p>I'm making a webpage using HTML and CSS, and my image is pressed right up to the edge of the window. I want some more space on the left side of the image so that it's not touching the browser window.</p>
  <textarea rows="1"></textarea>
  <p>In my JavaScript program, I need to capitalize the first letter of each word in a sentence.</p>
  <textarea rows="1"></textarea>
  <p>I'm building a game using Ruby and I have an array of six elements. I need to figure out how to get rid of the last three elements in the array.</p>
  <textarea rows="1"></textarea>
  <p>I am using Git for version control and made a typo in a commit message. I need to change it before I push my changes to GitHub.</p>
  <textarea rows="1"></textarea>
  <p>I got this error message when I ran my Ruby program and I don't know what it means or how to fix it: <em>"unterminated string meets end of file"</em></p>
  <textarea rows="1"></textarea>
  <p>I want to turn on the autosave feature in my text editor so that I don't have to remember to save each time I run my code.</p>
  <textarea rows="1"></textarea>
  <p>None of my JavaScript works in the browser even though I know my code is right. </p>
  <small>(This one doesn't really follow our pattern for Googling, but what might you search?)</small>
  <textarea rows="1"></textarea>
</div>

#### Sifting Through Results

Once you formulate a good Google search and receive your results, there are a few things you'll want to consider when determining which results to open. 

<ol>
  <li><strong>Posting Date:</strong> Programming languages and best practices change <strong>fast</strong>. Therefore, you want to make sure that you're getting the most up-to-date information. While there is no hard and fast rule for what is considered up-to-date, I generally avoid reading things that were posted more than two years ago. However, even things posted two years ago might be obsolete if you're working with a cutting-edge technology or langauge.</li>
  <li><strong>Example Code:</strong> The best resources generally include example code snippets that you can use to compare to your own code.</li>
  <li><strong>Description/Text:</strong> Along with code snippets, the best results are those that also include a simple description of what the code is doing.</li>
  <li><strong>Publisher:</strong> There are a lot of sites out there that are reputable and some where you'll need to use your best judgement. 
    <ul>
      <li><strong><a href="http://ruby-doc.org" title="">ruby-doc.org</a></strong>: While the Ruby Docs are trusted, they can be somewhat difficult for beginners to navigate and understand</li>
      <li><strong><a href="http://developer.mozilla.org" title="">developer.mozilla.org</a></strong>: Considered some of the best information for HTML, CSS, JavaScript</li>
      <li><strong><a href="http://git-scm.com" title="">git-scm.com</a>, <a href="http://help.github.com" title="">help.github.com</a></strong>: Both Git and Github's official documentation</li>
      <li><strong>Official site for a specific tool or language</strong>: Good place to start if you have a question related to a library or framework</li>
      <li><strong>Stack Overflow</strong>: Stack Overflow is one of my personal favorite resources for getting unstuck; however, make sure to check that the question is actually the <strong>same question</strong> that you're asking, the answer is not <strong>outdated</strong>, and that the answer is <strong>upvoted</strong> multiple times. In addition, read the comments below the top answer to see if there is any new information or different scenarios that might fit your issue better.</li>
      <li><strong>W3 Schools</strong>: Generally considered behind-the-time and is unfortunately often the first result that appears when you search for front-end questions</li>
      <li><strong>Blog Posts</strong>: As a beginner (and even now!), I found a lot of answers through blog posts and tutorials. Again, watch the <strong>date</strong> on these posts and understand that these posts may or may not reflect best practices. </li>
      <li><strong>Videos</strong>: Video walk-throughs and tutorials are usually pretty great, but they can be time consuming if you're looing for a quick answer. Again, check the date of the post.</li>
    </ul>
  </li>
  <li><strong>Question vs. Answer</strong>: If you're on a posting site, be sure that you read through the question, but look at <strong>code from the answer</strong>. Generally code from questions is incorrect.</li> 
</ol>

<div class="try-it">
  <h2>Try It: Sifting Through Results</h2>
  <p>I searched "how to center an image css" and got <a target="_blank" href="https://www.google.com/search?safe=active&ei=qN1EXNnoF-We0gKP2IOwAQ&q=how+to+center+an+image+css&oq=how+to+center+an+image+css&gs_l=psy-ab.3..0i7i30l10.11903.12880..12979...0.0..0.273.1042.3j2j2......0....1..gws-wiz.......0i71j0i13.eQptyPfOhmQ" title="">these Google results</a>.</p>

  <p>Go down the results list and, in the box below, jot down which results you would consider using to solve this problem. Be sure to visit the page to make sure it has code examples and a description.</p>
  <textarea rows="5"></textarea>
</div>

<a name="datatypes"></a>
## Basic Data Types 

In most programming languages, you'll find the same basic <span class="vocab">data types</span>. A data type represents the kind of data that you can use in the programming language. In this section, we'll discuss five different basic data types that are applicable to both the front end and back end. 

#### Strings

Use your Googling skills to figure out <strong>what strings are used for in programming</strong> and jot down your notes in the box below.

<textarea rows="4"></textarea>

<div class="toggle-show">
  Done? Click here to reveal.
  <div class="hidden">
    Strings definition
  </div>
</div>

<div class="try-it">
  <h2>Try It: Strings in a Grocery Shopping App</h2>
  <p>Imagine that you're making a grocery shopping application. What sorts of data would you use strings for?</p>
  <p> Here's one example to get you started: the name of the store would be a string.</p>
  <textarea rows="4"></textarea>
</div>


#### Integers and Floats

Use your Googling skills to figure out <strong>what integers and floats are used for in programming</strong> and jot down your notes in the box below.

<textarea rows="2">Integers: </textarea>
<textarea rows="2">Floats: </textarea>

<div class="toggle-show">
  Done? Click here to reveal.
  <div class="hidden">
    Integers and Floats definition
  </div>
</div>

<div class="try-it">
  <h2>Try It: Integers and Floats in a Grocery Shopping App</h2>
  <p>Think back to your shopping application. What sorts of data would be stored as an integer? What about a float?</p>
  <textarea rows="4"></textarea>
</div>

#### Booleans

Use your Googling skills to figure out <strong>what a boolean is used for in programming</strong> and jot down your notes in the box below.

<textarea rows="4"></textarea>

<div class="toggle-show">
  Done? Click here to reveal.
  <div class="hidden">
    Boolean definition
  </div>
</div>

<div class="try-it">
  <h2>Try It: Booleans in a Grocery Shopping App</h2>
  <p>Why might you use a boolean in a shopping application?</p>
  <p> Here's one example: Whether a specific store is open</p>
  <textarea rows="4"></textarea>
</div>

#### Arrays

Use your Googling skills to figure out <strong>what an array is used for in programming</strong> and jot down your notes in the box below.

<textarea rows="4"></textarea>

<div class="toggle-show">
  Done? Click here to reveal.
  <div class="hidden">
    Array definition
  </div>
</div>

<div class="try-it">
  <h2>Try It: Arrays in a Grocery Shopping App</h2>
  <p>What might you want to store in an array in your shopping app?</p>
  <p> Here's one example: past purchases</p>
  <textarea rows="4"></textarea>
</div>

#### Hashes or Objects

If you're in the front end program, we're going to call the next data type an "object". If you're in the back end program, we're going to call it a "hash". Use your Googling skills to search for <strong>what it is used for in programming</strong> and jot down your notes in the box below.

<textarea rows="4"></textarea>

<div class="toggle-show">
  Done? Click here to reveal.
  <div class="hidden">
    Hash/Object definition
  </div>
</div>

<div class="try-it">
  <h2>Try It: Hashes or Objects in a Grocery Shopping App</h2>
  <p>What might you want to store in a key-value format in your shopping app?</p>
  <p> Here's one example: employee counts per department (use keys for the departments in the store, use the values for the number of employees in each department)</p>
  <textarea rows="4"></textarea>
</div>

#### Syntax for Data Types

We'll go into breakout rooms to briefly discuss the syntax for iterating in Ruby and JavaScript. We will give you two examples of the syntax (one random example and one based on the grocery store examples) for each data type.

<div class="try-it">
  <h2>Try It: Syntax for Data Types</h2>
  <p>Use the text boxes below to write your own examples of strings, integers & floats, booleans, arrays, and hashes or objects, based on what you brainstormed for your grocery list.</p>
  
  <div class="flex-container">
    <div class="left">
      <h4>Strings</h4>
      <textarea rows="3"></textarea>
      <h4>Floats</h4>
      <textarea rows="3"></textarea>
      <h4>Arrays</h4>
      <textarea rows="3"></textarea>
    </div>
    <div>
      <h4>Integers</h4>
      <textarea rows="3"></textarea>
      <h4>Booleans</h4>
      <textarea rows="3"></textarea>
      <h4>Objects or Hashes</h4>
      <textarea rows="3"></textarea>
    </div>
  </div>
</div> 



<a name="iteration"></a>
## Iteration

Iteration (or looping for a specified number of times) is a process of repeating a task for each object in a collection. 

#### Iteration in Real Life

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Collection</th>
      <th>For each...</th>
      <th>Do this:</th>
      <th>Then:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Grading papers</td>
      <td>papers</td>
      <td>paper</td>
      <td>
        <ol>
          <li>read through it</li>
          <li>mark the score on the top</li>
        </ol>
      </td>
      <td>repeat with next object</td>
    </tr>
    <tr>
      <td>Feeding shelter animals</td>
      <td>animals</td>
      <td>animal</td>
      <td>
        <ol>
          <li>open the cage</li>
          <li>refill the food bowl</li>
          <li>close the cage</li>
        </ol>
      </td>
      <td>repeat with next object</td>
    </tr>
    <tr>
      <td>Admitting patrons to a concert</td>
      <td>patrons</td>
      <td>patron</td>
      <td>
        <ol>
          <li>scan the ticket</li>
        </ol>
      </td>
      <td>repeat with next object</td>
    </tr>
  </tbody>
</table>

<div class="try-it">
  <h2>Try It: Iteration in Real Life</h2>
  <p>Brainstorm a real life scenarion that uses iteration. Fill out the table below and be ready to share.</p>
  <table>
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Collection</th>
        <th>For each...</th>
        <th>Do this:</th>
        <th>Then:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
      </tr>
    </tbody>
  </table>
</div>

#### Iteration in Programming

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Collection</th>
      <th>For each...</th>
      <th>Do this:</th>
      <th>Then:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sending a newsletter</td>
      <td>emails</td>
      <td>email address</td>
      <td>
        <ol>
          <li>send the newsletter to that email address</li>
        </ol>
      </td>
      <td>repeat with next object</td>
    </tr>
    <tr>
      <td>Formatting addresses</td>
      <td>addresses</td>
      <td>address</td>
      <td>
        <ol>
          <li>verify that it starts with a number</li>
          <li>capitalize the first letter of each word in street address</li>
          <li>capitalize the first letter of the city</li>
          <li>capitalize the two letters for state abbreviation</li>
          <li>check that zip code is 5 digits</li>
        </ol>
      </td>
      <td>repeat with next object</td>
    </tr>
  </tbody>
</table>

<div class="try-it">
  <h2>Try It: Iteration in Programming</h2>
  <p>Think back to your grocery store app. What is something you said you'd keep inside of an array? Why might you need to iterate over that collection? Jot down your scenario below.</p>
  <table>
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Collection</th>
        <th>For each...</th>
        <th>Do this:</th>
        <th>Then:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
      </tr>
    </tbody>
  </table>
</div>

#### Iteration Syntax

We'll go into breakout rooms to briefly discuss the syntax for iterating in Ruby and JavaScript. 

<div>
  Are you a <button class="iteration-toggle" id="fe-show">front end</button> or <button class="iteration-toggle" id="be-show">back end</button> student?
  <div class="hidden fe-iteration">
    <p>The code that you see below is written using JavaScript. This syntax is something that you'll see all over the place, so it's important to get used to it. You don't need to memorize every little symbol for now, but knowing how to explain the big pieces is important.</p>
    <h4>Example #1: Grading papers for five students</h4>
    <pre>var students = ['Megan', 'Jose', 'Xavier', 'Ali', 'Miriam'];

for (i = 0; i < students.length; i++) {
  console.log('Grading paper for: ' + students[i]);
};</pre>
    <h4>Example #2: Multiplying By Six</h4>
    <pre>var numbers = [7, 18, 23, 38, 41, 57, 65];

for (i = 0; i < numbers.length; i++) {
  console.log('The answer is: ' + numbers[i] * 6);
};</pre>
    <div class="try-it">
      <h2>Try It: Iteration Syntax</h2>
      <p>Fill in the missing pieces of the iteration example below:</p>
      <textarea rows="6">
var birthdayPeople = ['Bonnie', 'Justin', 'Daniel', 'Alejandra', 'Michael', 'Giselle'];

for (i = 0; i < _______; i++) {
   console.log('Happy Birthday, ' + ______);
};
      </textarea>
      <p>Fill in the missing pieces of the iteration example below:</p>
      <textarea rows="6">
var numbers = [2, 4, 6, 8, 10, 12, 14, 16];

for (_____; ______; _____) {
   console.log('The number minus one is ' + ______);
___
      </textarea>
    </div>
  </div>
  <div class="hidden be-iteration">
    <p>The code that you see below is written using JavaScript. This syntax is something that you'll see all over the place, so it's important to get used to it. You don't need to memorize every little symbol for now, but knowing how to explain the big pieces is important.</p>
    <h4>Example #1: Grading papers for five students</h4>
    <pre>students = ["Megan", "Jose", "Xavier", "Ali", "Miriam"]

students.each do |student|
  puts "Grading paper for #{student}"
end
</pre>
    <h4>Example #2: Multiplying By Six</h4>
    <pre>numbers = [7, 18, 23, 38, 41, 57, 65]

numbers.each do |number|
  puts "The answer is #{number * 6}"
end
</pre>
    <div class="try-it">
      <h2>Try It: Iteration Syntax</h2>
      <p>Fill in the missing pieces of the iteration example below:</p>
      <textarea rows="6">
birthday_people = ["Bonnie", "Justin", "Daniel", "Alejandra", "Michael", "Giselle"]

birthday_people._____ do |_____|
    puts "Happy birthday, #{_______}!"
end
      </textarea>
      <p>Fill in the missing pieces of the iteration example below:</p>
      <textarea rows="6">
numbers = [2, 4, 6, 8, 10, 12, 14, 16]

______.each ___ |number|
    puts "The number minus one is #{_____}"
____
      </textarea>
    </div>
  </div>
</div>

<a name="homework"></a>
## Homework

[WIP]

<!-- 
* Probably combine with below. Discussion around required vs recommended with EM and RW.
* Your Mac has hidden directories only accessible through terminal. Lets talk about this. Google how to access them?

### Alumni Recommend
* Read this Medium post by Turing alumnus Sara Simon: <a href="https://medium.com/@sarambsimon/learning-fluency-672988a7ae52">Learning Fluency</a>
* Think about a subject you are comfortable researching. Apply that mindset to `Googling` for programming answers.
* Faster fingers. Create an account and get started with: <a href="https://typing.io/">Typing for Programmers</a>
* Stop using a mouse. Try to complete your tasks using only the keyboard.
* Do not copy and paste anything. Type everything out so it sticks and you get better.
* Read <a href="https://realworldcoding.io/how-to-google-programming-problems-effectively-90f2a43ef982" title="">How to Google Programming Problems Effectively</a>
* Read <a href="https://codeahoy.com/2016/04/30/do-experienced-programmers-use-google-frequently/" title="">Do Experienced Programmers Use Google Frequently?</a>
* Read <a href="https://www.forbes.com/sites/quora/2017/02/03/twenty-seven-things-i-wish-id-known-when-i-started-programming/#58d7dab56395" title="">27 Things I Wish I'd Known When I Started Programming</a>
* Up your Google game:

<div class="try-it">
  <h2>Try It: General Google Tips</h2>
  <p>Skim <a target="_blank" href="https://www.lifehack.org/articles/technology/20-tips-use-google-search-efficiently.html" title="">this article from Lifehack</a>, focusing on the following tips:</p>
  <ul>
    <li>2. Use quotes</li>
    <li>3. Use a hyphen to exclude words</li>
    <li>4. Use a colon to search specific sites</li>
    <li>9. Search for multiple words at once</li>
    <li>13. Use words that websites would use</li>
    <li>14. Use important words only</li>
    <li>17. Use descriptive words</li>
  </ul>
  <p>Test out the strategies as you go through them.</p>
</div>

 -->
