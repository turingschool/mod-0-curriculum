---
layout: page
title: Session 4
subheading: Scavenger Hunt, Modeling OOP, Assessment Expectations
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>Define Object Oriented Programming</li>
      <li>Understand how to utilize error messages from git</li>
      <li>model real-world objects and apps by breaking down their attributes and behaviors</li>
      <li>understand assessment expecations</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>6:15 </strong>Follow-Ups and Goals</li>
      <li><strong>6:30 </strong><a href="#scavengerhunt">Scavenger Hunt</a></li>
      <li><strong>7:05 </strong>Break</li>
      <li><strong>7:10 </strong><a href="#oop">Object Oriented Programming</a></li>
      <li><strong>8:00 </strong><a href="#assessmentprev">Assessment Expectations</a></li>
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

- Awesome job asking questions in the Slack channel! And supporting your cohortmates.

- Nice scores on feedback! Love seeing people use the term 'practice'!

### Follow-Ups

- Leaving feedback directly on homework gists. You should have HW 1, session 2 feedback coming very soon if not yet. Feedback is for your own benefit... it would be wise to decipher it and update your hw.

- Prework is due January 6 for people starting Mod 1 in 2102 (or waitlist). Get on it!

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
  <p>Have extra time? Share what extra things you're doing to get ready to start mod 1</p>
</div>

<a name="scavengerhunt"></a>
## Scavenger Hunt

This portion of class was added because mod 1 instructors have noticed some behaviors in struggling students:
* Missing or not understanding directions
  * What strategies can you use to avoid this?
* Not reading error messages/using them to progress on a problem
  * What strategies can you use to avoid this?

In programming, we often need to follow tutorials in order to learn new things. *If you miss even one step,* **you'll get a different end result**.
Your challenge here is to **follow each step very diligently**. There are going to be things that you've already done, and things that you will need help from your old pal google to figure out on your own (I mean, tutorials can't tell you how to do everything right?).

The end goal here is to create a pull request. Something you just did as homework for session 3. Can't be that bad right?? Good luck!

We won't be available for help during this scavenger hunt, however write down the questions and issues you run into. We'll debrief as a group and answer any questions afterwards.

**Note:** The one exception to that rule is if you're asking for clarification on a given step. If you're unsure about what the directions are asking, please reach out in the slack thread.

<div class="try-it">
  <h3>Try It: Don't fork it up!</h3> 20 minutes (groups of 2)
  <p>At this point, we'll split into breakout rooms. Everyone should do a fist to five to show their comfort with git. Whoever is the least comfortable with git will share their screen. Whoever is sharing their screen will be called the <span class="vocab">driver</span>. Every other person in the room will be a <span class="vocab">navigator</span>.</p>

  <p>If you are already comfortable with git, your challenge during the breakout is somewhat more difficult: your goal is to focus on your explanations, communication, and ability to gauge whether or not another person understands you.</p>
  <ol>
    <li>Clone down this repo: https://github.com/damwhit/best-foods (do not fork it first)</li>
    <li>Create a new file within the repo called dumplings.txt</li>
    <li>Add pot stickers in snake case to the first line of the file</li>
    <li>Add and commit your changes (what should your message be?)</li>
    <li>List the origin for your repo from the command line</li>
    <li>Do you have access rights to push? why or why not?</li>
    <li>Create a new repo in GitHub called very-best-foods</li>
    <li>Change the origin of your local clone of best-foods to match the new very-best-foods repo you just created in GitHub</li>
    <li>How can you confirm that you changed the origin successfully?</li>
    <li>Push your changes from your local repo to your very-best-foods repo</li>
    <li>Is your local repo in sync with the very-best-foods repo in GitHub? How can you tell?</li>
    <li>In GitHub, change the first line of the readme to say very best foods in PascalCase (save and commit in GitHub)</li>
    <li>In your local clone, add a file called noodles.txt</li>
    <li>In that file, add fettucine alfredo in camel case to the first line</li>
    <li>Save, commit, and push your changes to your very-best-foods remote repo</li>
    <li>Can't push? Why not? ... follow the error message</li>
    <li>Once you've pushed, create another file locally called best.txt</li>
    <li>Add ramen to the 5th line of the file</li>
    <li>Save, commit, and push your changes</li>
    <li>Create a pull request to this directory: https://github.com/damwhit/very-best-foods</li>
    <li>Didn't work? Why not?</li>
    <li>Delete your very-best-foods github repo</li>
    <li>Fork David's repo above</li>
    <li>Push to that repo</li>
    <li>Can you create a pr now? Why?</li>
    <li>If you followed all of the directions above correctly, you should see no difference between the two repos in the pull request</li>
  </ol>
  <p><strong>Done?</strong> Switch drivers and try the process again!</p>
