---
layout: page
title: Session 5
subheading: Attention to Detail and Iteration
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>define iteration in programming</li>
      <li>demonstrate iteration in real-world and programming situations</li>
      <li>pseudocode out a problem</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Follow-Ups and Goals</li>
      <li><strong>35 min: </strong><a href="#iteration">Iteration</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>35 min: </strong><a href="#pseudocoding">Pseudocoding</a></li>
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

## Housekeeping and Goals

### Wins

- You finished the assessment!

### Follow-Ups

- We'll have scores back to y'all by early next week!
- Be sure to use the formula pinned in the channel when asking technical questions
- Capstone is due in a few weeks! Get on it!

### Today's Goals

(See above)

## Intros, Review, and Icebreaker

<div class="try-it">
  <h3>Intros, Review, and Icebreaker</h3>
  <p>Person with the shortest first name goes first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What is a book, tv show, or movie that you've read/watched recently and really enjoyed? Why?</p>
  <p>3. Accountability review: what tangible progress have you made toward your mod 0 focus skills?</p>
  <p>4. Determine who will bring your breakout group questions back to the whole group</p>
  <p>Have extra time? Share what extra things you're doing to get ready to start school at Turing.</p>
</div>

<a name="iteration"></a>
## Iteration

Iteration (or looping for a specified number of times) is a process of repeating a task for each object in a collection. For each of the scenarios below, we'll walk through using props to demonstrate the concept.

### Iteration in Real Life

These are examples that would be programatically challenging because they would require a ton of steps, but are things that we do everyday.

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
      <td>repeat with next paper</td>
    </tr>
    <tr>
      <td>Feeding animals</td>
      <td>animals</td>
      <td>animal</td>
      <td>
        <ol>
          <li>bring the animal to the food bucket</li>
          <li>allow the animal to eat</li>
          <li>bring animal back to barn</li>
        </ol>
      </td>
      <td>repeat with next animal</td>
    </tr>
  </tbody>
</table>

### Iteration in Programming

By "in programming", we mean things that could be done, with relative ease, by a computer. Like crunching numbers.

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
      <td>Calculating max heart rate</td>
      <td>birth years</td>
      <td>year</td>
      <td>
        <ol>
          <li>subtract birth year from 2019 to get age</li>
          <li>subtract age from 220</li>
        </ol>
      </td>
      <td>repeat with next year</td>
    </tr>
    <tr>
      <td>Formatting names</td>
      <td>names</td>
      <td>name</td>
      <td>
        <ol>
          <li>capitalize the first letter</li>
          <li>lowercase all remaining letters</li>
        </ol>
      </td>
      <td>repeat with next name</td>
    </tr>
  </tbody>
</table>

<div class="try-it">
  <h3>Try It: Iteration in Real Life and Programming</h3>
  <p>Brainstorm a real life scenario that uses iteration. Fill out the table below and be ready to share.</p>
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

### Iteration Syntax

We'll go into breakout rooms to briefly discuss the syntax for iterating in Ruby and JavaScript.

<div>
  Are you a <button class="iteration-toggle" id="fe-show">front end</button> or <button class="iteration-toggle" id="be-show">back end</button> student?
<div class="hidden fe-iteration">
  <p>The code that you see below is written using JavaScript. This syntax is something that you'll see all over the place, so it's important to get used to it. You don't need to memorize every little symbol for now, but knowing how to explain the big pieces is important.</p>
  <h4>Example #1: Grading papers for five students</h4>
  <iframe height="350px" width="100%" src="//repl.it/@rwarbelow/mod0iterationJS1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
  <div class="things-to-note">
    <h4>Things to Note: For Loop Vocabulary</h4>
    <ul>
      <li><code>var students = ['Megan', 'Jose', 'Xavier', 'Ali', 'Miriam'];</code><br> We use Javascript keyword <code>var</code> to <span class="vocab">declare</span> a <span class="vocab">variable</span> <code>students</code> and assign the <span class="vocab">array</span> of <span class="vocab">strings</span> to the <span class="vocab">variable</span> <code>students</code>.</li>
      <li><code>for (i = 0; i < students.length; i++)</code><br> We use Javascript keyword <code>for</code> to begin setting up our <span class="vocab">for loop</span> which we will break down further.</li>
      <li><code>i = 0;</code><br><span class="vocab">Declare</span> our <span class="vocab">variable</span> <code>i</code> and assign it to the <span class="vocab">integer</span> 0</li>
      <li><code>i < students.length;</code><br> We set up our <span class="vocab">conditional</span> statement that the <span class="vocab">for loop</span> will evaluate before entering the loop. On the first run through <code>i = 0</code>, so this statement evaluates to <code>0 < students.length;</code>, which can be broken down further to <code>0 < 5</code>, which evaluates to true. Think of <span class="vocab">conditionals</span> as questions that always evaluate to true or false.
      </li>
      <li><code>i++</code><br>Our <span class="vocab">incrementer</span> that will add one to i each time we pass through the loop. Another way to think about it is each time <code>i < students.length</code> is true we will increment <code>i</code> by one for the next time we evaluate the <span class="vocab">conditional</span> <code>i < students.length</code> So, after we've run through the <span class="vocab">for loop</span> once, the <span class="vocab">for loop</span> looks like this: <code>(i = 1; i < students.length; i++)</code> the second time through. This can break down further to <code>(i = 1; 1 < 5; i++)</code></li>
      <li><strong>Curly Brackets or Curly Braces:</strong>
      <code><br>
        {
          Within these brackets is where we do some kind of programming/logic to each element of our collection within our loop
        }
      </code><br>
      <strong>Todo:</strong> Google <code>console.log</code> and other console methods that are available to you in a Javascript console.</li>
      <li><code>students[i]</code><br> Access the <span class="vocab">element</span> of the <code>students</code> <span class="vocab">array</span> at <span class="vocab">index position</span><code>i</code> which will change as <code>i</code> changes and we increment through the <span class="vocab">for loop</span>
      As we move through the loop this breaks down to <code>students[0]</code>, next time through the loop: <code>students[1]</code>, next time through the loop: <code>students[2]</code> ...</li>
  </ul>
