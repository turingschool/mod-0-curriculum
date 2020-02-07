---
layout: page
title: Session 4
subheading: Top-down design, Breaking down a problem, Modeling OOP, Assessment Expectations
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>define top-down design and object oriented programming</li>
      <li>break down real-world tasks using top-down design strategies</li>
      <li>model real-world objects and apps by breaking down their attributes and behaviors</li>
      <li>understand assessment expecations</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Follow-Ups and Goals</li>
      <li><strong>45 min: </strong><a href="#topdowndesign">Top Down Design</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>45 min: </strong><a href="#oop">Object Oriented Programming</a></li>
      <li><strong>15 min: </strong><a href="#assessmentprev">Assessment Expectations</a></li>
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

- Good survey scores regarding git and github.

### Follow-Ups

- Leaving feedback directly on homework gists. Make sure you're checking them. We'll reach out in slack if we have major concerns.
- Remember to be aware of where you are in your directory structure of the terminal before you clone anything down or start running git commands. Always run ls after cloning

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
  <p>2. What music are you listening to currently, and is there any music that you've found to be helpful when you're studying/programming? </p>
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
  <p>Lets do this interactively where the class navigates and I drive</p>
</div>

Now, in groups!

<div class="try-it">
  <h3>Try It (Break Out Rooms): Top Down Design (~10 minutes)</h3>
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
  <p>Don't worry about conditional logic. Only focus on breaking down the problems as much as you can</p>
  <p>Done? Review, revise, and choose another scenario.</p>
  <p>Be ready to share and explain.</p>
</div>

### Top Down Design in Programming

<img width="70%" src="https://i.ytimg.com/vi/DXEns9nWdqs/maxresdefault.jpg" alt="encrypt and decrypt top down design">
<p><small>Credit: Liam McQuay (IGCSE Computer Science Youtube Tutorial)</small></p>

Breaking down problems using top down design lends itself nicely to the object-oriented design principle of <span class="vocab">abstraction</span> (where an object performs a task without other objects being concerned about how it is done).

<a name="notatetopdowndesign"></a>
### Notating Top-Down Design in a .txt file

In programming, it's useful to break down problems into smaller sub problems so that we can more easily make progress towards the larger goal. This process is sometimes referred to as pseudo coding. We'll demonstrate the pizza scenario in a text (.txt) file.

```
1 Make dough
  1.1 Add ingredients to bowl
    1.1.1 Add water
      1.1.1.1 get measuring cup
      1.1.1.2 go to sink
      1.1.1.3 fill up the measuring cup with 3 cups of water
      1.1.1.3 pour contents from measuring cup into bowl
    1.1.2 Add honey
    1.1.3 Add yeast
    1.1.4 Add flour
  1.2 Mix Ingredients until combined
  1.3 Knead dough
  1.4 Let rest
    1.4.1 set the timer for 30 minutes
    1.4.2 wait
2 Make sauce
3 Make crust
4 Add sauce and toppings
```