</div>

### Q and A time

<hr>
## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body.
<hr>

<a href="" name="oop"></a>
## Object Oriented Programming

<span class="vocab">Object oriented programming</span>, or OOP for short, is an approach to programming (or a [programmming paradigm](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)) where programs are organized as a series of objects.

OOP is very similar to how the world actually works. <span class="vocab">Objects</span> are created from templates that we call <span class="vocab">classes</span>.

A class defines attributes (or properties) and methods (or actions). You've heard the word instance, that's the same thing as an object in this case. For example, if the class were Car, two objects might be David's 2000 Honda Accord and Grandma's 2014 Subaru Forester. *There is only one of each of them*

Let's whiteboard this out...

<span class="vocab">Attributes</span> contain **data** about a specific object. The information format should be one of the basic data types from Session 1 (string, integer, float, boolean, array, hash).

#### Key Points

* An attribute is a characteristic
* Attribute names are generally nouns
* Or boolean attributes can be named as questions: ie. `is_open` or `was_recycled`
* Attributes *should not have underlying data*. For instance, since `volume` can be calculated from `length` x `width` x `height`, that should be a method instead

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

<span class="vocab">Methods</span> define the **behavior** of an object, **actions** that can be performed on that object, or **calculations** that use the object's attributes. Methods are generally verbs (action words or short action phrases).

Methods generally answer the question "What can this thing do?" or "What can be done to this thing?"

#### Key Points

* A method performs some kind of work and should **use** or **modify** an attribute
  * it can add to or take away from an attribute
  * it can reassign an attribute
  * it can toggle an attribute
* Anything that does work (calculations) should be a method, not an attribute
  * For instance, a `calculatePercentFull` method could divide the value of a `currentCapacity` attribute from the value of `totalCapacity` attribute.
* Methods are generally verbs (90% of time -- can also be questions OR nouns that are the result of calculations)
  * ie. `percent_full` or `volume` since they require calculation

<a href="" name="notateclasses"></a>
<div class="try-it">
  <h3>Try It Together: Bottle Class Methods</h3>
  <p>Follow along as we walk through defining some methods for our Bottle class.</p>
  <p> What kind of methods can we add?</p>
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
fill (adds 50 to currentCapacity)
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
color = "Pink"
lidType = "Twist top"
totalCapacity = 1000
stickers = ["I voted", "A basin", "Hello Kitty"]
currentCapacity = 800
recyclable = true


