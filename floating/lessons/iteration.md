
from agenda
      <li>demonstrate iteration in real-world and programming situations</li>

      <li><strong>30 min: </strong><a href="#iteration">Iteration</a></li>

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
  <h4>Example #2: Multiplying By Six</h4>
  <iframe height="350px" width="100%" src="//repl.it/@rwarbelow/mod0iterationRuby2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
  <div class="try-it">
    <h3>Try It: Iteration Syntax</h3>
    <p>Fill in the missing pieces of the iteration example below:</p>
    <iframe height="350px" width="100%" src="//repl.it/@rwarbelow/mod0iteration3?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    <p>Fill in the missing pieces of the iteration example below:</p>
    <iframe height="350px" width="100%" src="//repl.it/@rwarbelow/mod0iteration4?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    </div>
  </div>
</div>
