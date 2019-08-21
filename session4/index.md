---
layout: page
title: Session 4
subheading: Top-down design, Breaking down a problem, Modeling OOP
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>define top-down design and object oriented programming</li>
      <li>break down real-world tasks using top-down design strategies</li>
      <li>model real-world objects and apps by breaking down their attributes and behaviors</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Follow-Ups and Goals</li>
      <li><strong>40 min: </strong><a href="#topdowndesign">Top Down Design</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>55 min: </strong><a href="#oop">Object Oriented Programming</a></li>
      <li><strong>15 min: </strong><a href="#homework">Assessment Preview</a></li>
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

- Nice work figuring out pull requests!

### Follow-Ups

- Some low survey scores on how to hook up a local repository (on your computer) with a remote one (on github). Definitely go over the task 1 from the hw again if it's still fuzzy
- Don't "Initial Commit" on an already-existing project (like the mod0resources repository); remember to start with a present-tense verb with a capital letter (like Add, Change, Remove, Fix, Make, etc.)
- Edit files using your text editor, not `echo`

### Other Notes

- Good commit message format: 

```
Add list of mod 0 resources
Remove reference to old blog post
Change data type of age field
Fix spelling mistake
```

- Not good commit message format: 

```
Rachel is adding her list of mod 0 resources
old blog post
changed data type for age field
Oops, I need to fix my spelling mistake
```

## Intros, Review, and Icebreaker