Methods:
calculatePercentFull: 800 / 1000 = .8
refill: currentCapacity = 850
addSticker: stickers = ["I voted", "A basin", "Hello Kitty", "Megan Thee Stallion"]
changeColor: color = "Blue"
```

<div class="try-it">
  <h3>Try It (Big Breakout Rooms) (~15 minutes) groups of 2 or 3</h3>
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

<div class="try-it">
  <h3>Try It: Can You Spot the Problem? (~10 minutes) groups of 2 or 3</h3>
    <p>What would be wrong with... </p>
    <ul>
      <li>a class called `Turing`</li>
      <li>an attribute called `current_time`</li>
      <li>having attributes for a `Review` class called `one_star`, `two_stars`, `three_stars`, etc.</li>
      <li>a `Senator` class having an array attribute called `senator_names`</li>
      <li>a class called `California`</li>
      <li>having attributes on a `ShoppingCart` class called `item_one`, `item_two`, `item_three`, etc.</li>
      <li>a method on `GroceryStore` called `clean_aisle_seven`</li>
      <li>a `Bottle` class having an attribute called `water`</li>
      <li>a `Chair` class having an attribute called `number_of_chairs`</li>
      <li>a `MenuItem` class with a method called `CustomerSurvey`</li>
    </ul>
</div>

<a name="assessmentprev"></a>
## Mod 0 Technical Assessment

This is our final Mod 0 technical session. Your assignment between now and Session 5 is to find 80 minutes to complete the [Mod 0 Technical Assessment](https://docs.google.com/forms/d/e/1FAIpQLScfI9RHD4u-hSf_2SL6b1GRBKgAM1KbNFVPCEk0-GreQeOeag/viewform?usp=sf_link).

### How Will I Be Assessed?
The purpose of the Mod 0 Assessment is to determine your readiness for Mod 1 based on your technical understanding of the core concepts of Mod 0, including:
- Attention to Detail
  - Proper sytax
  - Proper naming conventions
  - Proper spacing
- Carefully reading and following instructions
- Understanding of data types and variable assignment
- Git workflow
- Object Oriented Programmming (OOP) Principles
  - Attention to detail in instances and classes
  - Understanding of difference between instance and class
  - Understanding of attributes, including naming conventions and data types
  - Understanding of methods, including naming conventions relationship to specific attributes
  - Ability to create instance/class examples that demonstrate clear understanding of OOP Principles

<div class="instructions assessmentpreview">
  <h1>SAMPLE INSTRUCTIONS</h1>

  <p>The work portion of the assessment should take you approximately 70 minutes, but we recommend taking an additional 10 minutes to throughly read over the expectations outlined in this document. The timed nature is meant to get you used to working under pressure.</p>

  <p class="important"><strong>First,</strong> fork the assessment checklist. You will use this checklist to ensure that you have met the Mod 0 Technical Assessment expectations.</p>

  <h4>Part I: Creating Directories and Files; Initializing Git and Pushing to GitHub (10 min)</h4>

  <ol>
    <li>Use your terminal to create a directory called <code>assessment-practice</code></li>
    <li>Inside of that directory, make an empty text file called <code>final-assessment.txt</code></li>
    <li>Initialize your directory as a git repository.</li>
    <li>Add your file and commit using the message "Initial commit"</li>
    <li>Create a public repo on Github with the same name.</li>
    <li>Add the remote and push your local repository to Github.</li>
  </ol>

  <h4>Part II: Classes, Objects, Attributes, and Methods (35 min)</h4>

  <ol>
    <li>Inside of <code>assessment-practice</code>, create a new directory called <code>oop-practice</code></li>
    <li>Inside of <code>oop-practice</code>, create four files: <code>class-example-1.txt</code>, <code>class-1-object-instance.txt</code>, <code>class-example-2.txt</code>, and <code>class-2-object-instance.txt</code><em>(If you're comfortable trying markdown at this point, feel free to use .md instead of .txt).</em> </li>
    <li>Open up <code>class-example-1.txt</code> in your text editor.</li>
    <li>Brainstorm one class that might exist in a <code><b>SCHOOL</b></code> and put this at the top of the file.</li>
    <li>List at least four attributes for that class. In parentheses, list the data type for that attribute (string, boolean, integer, float, hash/object, datetime).</li>
    <li>List at least four methods for that class. In parentheses, explain what the method does, including the names of the attributes that it uses or modifies.</li>
    <li>Save your file.</li>
    <li>Add and commit your changes for this class.</li>
    <li>Open up <code>class-1-object-instance.txt</code> in your text editor.</li>
    <li>At the top, type the name of an object that is an instance of your class.</li>
    <li>List the values for each attribute.</li>
    <li>List the results of the method being called for this specific object.</li>
    <li>Save your file.</li>
    <li>Add and commit your changes for this class.</li>
    <li>Repeat steps 3-8 with <code>class-example-2.txt</code>. Be sure to create a different class example that still falls under the <code><b>SCHOOL</b></code> category. </li>
    <li>Repeat steps 9-14 with <code>class-2-object-instance.txt</code></li>
    <li>Push your changes to GitHub.</li>
  </ol>

  <h4>Part III: Program Specific Challenge (25 min)</h4>

  <ol>
    <li>Open up your <code>final-assessment.txt</code> file in your text editor.</li>
    <li>You'll be given directions for some exercises that are program specific. Looking for something to study? Check out session 1 on data types and variable assignment. The mod 1 pre-work is also a good resource.</li>
    <li>Concepts to focus on: data types, variable assignment rules, variable assignment syntax, naming conventions for data types and variables</li>
    <li>Save your file.</li>
    <li>Add and commit your changes.</li>
    <li>Push your changes to Github.</li>
  </ol>

  <h4 class="important">Done?</h4>
  <p>There is a link to a google form where you'll submit your mod 0 assessment repo at the end of your checklist</p>
</div>

 
### FAQs
* **Can I update my work after I've committed a file?**
  * Yes, please do. Update and commit away!
* **I messed up my commit message. Should I fix it?**
  * No, mistakes happen. We don't want you wasting time on that. 
  * Just be more diligent on the next commit. You should be committing often (after each each piece of discrete work) so you should have multiple opportunities to show mastery of strong git workflow and commit messages. 