</div>

  <h4>Example #2: Multiplying By Six</h4>
  <iframe height="350px" width="100%" src="//repl.it/@rwarbelow/mod0iterationJS2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
  <div class="try-it">
    <h3>Try It: Iteration Syntax</h3>
    <p>Fill in the missing pieces of the iteration example below:</p>
    <iframe height="350px" width="100%" src="//repl.it/@rwarbelow/mod0iterationJS3?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    <p>Fill in the missing pieces of the iteration example below:</p>
    <iframe height="350px" width="100%" src="//repl.it/@rwarbelow/mod0iterationJS4?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
  </div>
</div>
<div class="hidden be-iteration">
  <p>The code that you see below is written using Ruby. This syntax is something that you'll see all over the place, so it's important to get used to it. You don't need to memorize every little symbol for now, but knowing how to explain the big pieces is important.</p>
  <h4>Example #1: Grading papers for five students</h4>
  <iframe height="350px" width="100%" src="//repl.it/@rwarbelow/mod0iterationRuby1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
  <h4>Example #2: Multiplying By Two</h4>
  <iframe height="350px" width="100%" src="//repl.it/@TimTyrrell1/RubyExampleNumberIteration?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
  </div>
</div>

## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body.
<hr>

<a name="pseudocoding"></a>
## Breaking Apart A Problem - Pseudocode

The ability to critically examine a problem and break it down into smaller pieces is an essential skill of a developer that can be improved with practice. Breaking large problems into several smaller problems can help you in every step of the development process:

- *Planning:* Consider a situation where a not-as-technical boss asks the development team to make a new, large feature. Everyone will benefit from time spent laying out all the specific steps towards achieving the bigger end goal. Not only will your team be better able to communicate how much time completing the feature is expected to take, but individual tasks can be divided among your team in a way that is strategic and fair.

- *Coding:* Breaking apart code challenges into steps is often referred to as `pseudocode`. A recommended approach is to write down short explanations of what specifically each line of code you will write will do. Pseudocode keeps your thoughts in order, especially helpful for when you might need to put a little research into HOW to accomplish all the steps involved. Further, pseudocode is an excellent approach to explaining code to your team because it is code-language agnostic, allowing non-technical teammates, or teammates who work with different technology, to pick up your ideas more easily. 

We'll practice some of the coding and business applications of breaking problems apart below.

## Turning data into a Display

Imagine the following scenario for the next exercises: 

You are a developer for a retail outlet. Your store has a customer rewards system, and tracks various data about its customers.

### Task 1: Publish contest winners

Your store has started a promotion where 3 customers are randomly selected to win a prize each month. The winners will be announced on your website, and you will receive the three customer IDs of the winners in a collection. You have also been told to build a form to verify the winner via customer ID and email address to send them a digital coupon.

What specific steps must be taken to display the winners names on a website? What questions come up when you think about this process, and how might you incorporate those into your steps? While you might not know the specifics of HOW everything will work, try to think of every step that will need to occur along the way, and include when you might use specific methods, or patterns you've learned about.

#### Finish brainstorming and writing down your steps before proceeding!
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Task 2: Data Normalization

You were able to retrieve the names of the three customers! The data you receive back appears as follows:

```
[ "jokic_nikola", "murray_jamal", "harris_garry" ]
```

Write pseudocode explaining how you would go about transforming the names into what you'd want to display on your website. Please note that the format is currently `lastname_firstname` and the desired result would be `Firstname Lastname`.
When possible, list ideas for specific methods you'd use. (Remember- Google is your friend)

### Extension - Hash/Object

Frequently, you will receive information from databases in the form of a hash (or 'object' in javascript). In the example below, we get back a hash per winner, stored in an array. Arrays of objects can be tricky to navigate, so putting some thought into this now is great prep work, even if this is a work in progress:

```
var customerNames = [
{ firstName: "nikola", lastName: "jokic" },
{ firstName: "william", lastName: "barton_iii" },
{ firstName: "jamal", lastName: "murray" }
];
```

Again, write pseudocode explaining how you would access this information and change it into a format to display.
When possible, list ideas for specific methods or notation of obtaining data.

### Other Reminders

* This is your last mod 0 session
* When you start working on Mythical Creatures in Mod 1, think back to OOP, classes and methods in mod 0
* Moving forward:
  * Keep up the hard work
  * Keep asking questions in your cohort channels
  * Ellen, Mason and I are still around if you need us
  * Capstone is due in a couple weeks! (see your mod 0 calendar)

* Learning to code is much more like exercise than epiphanies - Think about MJ!

> Quote from Meg Stang (BE instructor) - "I've noticed that the students that do the bare minimum on their mod 0 capstone are the ones that usually struggle for at least the first half of the mod."