<div class="try-it">
  <h3>Intros, Review, and Icebreaker</h3>
  <p>Person with the shortest first name goes first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What's something you're really good at? (Don't be humble!)</p>
  <p>3. Accountability review: what tangible progress have you made toward the focus skills you identified at the beginning of Mod 0?</p>
  <p>Have extra time? Share what extra things you're doing to get ready to start school at Turing.</p>
</div>

<a name="topdowndesign"></a>
## Top Down Design

> "Programing is hard because it requires us to solve ill-defined problems with unknown solutions. Our job is to invent the solutions. Coding is inherently creative." - [Danny Smith on Breaking Down Problems](https://medium.com/@dannysmith/breaking-down-problems-its-hard-when-you-re-learning-to-code-f10269f4ccd5)

<span class="vocab">Top Down Design</span> (or step-wise design) is an approach to breaking down a problem or system. In this approach, the designer lays out the problem or system's high-level overview, then breaking down the overview into sub-systems (or sub-steps), then repeating that process until the system has been broken down into the smallest pieces. 

#### This is not top-down design:
<img style="width: 40%" src="https://afinde-production.s3.amazonaws.com/uploads/8706a488-d0f4-41ba-bf76-7151762fd5d1.jpg" alt="draw an owl meme">

<p><em><small>Credit: https://eurokeks.com/</small></em></p>

#### This is the start of a top-down approach:
<img style="width: 80%" src="images/draw_owl.png" alt="draw an owl top down design">


**Why is this important?** A problem that is not broken down into its smallest components remains too complex and abstract to code. In addition, small components allow for reusable and replaceable units of code. 

As humans, we memorize and practice the steps that it takes in order to do even the most basic tasks. If you tell a human to tie their shoe, you (generally) don't need to specify any further instructions. However, if you were to build a shoe-tying machine, you would need to break down the process into the most basic steps. 

<div class="try-it">
  <h3>Try It Together: Making Pizza</h3> 
  <p>Follow along with your paper and pencil as we walk through breaking down the process of making pizza.</p>
</div>

Now, in groups!

<div class="try-it">
  <h3>Try It (Break Out Rooms): Top Down Design (~12 minutes)</h3> 
  <p>The person whose first name starts closest to the letter F will pick a scenario below:</p>
  <ul>
    <li>Reheating a meal</li>
    <li>Mailing a package</li>
    <li>Walking a dog</li>
    <li>Putting children to bed</li>
    <li>Applying for a job</li>
    <li>Writing an essay</li>
    <li>Starting a campfire</li>
    <li>[Choose your own adventure]</li>
  </ul>
  <p>As a group, use a Top-Down Design approach to break down the scenario. Everyone should have their own diagram.</p>
  <p>Done? Review, revise, and choose another scenario.</p>
  <p>Be ready to share and explain.</p>
</div>

### Top Down Design in Programming

<img width="70%" src="https://i.ytimg.com/vi/DXEns9nWdqs/maxresdefault.jpg" alt="encrypt and decrypt top down design">
<p><small>Credit: Liam McQuay (IGCSE Computer Science Youtube Tutorial)</small></p>

Breaking down problems using top down design lends itself nicely to the object-oriented design principles of <span class="vocab">abstraction</span> (where an object performs a task without other objects being concerned about how it is done) and <span class="vocab">encapsulation</span> (where an object handles its own internal states and behind-the-scenes work). 

### Notating Top-Down Design for the Mod 0 Assessment

On your Mod 0 Assessment, you will be asked to break down a scenario using Top Down Design. We'll demonstrate the pizza scenario in a Github Gist. 

<div class="try-it">
  <h3>Try It: Notating Top Down Design (~5 minutes)</h3> 
  <p>Open a new gist and use decimal notation to write out your top down design appoach with the scenario you chose from your group.</p>
  <p>Post your gist link in the chat, and be ready to give feedback to the person you're paired up with (will be posted in the chat while you're working).</p>
</div>

<hr>
## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body. 
<hr>

<a href="" name="oop"></a>
## Object Oriented Programming

<span class="vocab">Object oriented programming</span>, or OOP for short, is an approach to programming (or a [programmming paradigm](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)) where programs are organized as a series of objects. 

OOP is very similar to how the world actually works. <span class="vocab">Objects</span> are created from templates that we call <span class="vocab">classes</span>. 

A class defines attributes (or properties) and methods (or actions). An object is a very specific instance of a class. For example, if the class were Car, two objects might be 2007 Blue Nissan Versa and 2014 Silver Nissan Juke.

<span class="vocab">Attributes</span> contain **data** about a specific object. The information format should be one of the basic data types from Session 2 (string, integer, float, boolean, array, hash). 

The names of attributes are generally nouns. 

Two good questions to ask when you're determining what should be classified as an attribute are: 

* "Is this piece of data something that could potentially stay the same over the course of an object's lifetime?" (you want the answer to be yes)
* "Is there any other data that underlies this piece of data?" (you want the answer to be no)

CAUTION: Sometimes, methods will *feel* like they should be attributes. For example: `age`, `years_employed`, `percent_full`. 

<div class="try-it">
  <h3>Try It Together: Bottle Class Attributes</h3> 
  <p>Follow along as we walk through defining a bottle class with three different bottle objects.</p>
  <b>NOTE</b>: For consistency in this lesson, we're going to stick to the naming convention of <code>snake_case</code>. This will look very Ruby-esque. However, in JavaScript land, you'll see <code>camelCase</code>. 
</div>

<span class="vocab">Methods</span> define **behavior** of an object, **actions** that can be performed on that object, or **calculations** that generally use . Methods are generally verbs (action words or short action phrases). 

Methods generally answer the question "What can this thing do?" or "What can be done to this thing?"

<div class="try-it">
  <h3>Try It Together: Bottle Class Methods</h3> 
  <p>Follow along as we walk through defining a bottle class with three different bottle objects.</p>
</div>

#### Key Points

* A method performs some kind of work and will almost always **use** or **modify** an attribute
* Anything that does work (calculations) should be a method, not an attribute
* Attributes are generally nouns (99.9% of time)
* Methods are generally verbs (90% of time -- can also be questions OR nouns that are the result of calculations)
* One quick side note: accessor methods are outside the scope of today's lesson. 

### Can You Spot the Problem? 

What would be wrong with...

* a class called `Turing` 
* an attribute called `current_time`
* having attributes for a `Review` class called `one_star`, `two_stars`, `three_stars`, etc.
* a `Senator` class having an array attribute called `senator_names`
* a class called `California`
* having attributes on a `ShoppingCart` class called `item_one`, `item_two`, `item_three`, etc.
* a method on `GroceryStore` called `clean_aisle_seven`
* a `Bottle` class having an attribute called `water`
* a `Chair` class having an attribute called `number_of_chairs`
* a `MenuItem` class with a method called `CustomerSurvey`

<div class="try-it">
  <h3>Try It (Big Breakout Rooms) (~15 minutes)</h3> 
  <p>Make a copy of <a href="https://docs.google.com/document/d/17NykxDAM3OrlAm4xwYLY7uh_YokLyPgP0ahmkJ1Rd5s/edit?usp=sharing" title="" target="_blank">this document</a> which your group will use to practice.</p>
  <p>Person whose first name starts closest to Q will share their screen and choose one of the following classes:</p>
  <ul>
    <li>Vehicle</li>
    <li>Book</li>
    <li>Playlist</li>
    <li>GroceryStore</li>
  </ul>
  <p>As a team, brainstorm at least five attributes (and data types) and five methods (and descriptions) for your chosen class. Each person should be keeping their own copy up to date to use as a reference.</p>
  <p>Person whose first name starts closest to the letter A will suggest an object that is an instance of the class. This is Object #1.</p>
  <p>Brainstorm the values for each attribute of that object.</p>
  <p>Brainstorm the results of each method called on that object.</p>
  <p>Person whose first name starts closest to the letter E will suggest a second object that is an instance of the class. This is Object #2.</p>
  <p>Repeat the brainstorm process for attributes and methods for object #2. </p>
</div>

### Notating Classes, Objects, Attributes, and Methods for the Mod 0 Assessment

On your Mod 0 Assessment, you will be asked to identify classes, objects, attributes, and methods. We'll demonstrate the format we want you to use.

<div class="try-it">
  <h3>Try It: Notating Classes, Objects, Attributes, and Methods</h3> 
  <p>Create two gists. In the first gist, use the notation we demonstrated to write out your class. In the second gist, use the notation we demonstrated to write out your first object.</p>
  <p>Post the links to both of your gists in the chat.</p>
</div>

### Example Files

- <a href="https://gist.github.com/rwarbelow/aa554ea9091efe6ed1a8ae66e95430a0" title="">Class Example</a>
- <a href="https://gist.github.com/rwarbelow/2639de952d5cc4e862662d04dfef2a64" title="">Object Example</a>