<div class="try-it">
  <h3>Try It (Break Out Rooms): Top Down Design (~15 minutes)</h3>
  <p>If at any point you run into problems with git - keep moving forward on the top down design part of this exercise. Come back to this and work through any issues with git/github after class. You will also get practice in your homework</p>
  <p>These steps do not need to be done in perfect order. Practice the workflow and the order of steps that you're comfortable with.</p>
  <p>Create a new directory called top_down_design_practice</p>
  <p>Open a new file (.txt format) in this directory and use decimal notation to write out your top down design appoach with the scenario you chose from your group.</p>
  <p>Make sure to follow the same format that was demonstrated and shown above</p>
  <p>After you've made some entries, initialize your repository with git</p>
  <p>Add your file and make an initial commit</p>
  <p>Run <code>git push</code> at this point and see what the output is</p>
  <p>Create a repository on github that you can connect to your local repository</p>
  <p>Add more steps</p>
  <p>Add and commit your progress</p>
  <p>Push to github</p>
  <p>Check one anothers files to make sure that the format is correctly notated and indented (although .txt code is unbreakable, it's important to have an eye for detail as most languages will break if syntax is incorrect. And indentation helps make our code more readable)</p>
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

<span class="vocab">Attributes</span> contain **data** about a specific object. The information format should be one of the basic data types from Session 1 (string, integer, float, boolean, array, hash).

The names of attributes are generally nouns.

A good question to ask when you're determining what should be classified as an attribute is:

* "Is there any other data that underlies this piece of data?" (you want the answer to be no)

CAUTION: Sometimes, methods will *feel* like they should be attributes. For example: `percent_full`.

<div class="try-it">
  <h3>Try It Together: Bottle Class Attributes</h3>
  <p>Follow along as we walk through defining a bottle class with three different bottle objects.</p>
  <b>NOTE</b>: For consistency in this lesson, we're going to stick to the naming convention of <code>camelCase</code>. This will look very Javascript-esque. However, in Ruby land, you'll see <code>snake_case</code>.
</div>

```
Class: Bottle

Attributes:
color (string)
lidType (string)
totalCapacity (integer)
stickers (array)
currentCapacity (integer)
recyclable (boolean)
insulated (boolean)
```

<span class="vocab">Methods</span> define **behavior** of an object, **actions** that can be performed on that object, or **calculations** that generally use. Methods are generally verbs (action words or short action phrases).

Methods generally answer the question "What can this thing do?" or "What can be done to this thing?"

A <span class="vocab">return value</span> is the result of a method that performs a calculation.
For instance, a `calculatePercentFull` method could divide the value of a `currentCapacity` attribute from the value of `totalCapacity` attribute. The result of that calculation would be the **return value** for `calculatePercentFull` method.

#### Key Points

* A method performs some kind of work and will almost always **use** or **modify** an attribute
* Anything that does work (calculations) should be a method, not an attribute
  * the result of that work is called the **return value**
* Attributes are generally nouns (99.9% of time)
* Methods are generally verbs (90% of time -- can also be questions OR nouns that are the result of calculations)
  * ie. `percent_full` since it requires calculation

<a href="" name="notateclasses"></a>
<div class="try-it">
  <h3>Try It Together: Bottle Class Methods</h3>
  <p>Follow along as we walk through defining some methods for our Bottle class.</p>
  <p> What kind of methods can we add? What would their return value be?</p>
</div>

```
Class: Bottle

Attributes:
color (string)
lidType (string)
totalCapacity (integer)
stickers (array)
currentCapacity (integer)
recyclable (boolean)

Methods:
calculatePercentFull (divides currentCapacity by totalCapacity)
refill (subtracts currentCapacity from totalCapacity and then refills that amount)
addSticker (append a sticker item into the stickers array)
changeColor (changes the color attribute)
```

<a href="" name="notateobjects"></a>
<div class="try-it">
  <h3>Try It Together: Defining Bottle Class Instances</h3>
  <p>Follow along as we walk through defining a couple instances</p>
  <p>Make sure that your syntax is correct for each data type: if it's a string, the value below should be wrapped in quotes. If it's an array, each item in the collection should be valid data as well, etc.</p>
</div>

```
Object: Nalgene

Attributes:
color: "Pink"
lidType: "Twist top"
...


Methods:
calculatePercentFull: 800 / 1000 = .8
changeColor: color = "Blue"
...
```

<div class="try-it">
  <h3>Try It (Big Breakout Rooms) (~15 minutes)</h3>
  <p>Person whose first name starts closest to Q will share their screen and choose one of the following classes:</p>
  <ul>
    <li>Vehicle</li>
    <li>Book</li>
    <li>Playlist</li>
    <li>GroceryStore</li>
  </ul>
  <p>Everyone should create a .txt file to work off of following the conventions we used above for defining classes and instances</p>
  <p>As a team, brainstorm at least five attributes (and data types) and five methods (and descriptions) for your chosen class. Each person should be keeping their own copy up to date to use as a reference.</p>
  <p>Person whose first name starts closest to the letter A will suggest an object that is an instance of the class. This is Object #1.</p>
  <p>Brainstorm the values for each attribute of that object.</p>
  <p>Brainstorm the results of each method called on that object.</p>
  <p>Person whose first name starts closest to the letter E will suggest a second object that is an instance of the class. This is Object #2.</p>
  <p>Repeat the brainstorm process for attributes and methods for object #2. </p>
</div>

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

<a name="assessmentprev"></a>
## Mod 0 Technical Assessment

This is our final Mod 0 technical session. Your assignment between now and Session 5 is to find 80 minutes  to complete the [Mod 0 Technical Assessment](https://fierce-beyond-34376.herokuapp.com).

<div class="instructions assessmentpreview">
  <h1>SAMPLE INSTRUCTIONS</h1>

  <p>This work portion assessment should take you approximately 70 minutes, but we recommend taking an additional 10 minutes to throughly read over the expectations outlined in this document. The timed nature is meant to get you used to working under pressure.</p>

  <p class="important"><strong>First,</strong> fork the assessment checklist. You will use this checklist to ensure that you have met the Mod 0 Technical Assessment expectations.</p>

  <h4>Part I: Creating Directories and Files; Initializing Git and Pushing to GitHub (10 min)</h4>

  <ol>
    <li>Use your terminal to create a directory called <code>...</code></li>
    <li>Inside of that directory, make an empty text file called <code>...</code></li>
    <li>Initialize your directory as a git repository.</li>
    <li>Add your file and commit using the message "Initial commit"</li>
    <li>Create a public repo on Github with the same name.</li>
    <li>Add the remote and push your local repository to Github.</li>
  </ol>

  <h4>Part II: Classes, Objects, Attributes, and Methods (35 min)</h4>

  <ol>
    <li>Inside of <code>...</code>, create a new directory called <code>...</code></li>
    <li>Inside of <code>...</code>, create four files: <code>...</code>, <code>...</code>, <code>...</code>, and <code>...</code><em>(If you're comfortable trying markdown at this point, feel free to use .md instead of .txt).</em> </li>
    <li>Open up <code>...</code> in your text editor.</li>
    <li>Brainstorm one class that might exist in a <code>...</code> and put this at the top of the file.</li>
    <li>List at least four attributes for that class. In parentheses, list the data type for that attribute (string, boolean, integer, float, hash/object, datetime).</li>
    <li>List at least four methods for that class. In parentheses, explain what the method does, including the names of the attributes that it uses or modifies.</li>
    <li>Save your file.</li>
    <li>Add and commit your changes for this class.</li>
    <li>Open up <code>...</code> in your text editor.</li>
    <li>At the top, type the name of an object that is an instance of your class.</li>
    <li>List the values for each attribute.</li>
    <li>List the results of the method being called for this specific object.</li>
    <li>Save your file.</li>
    <li>Add and commit your changes for this class.</li>
    <li>Repeat steps 3-8 with <code>...</code></li>
    <li>Repeat steps 9-14 with <code>...</code></li>
    <li>Push your changes to GitHub.</li>
  </ol>

  <h4>Part III: Program Specific Challenge (25 min)</h4>

  <ol>
    <li>Open up your <code>...</code> file in your text editor.</li>
    <li>You'll be given directions for some exercises that are program specific. Looking for something to study? Check out session 1 on data types and variable assignment. The capstone is also a good resource.</li>
    <li>Save your file.</li>
    <li>Add and commit your changes.</li>
    <li>Push your changes to Github.</li>
  </ol>

  <h4 class="important">Done?</h4>
  <p>There is a link to a google form where you'll submit your mod 0 assessment repo at the end of your checklist</p>
</div>

Be sure to fill out the survey from your project board!
